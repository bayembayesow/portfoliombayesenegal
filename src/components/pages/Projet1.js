import React from 'react';
import styles from './Projet1.css';


const Projet1 = () => {
  return (
    <div className={styles.pagewrapper}>
      <div className={styles.contentwrapper}>
        <main className={styles.main}>
          <h2 className={styles.titre}>Rendez-vous sante quebec</h2>
          <div className={styles.advert}>
            <div className={styles.winter}>
              <h2>De quoi s’agit-il ?</h2>
              <p>
                De nos jours, il est difficile pour des patients atteints de maladie particulière de pouvoir prendre rendez-vous et même de rencontrer un médecin. Cet état de fait s'est accentué ces dernières années avec l'avènement de la pandémie du coronavirus. Cette dernière a créé un fossé encore plus large dans les rencontres entre patients et médecin. RDV-sante est un terme qui signifie RENDEZ-VOUS SANTE. Il se réfère à l'utilisation du web et des nouvelles applications technologiques qui s'inscrivent dans le cadre d'une optimisation organisationnelle des consultations médicales. Ce mode de prise de rendez-vous médicaux est un phénomène qui s'amplifie largement, tant au niveau national qu'au niveau international.
              </p>
            </div>
            <div className={styles.sled}>
              <h2>Langages utilisés</h2>
              <nav className={styles.nav}>
                <ul>
                  <a href="https://developer.wordpress.org/coding-standards/inline-documentation-standards/php/#:~:text=PHP%20documentation%20in%20WordPress%20mostly%20takes%20the%20form,Short%20Descriptions%29%20should%20be%20clear%2C%20simple%2C%20and%20brief." className={styles.a1}><li>PHP</li></a>
                  <a href="https://sql.sh/" className={styles.a2}><li>SQL</li></a>
                  <a href="https://developer.mozilla.org/en-US/docs/web/html" className={styles.a3}> <li>HTML</li></a>
                  <a href="https://www.bing.com/search?q=css+documentation&cvid=99138f89bf6c460eb0c60067af4ce8b7&aqs=edge.0.0j69i57j0l7j69i11004.14375j0j4&FORM=ANAB01&PC=ASTS" className={styles.a4}><li>CSS</li></a>
                </ul>
              </nav>
            </div>
          </div>
          <div className={styles.galerie}>
            <img src="" alt="page accueil" />
            <img src="" alt="RDVmedecin" />
            <img src="" alt="Page-inscription" />
            <img src="" alt="consulter-service" />
            <img src="" alt="Donnéés-admin" />
            <img src="" alt="Donnée-patient" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projet1;
