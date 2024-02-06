import React from 'react';
import RecipeList from './RecipeLists';
import FavoriteButton from './FavoriteButton';

function App() {
  // Example recipe data
  const recipeData = {
    title: 'Example Recipe',
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    // Other recipe details...
  };

  return (
    <div className="App">
      <header>
        <h1>My Recipe App</h1>
      </header>
      <main>
        <RecipeList />
        <FavoriteButton recipe={recipeData} />
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;

