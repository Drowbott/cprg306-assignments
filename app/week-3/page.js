import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className=" p-2 ">
      <h1 className="text-4xl font-bold mb-2">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;