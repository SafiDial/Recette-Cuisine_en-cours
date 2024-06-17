// src/App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import ProfileForm from './components/ProfileForm';
import LoginForm from './components/LoginForm';
import AddRecipeForm from './components/AddRecipeForm';
import './index.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<RecipeList />} />
            <Route path="/profile" element={loggedIn ? <ProfileForm /> : <LoginForm />} />
            <Route path="/add-recipe" element={<AddRecipeForm />} />
          </Routes>
        </div>
        <footer>
          <p>&copy; 2024 Ma Recette Cuisine App. Tous droits réservés.</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-container">
       <h1>Bienvenue sur Ma Recette Cuisine App</h1>
      <p>Ceci est une application de recette de cuisine.</p>
      <p>Découvrez de nouveaux plats et partagez vos créations culinaires avec la communauté.</p>
   

      <div className="home-links">
        <Link to="/recipes">Voir les recettes</Link>
        <Link to="/add-recipe">Ajouter une recette</Link>
      </div>
    </div>
  );
}

export default App;
