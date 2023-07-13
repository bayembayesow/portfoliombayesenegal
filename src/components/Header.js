import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/projets1">Projets1</Link></li>
          <li><Link to="/projets2">Projets2</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/temoignages">Temoignages</Link></li>
        </ul>
      </nav>

       
    </header>
  );
};

export default Header;


