import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/projets">Projets</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/temoignages">Temoignages</Link></li>
        </ul>
      </nav>

        {/* Ajoutez le contenu de votre en-tête ici */}
    </header>
  );
};

export default Header;


