import React from 'react';
import './Temoignages.css';

const Temoignages = () => {
  return (
    <div>
      <h1>Témoignages</h1>
      {/* Formulaire pour ajouter un témoignage */}
      <form className="form-wrapper">
        <div>
          <label>Nom :</label>
          <input type="text" />
        </div>
        <div>
          <label>Message :</label>
          <textarea></textarea>
        </div>
        <button type="submit">Ajouter un témoignage</button>
      </form>

      {/* Liste des témoignages */}
      <div>
        <h2>Témoignages existants :</h2>
        <ul className="temoignages-list">
          {/* Afficher les témoignages ici */}
          <li className="temoignages-list-item">
            <h3>Nom du Témoin</h3>
            <p>Contenu du témoignage</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Temoignages;
