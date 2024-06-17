// src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Remplacez par l'URL de votre backend
});

export const fetchRecipes = () => api.get('/recipes');
export const fetchRecipe = (id) => api.get(`/recipes/${id}`);
export const createRecipe = (recipe) => api.post('/recipes', recipe);
// Ajoutez d'autres fonctions d'API selon vos besoins
