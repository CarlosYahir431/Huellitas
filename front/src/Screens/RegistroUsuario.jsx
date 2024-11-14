import React from 'react';
import Frame from '../img/hombre.mp4'; // Asegúrate de que la ruta sea correcta

function RegistroUsuario() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-pink-100 via-blue-100 to-purple-100 relative">

      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Sección de la Imagen */}
        <div className="w-1/2  flex items-center justify-center">
          <div className="w-full h-full">
            <video
              src={Frame} // Usa la variable que importaste
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
          <form className="mt-1">

            <div className="mb-2 my-12">
              <label className="block text-gray-700">Nombre</label>
              <input
                type="text" // Cambié el tipo de campo a "text" para el nombre
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="ejemplo"
              />
            </div>
            
            <div className="mb-2">
              <label className="block text-gray-700">Correo Electrónico</label>
              <input
                type="email" // Cambié el tipo de campo a "email" para el correo electrónico
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="ejemplo@gmail.com"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Contraseña</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="********"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Confirmar Contraseña</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="********"
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
            ¿Ya tienes una cuenta? <a href="#" className="text-[#374BFF]">Inicia aquí</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegistroUsuario;
