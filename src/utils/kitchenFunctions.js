

// kitchenFunctions.js


export const stockData = () =>{
  stockData = localStorage.getItem("stock");
  const stock = stockData ? JSON.parse(stockData) : [];
  return stock;
}

export const fetchStock = () => {
  try {
    const stockData = localStorage.getItem("stock");
    const stock = stockData ? JSON.parse(stockData) : [];
    return stock;
  } catch (error) {
    console.error("Error fetching stock:", error);
    return [];
  }
};
// ... (other functions)


export const addStock = (stockItem) => {
  const stock = fetchStock();
  stock.push(stockItem);
  localStorage.setItem("stock", JSON.stringify(stock));
  return stock;
};

export const removeStock = (stockItemId) => {
  const stock = fetchStock().filter((item) => item.id !== stockItemId);
  localStorage.setItem("stock", JSON.stringify(stock));
  return stock;
};

export const updateStock = (id, newQuantity) => {
  try {
    const existingStock = fetchStock();
    const updatedStock = existingStock.map((item) => {
      if (item.id === id) {
        // Update the quantity of the matching stock item
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    localStorage.setItem("stock", JSON.stringify(updatedStock));
  } catch (error) {
    console.error("Error updating stock:", error);
  }
};


