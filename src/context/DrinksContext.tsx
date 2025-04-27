'use client';
import { getDrinksByCategory, getDrinksCategories } from '@/Hooks/UseApi';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface DrinksContextType {
  drinks: string[];
  setDrinks: React.Dispatch<React.SetStateAction<never[]>>;
  drinksCategories: string[] | null;
  getlistOfCategories: () => Promise<void>;
  getDrinksByCategories: () => Promise<void>;
}

interface DrinksProviderProps {
  children: ReactNode;
}

export const DrinksContext = createContext<DrinksContextType | null>(null);

export const DrinksProvider = ({ children }: DrinksProviderProps) => {
  const [drinks, setDrinks] = useState([]);
  const [drinksCategories, setdrinksCategories] = useState([]);

  const getlistOfCategories = async () => {
    const data = await getDrinksCategories();
    setdrinksCategories(data.drinks);
  };

  const getDrinksByCategories = async () => {
    const data = await getDrinksByCategory('Ordinary_Drink');
    setDrinks(data.drinks);
  };

  useEffect(() => {
    console.log(drinks, 'nudou');
  }, [drinks]);

  return (
    <DrinksContext.Provider
      value={{
        drinks,
        setDrinks,
        drinksCategories,
        getlistOfCategories,
        getDrinksByCategories,
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};
