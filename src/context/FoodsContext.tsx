'use client';
import { getFoodByCategory, getFoodsCategories } from '@/Hooks/UseApi';
import { createContext, ReactNode, useState } from 'react';

interface FoodsContextType {
  foods: string[];
  foodsCategories: string[];
  getFoods: () => Promise<void>;
  getFoodsCategory: () => Promise<void>;
}

interface FoodsProviderProps {
  children: ReactNode;
}

export const FoodsContext = createContext<FoodsContextType | null>(null);
export const FoodsProvider = ({ children }: FoodsProviderProps) => {
  const [foods, setFoods] = useState([]);
  const [foodsCategories, setCategories] = useState([]);

  const getFoods = async () => {
    const data = await getFoodByCategory('Miscellaneous');
    setFoods(data.meals);
    console.log('data', data);
  };

  const getFoodsCategory = async () => {
    const data = await getFoodsCategories();
    console.log('data', data);
    setCategories(data.categories);
  };

  return (
    <FoodsContext.Provider
      value={{ foods, foodsCategories, getFoods, getFoodsCategory }}
    >
      {children}
    </FoodsContext.Provider>
  );
};
