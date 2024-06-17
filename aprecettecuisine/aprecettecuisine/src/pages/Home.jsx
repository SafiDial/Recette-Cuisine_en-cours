import React from 'react';
import RecipeCard from '../components/RecipeCard';

const recipes = [
  { id: 1, title: 'Pasta Carbonara', description: 'Creamy pasta with bacon and cheese' },
  { id: 2, title: 'Chocolate Cake', description: 'Moist chocolate cake with frosting' },
];

function Home() {
  return (
    <div className="home">
      <h1>Bienvenue salut</h1>
      <div className="recipe-list">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Home;
