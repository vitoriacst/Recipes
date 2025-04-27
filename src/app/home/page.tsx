'use client';

import { Card } from '@/components/Card';
import { CategoriesList } from '@/components/CategoriesList';
import { DrinksContext } from '@/context/DrinksContext';
import { FoodsContext } from '@/context/FoodsContext';
import { Plus } from 'lucide-react';
import { useContext, useEffect, useRef } from 'react';

export default function Home() {
  useEffect(() => {
    getlistOfCategories();
    getDrinksByCategories();
    getFoods();
    getFoodsCategory();
  }, []);

  const drinkContext = useContext(DrinksContext);
  const foodContext = useContext(FoodsContext);

  if (!drinkContext) {
    throw new Error('DrinksContext must be used within a DrinksProvider');
  }

  if (!foodContext) {
    throw new Error('DrinksContext must be used within a DrinksProvider');
  }

  const {
    drinksCategories,
    drinks,
    getlistOfCategories,
    getDrinksByCategories,
  } = drinkContext;

  const { foods, foodsCategories, getFoods, getFoodsCategory } = foodContext;

  const scrollContainerRef = useRef(null);

  const drinksToShow = drinks ? drinks.slice(0, 6) : [];
  const foodsToShow = foods ? foods.slice(0, 6) : [];

  return (
    <section className="flex flex-col items-start justify-start p-6 bg-gray-100 min-h-screen">
      <div className="w-full flex flex-col gap-2">
        <div className="flex flex-center justify-between">
          <h1 className="text-4xl text-red-800 font-bold mb-6">Foods</h1>
          <button className="transition-transform duration-300 ease-in-out hover:-translate-y-1 cursor-pointer flex items-center gap-2 justify-center">
            ver mais
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <h4 className="text-lg text-gray-700 mb-2">Categories</h4>
        <div className="flex flex-wrap gap-4 mb-2">
          {foodsCategories &&
            foodsCategories.map((item, index) => (
              <CategoriesList key={index} categories={item.strCategory} />
            ))}
        </div>

        <div className="relative w-full">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 py-4 scrollbar-hide w-full px-2"
          >
            {foodsToShow &&
              foodsToShow.map((item, index) => (
                <div key={index}>
                  <Card title={item.strMeal} image={item.strMealThumb} />
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-center justify-between">
          <h1 className="text-4xl text-red-800 font-bold mb-6">Drinks</h1>
          <button className="transition-transform duration-300 ease-in-out hover:-translate-y-1 cursor-pointer flex items-center gap-2 justify-center">
            ver mais
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <h4 className="text-lg text-gray-700 mb-2">Categories</h4>
        <div className="flex flex-wrap gap-4 mb-2">
          {drinksCategories &&
            drinksCategories.map((item, index) => (
              <CategoriesList key={index} categories={item.strCategory} />
            ))}
        </div>

        <div className="relative w-full">
          <div className="flex overflow-x-auto gap-4 py-4 scrollbar-hide w-full px-2">
            {drinksToShow &&
              drinksToShow.map((item, index) => (
                <div key={index}>
                  <Card title={item.strDrink} image={item.strDrinkThumb} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
