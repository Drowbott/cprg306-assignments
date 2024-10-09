'use client';
import React, { useState } from 'react';

const categories = [
  "Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"
];

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
  };

  const decrement = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: name,
      quantity: quantity,
      category: category
    };

    console.log(newItem);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-xl w-96 text-black">
        <div className="mb-4">
          <label htmlFor="name" className="block text-black font-medium mb-2">Item name</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            required 
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>

        <div className="mb-4 flex items-center">
          <div className="flex border rounded-lg overflow-hidden">
            <button
              onClick={decrement}
              disabled={quantity === 1}
              className="px-3 py-1 bg-blue-700 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-blue-300 disabled:opacity-50"
              type="button"
            >
              -
            </button>
            <span className="px-3 py-1 font-medium text-lg border-x border-gray-300">{quantity}</span>
            <button
              onClick={increment}
              disabled={quantity === 20}
              className="px-3 py-1 bg-blue-700 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-blue-300 disabled:opacity-50 text-black"
              type="button"
            >
              +
            </button>
          </div>
          <select
            id="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="ml-4 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-300">
          +
        </button>
      </form>
    </div>
  );
}