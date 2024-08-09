import React from 'react';
import logo from '../img/logo.png';
import tiktokLogo from '../img/TikTok.png';
import facebookLogo from '../img/Facebook.png';
import instagramLogo from '../img/Instagram.png';

const NavBar = () => {
  return (
    <header>
      <div className="nav-container">
        <div className="contenedorimg">
          <img src={logo} className="logo" alt="Logo" />
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/servicios">Servicios</a>
          <a href="/reservarcita">Reservar Cita</a>
          <a href="/ingresa">Ingresa</a>
          <a href="/registrarse">Registrate</a>
        </nav>
        <div className="social-and-search">
          <div className="social-media">
            <a href="https://www.tiktok.com/@yourusername" target="_blank" className="social-icon" rel="noopener noreferrer">
              <img src={tiktokLogo} alt="TikTok" />
            </a>
            <a href="https://www.facebook.com/yourpage" target="_blank" className="social-icon" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/yourusername" target="_blank" className="social-icon" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
