import React from 'react';

const Item = ({ item }) => {
    return (
        <li className="flex items-center justify-between w-96 ml-4 bg-gray-800 text-white rounded-md mb-2 p-2">
            <div>
                <div>
                <span className="text-1x-l font-medium">
                    {item.name || 'Unknown Item'} {item.emoji || ''}
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