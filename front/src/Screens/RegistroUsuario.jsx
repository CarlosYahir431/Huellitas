import React, { useState } from 'react';
import axios from 'axios';
import Frame from '../img/hombre.mp4'; // Asegúrate de que la ruta sea correcta
import { Link } from 'react-router-dom';

function RegistroUsuario() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Función para manejar el registro
  const handleRegistro = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    // Validación de que las contraseñas coincidan
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      // Enviar la solicitud a tu servidor
      const response = await axios.post("http://localhost:3001/users/register", {
        email: email,
        password: password,
        name: name
      });

      if (response.status === 201) {
        setSuccessMessage("¡Registro exitoso! Ahora puedes iniciar sesión.");
      }
    } catch (error) {
      console.error(error);
      setError("Ocurrió un error al registrarse. Por favor, intenta nuevamente.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-pink-100 via-blue-100 to-purple-100 relative">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Sección de la Imagen */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-full h-full">
            <video
              src={Frame}
              autoPlay
              loop
              muted
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Sección del Formulario */}
        <div className="w-1/2 p-8">
          <h2 className="text-4xl font-semibold text-morado text-center my-4">Registrarse</h2>
          <p className="text-gray-500 text-center mt-2">Registra tus datos para poder continuar</p>

          {/* Mostrar mensajes de error y éxito */}
          {error && <p className="text-red-500 text-center">{error}</p>}
          {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

          <form className="mt-1" onSubmit={handleRegistro}>
            <div className="mb-2 my-12">
              <label className="block text-gray-700">Nombre Completo</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="Juanito Perez"
                value={name}
                onChange={(e) => setName(e.target.value)}
                minLength={5}
                required
              />
            </div>

            <div className="mb-2">
              <label className="block text-gray-700">Correo Electrónico</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="ejemplo@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-2">
              <label className="block text-gray-700">Contraseña</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                required
              />
            </div>

            <div className="mb-2">
              <label className="block text-gray-700">Confirmar Contraseña</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                minLength={8}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#374BFF] text-white py-3 rounded-lg text-center hover:bg-blue-700 transition duration-200 my-12"
            >
              Siguiente
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4 text-center">
            ¿Ya tienes una cuenta? <Link to={"/login"} className="text-[#374BFF]">Inicia aquí</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegistroUsuario;
