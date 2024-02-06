import React from 'react';
import axios from 'axios';
const FavoriteButton = ({ recipe }) => {
    const saveFavorite = async () => {
      try {
        await axios.post('/api/favorites', recipe);
        console.log('Favorite saved successfully!');
      } catch (error) {
        console.error('Error saving favorite:', error);
      }
    };
  
    return (
      <button onCLick={saveFavorite}>Save as Favorite</button>
    );
  };
  
  export default FavoriteButton;