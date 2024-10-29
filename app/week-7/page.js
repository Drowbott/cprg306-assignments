"use client";

import React, { useState } from 'react';
import NewItem from './new-item.js';
import ItemList from './item-list.js';
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className='bg-slate-950'>
      <h1 className='p-2 text-3xl font-bold'>Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
};

export default Page;