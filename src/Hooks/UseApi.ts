export const getDrinksByCategory = async (category: string) => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(
        category
      )}`
    );

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('data', data)

    return data;
  } catch (error) {
    console.error('Erro ao buscar drinks:', error);
    return null;
  }
};

export const getDrinksCategories = async() =>{
  try {
    const response = await fetch(
     'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
      )

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Erro ao buscar drinks:', error);
    return null;
  }
}

export const getFoodByCategory = async (category: string) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(
        category
      )}`
    );

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar drinks:', error);
    return null;
  }
};

export const getFoodsCategories = async() =>{
  try {
    const response = await fetch(
     'https://www.themealdb.com/api/json/v1/1/categories.php'
      )

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Erro ao buscar drinks:', error);
    return null;
  }
}
