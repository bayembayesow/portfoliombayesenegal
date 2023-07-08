import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Accueil from '../pages/Accueil';
import Projets from '../pages/Projets';
import Contact from '../pages/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" exact component={Accueil} />
        <Route path="/projets" component={Projets} />
        <Route path="/contact" component={Contact} />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
