import React from 'react';
import './Accueil.css';



const Accueil = () => {
  return (
    <div className="pagewrapper">
      <div className="contentwrapper">
        <main className="main">
          <img src="" alt="image-auteur" className="photo" />
          <div className="advert">
            <div className="winter">
              <h2>Un développeur web passionné !</h2>
              <p>
                Ma passion pour le développement web commence en 2018 et m'a demandé un changement radical de cursus afin de pouvoir pleinement l'exploiter.
                Dès lors, j'ai mis tout en oeuvre pour percer dans cette voie, tout en prenant du plaisir sur les divers projets développés.
                En septembre 2022, j'ai décidé de m'inscrire dans un programme informatique de la cité collégiale pour percer dans ce domaine.
                J'aimerais atteindre un défi qui est de devenir un développeur web "full-stack". Le milieu du travail me permettrait de confronter mes idées avec d'autres développeurs web afin d'acquérir plus d'expériences.
              </p>
            </div>
            <div className="sled">
              <h2>Expérience en développement</h2>
              <p>
                Mon expérience acquise au fil des projets me permet de mieux comprendre les attentes d'un client et de répondre précisément au besoin demandé en fonction du domaine d'activité.
                Du site vitrine au projet plus complexe, je vous propose une expertise et un développement web qui correspond à vos attentes et à vos besoins.
                Un tarif adapté à votre projet. Travaillant régulièrement avec des PME, associations ou particuliers, je vous propose des solutions à votre portée et adaptées à votre budget.
              </p>
            </div>
          </div>
          <div>
            <img src="" alt="developpeur-web" className="logo" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Accueil;
