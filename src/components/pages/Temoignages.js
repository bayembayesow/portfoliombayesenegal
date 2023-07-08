import React from 'react';

const Temoignages = () => {
  return (
    <div>
      <h1>Témoignages</h1>
      {/* Formulaire pour ajouter un témoignage */}
      <form>
        <label>Nom :</label>
        <input type="text" />
        <label>Message :</label>
        <textarea></textarea>
        <button>Ajouter un témoignage</button>
      </form>

      {/* Liste des témoignages */}
      <div>
        <h2>Témoignages existants :</h2>
        {/* Afficher les témoignages ici */}
      </div>
    </div>
  );
};

export default Temoignages;
