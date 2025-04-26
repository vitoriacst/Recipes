'use client';
import { createContext, useState } from 'react';

//@ts-ignore
export const RecipesContext = createContext();
//@ts-ignore
export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
};
