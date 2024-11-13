"use client";

import React from 'react';
import Item from './item.js';
import { useState } from 'react';

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState('name');

  const renderItems = () => {
    let sortedItems = [...items];

    switch (sortBy) {
      case 'name':
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'category':
        sortedItems.sort((a, b) => a.category.localeCompare(b.category));
        break;
    }

    return (
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} onSelect={onItemSelect} />
        ))}
      </ul>
    );
  };

  return (
    <div>
      <div className="flex space-x-4 mb-4 pl-8">
        <p>Sort by:</p>
        <button onClick={() => setSortBy('name')} className={`bg-${sortBy === 'name' ? 'blue-500' : 'gray-600'} text-white font-medium py-1 px-2 rounded hover:bg-blue-700`}>Name</button>
        <button onClick={() => setSortBy('category')} className={`bg-${sortBy === 'category' ? 'blue-500' : 'gray-600'} text-white font-medium py-1 px-2 rounded hover:bg-blue-700`}>Category</button>
      </div>
      {renderItems()}
    </div>
  );
};

export default ItemList;