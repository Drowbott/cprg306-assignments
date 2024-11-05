import React from 'react';

const Item = ({ item, onSelect }) => {
  const handleClick = () => {
    onSelect(item);
  };

  const cleanedName = item.name.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');

  return (
    <li className="flex items-center justify-between w-96 ml-4 bg-gray-800 text-white rounded-md mb-2 p-2 cursor-pointer hover:bg-gray-700" onClick={handleClick}>
      <div>
        <div>
          <span className="text-xl font-medium">
            {cleanedName} {item.emoji || ''}
          </span>
        </div>
        <span className="text-sm text-gray-400">
          Buy {item.quantity || 0} in {item.category || 'Unknown Category'}
        </span>
      </div>
    </li>
  );
};

export default Item;