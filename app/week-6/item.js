import React from 'react';

const Item = ({ item }) => {
  return (
    <li className="flex items-center justify-between w-96 ml-4 bg-gray-800 text-white rounded-md mb-2 p-2">
      <div>
        <span className="text-xl font-medium">{item.name} {item.emoji}</span>
        <span className="text-sm text-gray-400">Buy {item.quantity} in {item.category}</span>
      </div>
    </li>
  );
};

export default Item;