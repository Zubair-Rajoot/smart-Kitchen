import React, { useState, useEffect } from "react";
import { fetchStock, addStock, removeStock, updateStock,stockData } from "../utils/kitchenFunctions";


const KitchenContainer = () => {
  const [stock, setStock] = useState([]);
  const [stockItem, setStockItem] = useState({ name: "", quantity: "" });
  const [selectedStockItemId, setSelectedStockItemId] = useState("");
  const [updatedStockQuantity, setUpdatedStockQuantity] = useState("");

  useEffect(() => {
    const initialStock = fetchStock();
    console.log('Initial Stock:', initialStock);
    setStock(initialStock.length ? initialStock : stockData);
  }, []);


  
  
  

  const handleAddStock = () => {
    const updatedStock = addStock({ id: Date.now(), ...stockItem });
    setStock(updatedStock);
    setStockItem({ name: "", quantity: "" });
  };

  const handleUpdateStock = () => {
    const updatedStock = updateStock(selectedStockItemId, updatedStockQuantity);
    setStock(updatedStock);
    setSelectedStockItemId("");
    setUpdatedStockQuantity("");
  };
  

  const handleRemoveStock = (stockItemId) => {
    const updatedStock = removeStock(stockItemId);
    setStock(updatedStock);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mb-4">Kitchen Stock</h2>
  
      {/* Add Stock */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Item Name"
          value={stockItem.name}
          onChange={(e) => setStockItem({ ...stockItem, name: e.target.value })}
          className="px-4 py-2 border rounded mr-2"
        />
        <input
          type="number"
          step="0.01"
          placeholder="Quantity (kg)"
          value={stockItem.quantity}
          onChange={(e) => setStockItem({ ...stockItem, quantity: e.target.value })}
          className="px-4 py-2 border rounded mr-2"
        />
        <button onClick={handleAddStock} className="px-4 py-2 bg-green-500 text-white rounded">
          Add Stock
        </button>
      </div>
  
      {/* Update Stock */}
      <div className="mb-4">
        <select
          value={selectedStockItemId}
          onChange={(e) => setSelectedStockItemId(e.target.value)}
          className="px-4 py-2 border rounded mr-2"
        >
          <option value="">Select Item to Update</option>
          {stock.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          step="0.01"
          placeholder="New Quantity (kg)"
          value={updatedStockQuantity}
          onChange={(e) => setUpdatedStockQuantity(e.target.value)}
          className="px-4 py-2 border rounded mr-2"
        />
        <button onClick={handleUpdateStock} className="px-4 py-2 bg-blue-500 text-white rounded">
          Update Stock
        </button>
      </div>
  
      {/* List of Stock */}
      <ul className="mb-4">
        {stock && stock.length > 0 ? (
          stock.map((item) => (
            <li key={item.id} className="flex items-center justify-between">
              <span>{item.name} - {item.quantity} kg</span>
              <button onClick={() => handleRemoveStock(item.id)} className="text-red-500">
                Remove Stock
              </button>
            </li>
          ))
        ) : (
          <li>No stock available</li>
        )}
      </ul>
    </div>
  );
  
};

export default KitchenContainer;
