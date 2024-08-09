import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import Registro from './pages/Registro';
import ReservarCita from './pages/ReservarCita';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/ingresa" element={<Nosotros />} />
        <Route path="/registrarse" element={<Registro />} />
        <Route path="/reservarcita" element={<ReservarCita />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
