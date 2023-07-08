import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './components/pages/Accueil';
import Projets from './components/pages/Projets';
import Contact from './components/pages/Contact';
import Temoignages from './components/pages/Temoignages';



import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/temoignages" element={<Temoignages />} />
      </Routes>
      <Footer />
    </Router>
  );
};


export default App;
