import React, { useEffect, useState } from "react";
import Frame from "../img/Frame.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    
    if (user) {
      const currentTime = Math.floor(Date.now() / 1000);
      
      if(user.exp < currentTime){
        localStorage.removeItem("user");
      }else{
        navigate("/");
      }
    }
  }, []);

  async function HandleLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/users/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("user", JSON.stringify(response.data));

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

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
          <h2 className="text-4xl font-semibold text-morado text-center my-4">
            Iniciar Sesión
          </h2>
          <p className="text-gray-500 text-center mt-2">
            Ingresa tus datos para poder continuar
          </p>
          <form className="mt-8" onSubmit={HandleLogin}>
            <div className="mb-4 my-12">
              <label className="block text-gray-700">Correo Electrónico</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="email@dominio.com"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Contraseña</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="********"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-morado text-xs text-right my-2">
                Recupera tu contraseña aquí
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-[#374BFF] text-white py-3 rounded-lg text-center hover:bg-blue-700 transition duration-200 my-12"
            >
              Iniciar Sesión
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4 text-center">
            ¿No tienes una cuenta?{" "}
            <Link to={"/registro"} className="text-[#374BFF]">
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
