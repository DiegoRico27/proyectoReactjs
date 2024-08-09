import React from 'react';
import './Ingresa.css'; // Asegúrate de crear e importar el archivo CSS

const Ingresa = () => {
    return (
        <section id="login">
            <h2>¡Bienvenido de nuevo! Ingresa a tu cuenta</h2>
            <form id="login-form">
                <label htmlFor="email">Correo:</label>
                <input type="email" id="email" name="email" required /><br />

                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" required /><br />

                <button type="submit">Ingresa</button>
            </form>
        </section>
    );
};

export default Ingresa;
