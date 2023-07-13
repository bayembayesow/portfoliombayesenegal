import React from 'react';
import styles from './Projet2.css';

const Projet2 = () => {
  return (
    <>
      <div className={styles.pagewrapper}>
        <div className={styles.contentwrapper}>
          <header className={styles.header}></header>
          <main className={styles.main}>
            <h2 className={styles.titre}>Mise en place d'un système d'information décisionnel pour les demandes de prêts et avances de la DMC</h2>
            <div className={styles.advert}>
              <div className={styles.winter}>
                <h2>De quoi s'agit-il ?</h2>
                <p>
                  Durant les quatorze dernières années, l'informatique décisionnelle a prouvé sa capacité à simuler l'avenir et à anticiper les tendances du marché. En effet, elle offre aux responsables la possibilité de maîtriser l'information stratégique et de rehausser leurs performances. Notre projet de fin d'études au sein du Ministère de l'Économie, des Finances et du Plan (MEFP) s'aligne parfaitement sur cette vision. L'objectif de notre projet est de mettre en place une solution décisionnelle qui puisse permettre la préparation des actes d'engagement et d'ordonnancement relatifs aux prêts et avances accordés aux fonctionnaires de l'État.
                </p>
              </div>
              <div className={styles.sled}>
                <h2>Langages utilisés</h2>
                <nav>
                  <ul>
                    <a href="https://christian-manzoni.developpez.com/tutoriels/business-intelligence/creation-univers-bo/" className={styles.a1}><li>Designer</li></a>
                    <a href="https://sql.sh/" className={styles.a2}><li>SQL Server</li></a>
                    <a href="https://www.ibm.com/docs/en/bpm/8.5.5?topic=objects-business" className={styles.a3}><li>Business Object</li></a>
                  </ul>
                </nav>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Projet2;
