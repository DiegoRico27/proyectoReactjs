import React from 'react';
import './ReservarCita.css'; // Importa el archivo CSS

const ReservarCita = () => {
    return (
        <section id="appointment">
            <h2>Reserva tu Cita</h2>
            <p>Bienvenido, por favor complete el siguiente formulario para reservar su cita.</p>
            <form id="appointment-form">
                <label htmlFor="firstName">Nombre:</label>
                <input type="text" id="firstName" name="firstName" required /><br />

                <label htmlFor="lastName">Apellido:</label>
                <input type="text" id="lastName" name="lastName" required /><br />

                <label htmlFor="phone">Teléfono:</label>
                <input type="text" id="phone" name="phone" required /><br />

                <label htmlFor="email">Correo:</label>
                <input type="email" id="email" name="email" required /><br />

                <label htmlFor="date">Fecha:</label>
                <input type="date" id="date" name="date" required /><br />

                <label htmlFor="time">Hora:</label>
                <input type="time" id="time" name="time" required /><br />

                <button type="submit">Reservar</button>
            </form>
        </section>
    );
}

export default ReservarCita;
