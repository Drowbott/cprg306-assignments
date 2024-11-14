"use client";
import React, { useState, useEffect } from 'react';
import NewItem from './new-item.js';
import ItemList from './item-list.js';
import MealIdeas from './meal-ideas.js';
import { useRouter } from 'next/navigation';
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from '../_services/shopping-list-service';

const Page = () => {
    const { user } = useUserAuth();
    const router = useRouter();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const [loading, setLoading] = useState(true);

    const loadItems = async () => {
      if (user) {
        try {
          setLoading(true);
          const userItems = await getItems(user.uid);
          setItems(userItems);
        } catch (error) {
          console.error("Error loading items:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    useEffect(() => {
        if (!user) {
            router.push('/');
        } else {
          loadItems();
        }
    }, [user, router]);

    const handleAddItem = async (newItem) => {
      if (user) {
        try {
          const newItemId = await addItem(user.uid, newItem);
          setItems([...items, { ...newItem, id: newItemId }]);
        } catch (error) {
          console.error("Error adding item:", error);
        }
      }
    };

    const handleItemSelect = (item) => {
        const match = item.name.match(/^[a-zA-Z\s]+/);
        const ingredientName = match ? match[0].trim().toLowerCase() : '';
        setSelectedItemName(ingredientName);
    };

    if (!user) {
        return null;
    }

    if (loading) {
      return <div>Loading...</div>;
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