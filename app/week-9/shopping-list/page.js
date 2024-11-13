"use client";

import React, { useState, useEffect } from 'react';
import NewItem from './new-item.js';
import ItemList from './item-list.js';
import MealIdeas from './meal-ideas.js';
import itemsData from './items.json';
import { useRouter } from 'next/navigation';
import { useUserAuth } from "../_utils/auth-context";
const Page = () => {
    const { user } = useUserAuth();
    const router = useRouter();
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (item) => {
        const match = item.name.match(/^[a-zA-Z\s]+/);
        const ingredientName = match ? match[0].trim().toLowerCase() : '';
        setSelectedItemName(ingredientName);
    };

    useEffect(() => {
        if(!user) {
            router.push('/');
        }
    }, [user, router]);

    if(!user) {
        return null;
    }

    return (
        <div className="flex bg-slate-950">
            <div className="w-1/4 p-0">
                <h1 className="p-2 text-3xl font-bold">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} className="p-4" />
            </div>
            <div className="w-1/2 p-4">
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </div>
    );
};

export default Page;