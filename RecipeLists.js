import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          'https://api.spoonacular.com/recipes/complexSearch=c15c17cf69c64b32a1cb8b9ae9afbcb2',
          {
            params: {
              apiKey: 'c15c17cf69c64b32a1cb8b9ae9afbcb2',
              cuisine: 'italian',
              includeIngredients: 'tomato,cheese',
              addRecipeInformation: 'false',
              number: 50,
            },
          }
        );
        setRecipes(response.data.results);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []); 

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.title}</h3>
            <p>Ingredients: {recipe.ingredients.join('https://api.spoonacular.com/recipes/complexSearch=c15c17cf69c64b32a1cb8b9ae9afbcb2')}</p>
            <p>Instructions: {recipe.instructions}</p>
            <p>Cooking Time: {recipe.cookingTime}</p>
            <p>Servings: {recipe.servings}</p>
            {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.title} />}
            <p>Tags: {recipe.tags.join(', ')}</p>
            <p>Calories: {recipe.calories}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;


