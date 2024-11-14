import React, { useState } from 'react';
import Frame from '../img/hombre.mp4'; // Asegúrate de que la ruta sea correcta

function RegistroUsuario() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");


  function handleRegistro(e){
    e.preventDefault();

    axios
    .post("http://locahost:8000", {
      body: {
        email: email,
        password: password,
        name: name
      }
    })
    .then((response) => {
      setPost(response.data);
    });
  }



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
          <form className="mt-1" onSubmit={handleRegistro}>

            <div className="mb-2 my-12">
              <label className="block text-gray-700">Nombre Completo</label>
              <input
                type="text" // Cambié el tipo de campo a "text" para el nombre
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="Juanito Perez"
                name='username'
                value={name}
                onChange={(e) => setName(e.target.value)}
                minLength={5}
                required
              />
            </div>
            
            <div className="mb-2">
              <label className="block text-gray-700">Correo Electrónico</label>
              <input
                type="email" // Cambié el tipo de campo a "email" para el correo electrónico
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="ejemplo@gmail.com"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Contraseña</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="********"  
                required
                minLength={8}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name='password'
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Confirmar Contraseña</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="********"
                required
                minLength={8}
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                name='confirmPassword'
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
