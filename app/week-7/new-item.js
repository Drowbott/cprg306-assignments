import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('Produce');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    if (!name.trim()) {
      setError(true);
      return;
    }

    const newItem = {
      id: uuidv4(),
      name,
      quantity,
      category,
      emoji: ''
    };
    onAddItem(newItem);
    setName('');
    setQuantity(1);
    setCategory('');
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  return (
    <div className="mb-1 p-4">
      <form className="bg-gray-800 p-2 rounded w-fit" onSubmit={handleSubmit}>
        {error && (
          <div className="bg-red-500 text-white p-2 rounded mb-2">
            Please fill out the Item Name field.
          </div>
        )}
        <div className="mb-2 relative">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Item Name"
            className="w-80 bg-gray-700 text-white p-2 rounded"
          />
        </div>
        <div className="mb-2 flex space-x-2 items-center">
          <div className='bg-white rounded p-1 w-32'>
          <span className="text-black text-lg font-medium mx-2">{quantity}</span>
          <button
              type="button"
              onClick={handleDecrement}
              className={`bg-blue-600 hover:bg-gray-500 text-white py-0 px-2 ml-8 rounded text-1xl decre ${quantity === 1 ? 'bg-gray-400' : ''}`}
              disabled={quantity === 1}
            >-</button>
          <button 
          type="button" 
          onClick={handleIncrement} 
          className="bg-blue-600 hover:bg-gray-500 text-white py-0 px-2 ml-2 rounded text-1xl">+</button>
          </div>
          <div className="w-12"></div>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-32 bg-gray-700 text-white p-2 rounded">
            <option value="produce">Produce</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="household">Household</option>
            <option value="dairy">Dairy</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-80">Add Item</button>
      </form>
    </div>
  );
};

export default NewItem;