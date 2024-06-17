import React from 'react';
import RecipeDetail from '../components/RecipeDetail';

const recipe = {
  id: 1,
  title: 'Pasta Carbonara',
  description: 'Creamy pasta with bacon and cheese',
  ingredients: ['Pasta', 'Bacon', 'Cream', 'Cheese'],
  instructions: ['Boil pasta', 'Fry bacon', 'Mix with cream and cheese'],
};

function RecipeDetailPage() {
  return (
    <div className="recipe-detail-page">
      <RecipeDetail recipe={recipe} />
    </div>
  );
}

export default RecipeDetailPage;
