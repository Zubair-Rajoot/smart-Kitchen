import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData";
function fetchStockData() {
  try {
    const storedStockData = localStorage.getItem("stock");
    return storedStockData ? JSON.parse(storedStockData) : [];
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return [];
  }
}

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
  cartItems: cartInfo,
  kitchenStock: fetchStockData,
};

console.log("userInfo:", userInfo);
console.log("cartInfo:", cartInfo);
console.log("fetchStockData:", fetchStockData);

