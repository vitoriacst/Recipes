'use client';
import { createContext, useState } from 'react';

//@ts-ignore
export const DrinksContext = createContext();
//@ts-ignore
export const DrinksProvider = ({ children }) => {
  const [drinks, setdrinksDrinks] = useState([]);
  return (
    <DrinksContext.Provider value={{ drinks, setdrinksDrinks }}>
      {children}
    </DrinksContext.Provider>
  );
};
