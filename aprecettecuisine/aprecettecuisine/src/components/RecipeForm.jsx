import React, { useState } from 'react';

function RecipeForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = { title, description, ingredients, instructions };
    onSubmit(newRecipe);
    setTitle('');
    setDescription('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className="recipe-form">
      <h2>Create New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required></textarea>
        </div>
        <div>
          <label>Instructions:</label>
          <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RecipeForm;
