'use client';

import React, { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
  };

  const decrement = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-4 rounded shadow-md">
        <div className="flex items-center space-x-4">
          <button
            onClick={decrement}
            disabled={quantity === 1}
            className="px-3 py-1 bg-blue-700 rounded disabled:opacity-50 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
          >
            -
          </button>
          <span className="font-medium text-lg text-black">{quantity}</span>
          <button
            onClick={increment}
            disabled={quantity === 20}
            className="px-3 py-1 bg-blue-700 rounded disabled:opacity-50 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}