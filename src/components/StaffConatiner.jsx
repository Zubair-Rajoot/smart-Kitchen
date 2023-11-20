import React from 'react';
import { useNavigate } from 'react-router-dom';

const StaffContainer = () => {
  const navigate = useNavigate();

  const handleAddChef = () => {
    navigate('/chef');
  };

  const handleAddDeliveryBoy = () => {
    navigate('/rider');
  };

  const handleAddWaiter = () => {
    navigate('/waiter');
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mb-4">Staff Management</h2>

      {/* Add Chef Button */}
      <button onClick={handleAddChef} className="px-4 py-2 bg-green-500 text-white rounded mb-2">
        Chef Information
      </button>

      {/* Add Delivery Boy Button */}
      <button onClick={handleAddDeliveryBoy} className="px-4 py-2 bg-blue-500 text-white rounded mb-2">
        DeliveryBoy
      </button>

      {/* Add Waiter Button */}
      <button onClick={handleAddWaiter} className="px-4 py-2 bg-yellow-500 text-white rounded">
        Waiter
      </button>
    </div>
  );
};

export default StaffContainer;
