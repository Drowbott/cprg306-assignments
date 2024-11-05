"use client";

import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
};

const fetchMealRecipe = async (idMeal) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.meals[0] || null;
    } catch (error) {
        console.error("Error fetching meal recipe:", error);
        return null;
    }
};

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [error, setError] = useState(null);

    const loadMealIdeas = async () => {
        setError(null);
        try {
            if (!ingredient) {
                setMeals([]);
                return;
            }
            const fetchedMeals = await fetchMealIdeas(ingredient);
            setMeals(fetchedMeals);
        } catch (error) {
            setError(error);
        }
    };

    const handleMealClick = async (idMeal) => {
        setError(null);
        try {
            const recipe = await fetchMealRecipe(idMeal);
            setSelectedMeal(recipe);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="flex-start bg-gray-800 text-white p-4 rounded w-1/3">
            <h2 className='text-2xl'>Meal Ideas</h2>
            {meals.length > 0 ? (
                <ul className="list-disc">
                    {meals.map((meal) => (
                        <ul key={meal.idMeal} onClick={() => handleMealClick(meal.idMeal)} className="cursor-pointer bg-blue-500 hover:bg-blue-700 p-2 rounded mb-2">
                            <h3 className="font-medium">{meal.strMeal}</h3>
                            {selectedMeal && selectedMeal.idMeal === meal.idMeal && (
                                <div>
                                    <p className="font-bold">Ingredients:</p>
                                    <ul className="list-disc list-inside">
                                        {Object.entries(selectedMeal)
                                            .filter(([key]) => key.startsWith('strIngredient') && selectedMeal[key])
                                            .map(([key, value], index) => {
                                                const measureKey = `strMeasure${index + 1}`;
                                                const measure = selectedMeal[measureKey] || '';
                                                return <li key={key}>{measure} {value}</li>;
                                            })}
                                    </ul>
                                </div>
                            )}
                        </ul>
                    ))}
                </ul>
            ) : (
                <p>No meal ideas found for "{ingredient || 'no item selected'}".</p>
            )}
        </div>
    );
};

export default MealIdeas;