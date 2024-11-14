import React from 'react';
import Frame from '../img/Frame.png';

function Login() {
  return (
    <div className="flex h-screen items-center justify-center  bg-gradient-to-r from-pink-100 via-blue-100 to-purple-100 relative">

      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Sección de la Imagen */}
        <div className="w-1/2  flex items-center justify-center">
          <div className="w-full h-full">
            <img
              src={Frame} // Reemplaza por la URL de tu imagen
              alt="login"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Sección del Formulario */}
        <div className="w-1/2 p-8">
          <h2 className="text-4xl font-semibold text-morado text-center my-4">Iniciar Sesión</h2>
          <p className="text-gray-500 text-center mt-2">Ingresa tus datos para poder continuar</p>
          <form className="mt-8">
            <div className="mb-4 my-12">
              <label className="block text-gray-700">Correo Electrónico</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="email@dominio.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Contraseña</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="********"
              />
              <p className="text-morado text-xs text-right my-2">Recupera tu contraseña aquí</p>
            </div>
            <button
              type="submit"
              className="w-full bg-[#374BFF] text-white py-3 rounded-lg text-center hover:bg-blue-700 transition duration-200 my-12"
            >
              Iniciar Sesión
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4 text-center">
            ¿No tienes una cuenta? <a href="#" className="text-[#374BFF]">Regístrate</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
