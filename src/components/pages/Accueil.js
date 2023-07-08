import React from 'react';
import './Accueil.css';

const Accueil = () => {
  return (
    <div className="accueil-container">
      <h1 className="accueil-title">Bienvenue sur mon portfolio !</h1>
      <p className="accueil-description">Je suis un développeur passionné avec une expérience dans la création d'applications Web.</p>
      <img className="accueil-image" src="path/to/image.jpg" alt="Accueil" />
    </div>
  );
};

export default Accueil;
