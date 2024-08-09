import React from 'react';
import './Registro.css'; // Asegúrate de crear e importar el archivo CSS

const Registro = () => {
    return (
        <section id="register">
            <h2>Crea tu cuenta</h2>
            <form id="register-form">
                <label htmlFor="firstName">Nombre:</label>
                <input type="text" id="firstName" name="firstName" required /><br />

                <label htmlFor="lastName">Apellidos:</label>
                <input type="text" id="lastName" name="lastName" required /><br />

                <label htmlFor="email">Correo:</label>
                <input type="email" id="email" name="email" required /><br />

                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" required /><br />

                <label htmlFor="confirmPassword">Confirma tu contraseña:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required /><br />

                <button type="submit">Registrarse</button>
            </form>
        </section>
    );
};

export default Registro;

