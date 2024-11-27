import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

// Imágenes
import FotoPerro1 from "../img/FotoPerro1.jpg";
import axios from "axios";
import { useState, useEffect } from "react";

function Perfil() {
  const [user, setUser] = useState({ name: "", email: "" });
  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!userData || !userData.id) {
      console.error("No se encontraron datos del usuario en el localStorage");
      return;
    }

    axios
      .get(`http://localhost:3001/users/${userData.id}`)
      .then((response) => {
        setUser({
          name: response.data.name,
          email: response.data.email,
        });
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
      });
  }, [userData]);

  return (
    // Contenedor principal
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-white p-8 h-[100vh] overflow-y-scroll font-sans">
        <Header />

        {/* Título */}
        <h1 className="text-2xl text-gray-800 font-semibold mb-8 my-12">Perfiles</h1>

        {/* Sección de Perfiles */}
        <section className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 mt-10 gap-8">
          {/* Perfil del Usuario */}
          <div className="bg-gray-100 items-left p-8 rounded-xl flex flex-col gap-2">
            <h1 className="text-2xl mx-4 pb-4 text-gray-800 font-bold">Mi Perfil</h1>

            <div className="mx-4">
              <p className="text-base font-semibold text-gray-700">
                Nombre: <span className="text-base font-normal text-gray-500">{user.name}</span>
              </p>
              <p className="text-base font-semibold text-gray-700">
                Correo Electrónico: <span className="text-base font-normal text-gray-500">{user.email}</span>
              </p>
            </div>

            <div className="px-4 py-12 mt-4 mx-4 text-center border rounded-md border-dashed">
              <span className="text-base font-normal text-gray-500">
                Tu contraseña ha sido resguardada y protegida por nosotros. Por confidencialidad no podrás visualizarla, así
                que solo tú mismo podrás cambiarla o configurarla.
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 mt-4 mx-4 gap-6">
              <button
                type="submit"
                className="bg-morado font-medium text-white py-3 rounded-lg text-center hover:bg-blue-700 transition duration-200"
              >
                Actualizar Información
              </button>
              <button
                type="submit"
                className="border-2 border-morado font-medium text-morado py-3 rounded-lg text-center hover:border-blue-700 hover:ring-1 hover:text-blue-700 transition duration-200"
              >
                Cambiar Contraseña
              </button>
            </div>
          </div>

         
        </section>
      </main>
    </div>
  );
}

export default Perfil;
