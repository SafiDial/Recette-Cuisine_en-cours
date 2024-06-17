import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li> <Link to="/">Accueil</Link></li>
          <li> <Link to="/recipes">Recettes</Link></li>
          <li><Link to="/profile">Profil</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
