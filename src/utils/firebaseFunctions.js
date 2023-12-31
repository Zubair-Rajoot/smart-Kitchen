import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

// Saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

// getall food items
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "foodItems"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};



export const fetchStock = () => {
  try {
    const stockData = localStorage.getItem("stock");
    const stock = stockData ? JSON.parse(stockData) : [];
    return stock;  // Ensure this returns a valid array
  } catch (error) {
    console.error("Error fetching stock:", error);
    return [];
  }
};


// Add stock
export const addStock = (stockItem) => {
  const stock = fetchStock();
  stock.push(stockItem);
  localStorage.setItem("stock", JSON.stringify(stock));
  return stock; // Return the updated stock
};

// Remove stock
export const removeStock = (stockItemId) => {
  const stock = fetchStock().filter((item) => item.id !== stockItemId);
  localStorage.setItem("stock", JSON.stringify(stock));
  return stock; // Return the updated stock
};

// Update stock
// kitchenFunctions.js

export const updateStock = (id, newQuantity) => {
  try {
    const existingStock = fetchStock();
    console.log('Existing stock:', existingStock);  // Log existingStock

    const updatedStock = existingStock.map((item) => {
      if (item.id === id) {
        // Update the quantity of the matching stock item
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    console.log('Updated stock:', updatedStock);
    localStorage.setItem("stock", JSON.stringify(updatedStock));
    return updatedStock;
  } catch (error) {
    console.error("Error updating stock:", error);
    return [];
  }
};



// ... (other functions)

