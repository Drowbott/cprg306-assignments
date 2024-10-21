"use client";

import React, { useState } from 'react';
import Item from './item.js';
import items from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');

  const renderItems = () => {
    switch (sortBy) {
      case 'name':
        return (
          <ul>
            {[...items].sort((a, b) => a.name.localeCompare(b.name)).map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </ul>
        );
      case 'category':
        return (
          <ul>
            {[...items].sort((a, b) => a.category.localeCompare(b.category)).map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </ul>
        );
      case 'groupedCategory':
        const groupedItems = {};
        items.forEach(item => {
          if (!groupedItems[item.category]) {
            groupedItems[item.category] = [];
          }
          groupedItems[item.category].push(item);
        });

        const sortedCategories = Object.keys(groupedItems).sort();

        return (
          <div>
            {sortedCategories.map(category => (
              <div key={category} className="mb-2">
                <h3 className="text-lg font-medium text-gray-200">{category}</h3>
                <ul>
                  {groupedItems[category].map(item => (
                    <Item key={item.id} item={item} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      default:
        return <p>No sorting selected</p>;
    }
  };

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`bg-${sortBy === 'name' ? 'blue-500' : 'gray-600'} text-white font-medium py-1 px-2 rounded hover:bg-blue-700`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`bg-${sortBy === 'category' ? 'blue-500' : 'gray-600'} text-white font-medium py-1 px-2 rounded hover:bg-blue-700`}
        >
          Category
        </button>
        <button
          onClick={() => setSortBy('groupedCategory')}
          className={`bg-${sortBy === 'groupedCategory' ? 'blue-500' : 'gray-600'} text-white font-medium py-1 px-2 rounded hover:bg-blue-700`}
        >
          Grouped Category
        </button>
      </div>
      {renderItems()}
    </div>
  );
};

export default ItemList;