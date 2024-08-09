import React from 'react';
import '../App.css'; // Asegúrate de tener las clases CSS adecuadas
import './Servicios.css'; // Si decides agregar estilos específicos para esta página
import NavBar from '../components/NavBar'; // Ajusta la ruta según la ubicación de tu NavBar
import Footer from '../components/Footer'; // Ajusta la ruta según la ubicación de tu Footer

const Servicios = () => {
  return (
    <div>
      <NavBar /> {/* Menú de navegación */}
      <section className="services-container">
        <h3>CONOCE NUESTROS SERVICIOS</h3>
        <p className="after">LA VIDA NO ES PERFECTA PERO TUS UÑAS SI PUEDEN SERLO</p>
        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card">
            <img src="img/diseño1.jpg" alt="Acrilica" className="service-image" />
            <h4>Acrilica</h4>
            <p>Descripción del servicio de uñas acrílicas. Precio: $50,000</p>
          </div>
          {/* Card 2 */}
          <div className="service-card">
            <img src="img/diseño2.jpg" alt="Press On" className="service-image" />
            <h4>Press On</h4>
            <p>Descripción del servicio de uñas Press On. Precio: $40,000</p>
          </div>
          {/* Card 3 */}
          <div className="service-card">
            <img src="img/diseño3.jpg" alt="Semipermanente" className="service-image" />
            <h4>Semipermanente</h4>
            <p>Descripción del servicio de uñas semipermanentes. Precio: $45,000</p>
          </div>
          {/* Agrega más cards aquí */}
          {/* Card 1 */}
          <div className="service-card">
            <img src="img/programacion1.jpg" alt="Acrilica" className="service-image" />
            <h4>Acrilica</h4>
            <p>Descripción del servicio de uñas acrílicas. Precio: $50,000</p>
          </div>
          {/* Card 2 */}
          <div className="service-card">
            <img src="img/programacion2.jpg" alt="Press On" className="service-image" />
            <h4>Press On</h4>
            <p>Descripción del servicio de uñas Press On. Precio: $40,000</p>
          </div>
          {/* Card 3 */}
          <div className="service-card">
            <img src="img/programacion3.jpg" alt="Semipermanente" className="service-image" />
            <h4>Semipermanente</h4>
            <p>Descripción del servicio de uñas semipermanentes. Precio: $45,000</p>
          </div>
          {/* Agrega más cards aquí */}
          {/* Card 1 */}
          <div className="service-card">
            <img src="img/marketing1.jpg" alt="Acrilica" className="service-image" />
            <h4>Acrilica</h4>
            <p>Descripción del servicio de uñas acrílicas. Precio: $50,000</p>
          </div>
          {/* Card 2 */}
          <div className="service-card">
            <img src="img/marketing2.jpg" alt="Press On" className="service-image" />
            <h4>Press On</h4>
            <p>Descripción del servicio de uñas Press On. Precio: $40,000</p>
          </div>
          {/* Card 3 */}
          <div className="service-card">
            <img src="img/marketing3.jpg" alt="Semipermanente" className="service-image" />
            <h4>Semipermanente</h4>
            <p>Descripción del servicio de uñas semipermanentes. Precio: $45,000</p>
          </div>
          
        </div>
      </section>
    
    </div>
  );
}

export default Servicios;
