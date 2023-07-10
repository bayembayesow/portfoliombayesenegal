import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <form className="contact-form">
        <input type="text" placeholder="Nom" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <textarea placeholder="Message" className="textarea-field"></textarea>
        <button className="submit-button">Envoyer</button>
      </form>
      <p className="contact-success">Votre message a été envoyé avec succès !</p>
    </div>
  );
};

export default Contact;
