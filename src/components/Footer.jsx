import React from 'react';
import logo from '../img/logo.png';

const Footer = () => {
  return (
    <footer id="contacto">
      <div className="footer-container">
        <div className="marca-logo">
          <img src={logo} alt="Logo" />
        </div>
        <p>Copyright © 2023. Todos los derechos de autor reservados. Bogotá - Colombia</p>
      </div>
    </footer>
  );
};

export default Footer;
