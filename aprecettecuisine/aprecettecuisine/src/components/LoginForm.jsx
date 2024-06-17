// src/components/LoginForm.jsx

import React, { useState } from 'react';

function LoginForm() {
  // State pour gérer les champs du formulaire
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêcher le rechargement de la page par défaut
    console.log('Username:', username);
    console.log('Password:', password);
    // Ajoutez ici la logique pour soumettre les données du formulaire vers le backend
    // Par exemple, utiliser fetch ou Axios pour envoyer les données au serveur
  };

  return (
    <div className="login-container">
    <h2 className="login-heading">Formulaire de connexion</h2>
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="text"
        id="username"
        placeholder="Entrez votre nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        id="password"
        placeholder="Entrez votre mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="submit-button">Connexion</button>
    </form>
  </div>
);
}

export default LoginForm;
