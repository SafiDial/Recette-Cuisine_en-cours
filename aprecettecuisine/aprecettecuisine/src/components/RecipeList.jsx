import React, { useState } from 'react';

function RecipeList() {
  // Exemple de recettes avec images
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: 'Spaghetti Carbonara',
      description: 'Délicieux spaghetti à la Carbonara',
      imageUrl: '/src/components/images/spaghetti.jpg' 
    },
    {
      id: 2,
      title: 'Salade César',
      description: 'Une salade César classique',
      imageUrl: '/src/components/images/salad.jpg' 
    }
  ]);

  return (
    <div>
      <h2>Liste des Recettes</h2>
      <div className="recipe-list">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe">
            <h3>{recipe.title}</h3>
            <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image" />
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
