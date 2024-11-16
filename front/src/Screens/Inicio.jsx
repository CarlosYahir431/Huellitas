//Componentes
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import FotoPerro1 from "../img/FotoPerro1.jpg";
import ClinicaHuellitas from "../img/Clinica Huellitas.jpg";
import ParqueHuellitas from "../img/Parque Huellitas.jpg";
import GuarderiaHuellitas from "../img/Guarderia Huellitas.jpg";
import Casa from "../img/Casa.jpg";
import React, { useEffect, useState } from "react";
import { TbHeart, TbPaperBag, TbPaw, TbBellRinging } from "react-icons/tb";
import axios from "axios";

function App() {
  const [perros, setPerros] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id || "null";

  useEffect(() => {
    getPets();
  }, []);

  async function getPets() {
    const response = await axios.post("http://localhost:3001/mascotas", {
      user_id: userId,
    });

    if (response.data) {
      const mascota = response.data;
      const datosPerro = {
        raza: mascota.breed,
        caracteristica: mascota.characteristics,
        color: mascota.color,
        name: mascota.name,
        id: mascota.pet_id,
        sex: mascota.sex,
        species: mascota.species,
      };

      setPerros(datosPerro);
    }
  }

  return (
    //Utilizar Siempre
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Header />

        {/* Inicio */}

        {/* Seccion Información de la Mascota */}
        <h1 className="text-2xl font-semibold mb-8 my-12">
          Información de la Mascota
        </h1>

        <section className="grid grid-cols-3 md:grid-cols-3 xl:grid-cols-4 mt-10 gap-8 drop-shadow-lg ">
          {/* Card 1: Información de la mascota */}
          <div className="col-span-1 md:col-span-2 p-4 bg-white rounded-xl flex items-center gap-6">
            {/* Imagen de la mascota */}
            <img
              src={FotoPerro1}
              className="w-56 h-80 mx-6 object-cover rounded-lg"
              alt="Perfil principal"
            />

            {/* Información de la mascota */}
            <div className="flex flex-col">
              <h1 className="text-3xl text-morado font-bold">{perros.name}</h1>
              <div className="flex-col gap-2 my-8 p-2">
                <p className="text-base text-gray-500">
                  Sexo: {perros.sex == "M" ? "Macho" : "Hembra"}
                </p>
                <p className="text-base text-gray-500">
                  Especie: {perros.species}
                </p>
                <p className="text-base text-gray-500">Color: {perros.color}</p>
                <p className="text-base text-gray-500">
                  Caracteristicas: {perros.caracteristica}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Estado de la Mascota */}
          <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4">
            <h1 className="text-2xl text-center font-semibold mb-4 my-4 gap-8">
              Estado de la Mascota
            </h1>

            <div className="flex items-center gap-4 bg-gray-100 rounded-xl p-4">
              <TbHeart className="text-4xl text-red-500" />
              <div>
                <h3 className="font-bold">Salud</h3>
                <p className="text-gray-500">25%</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-100 rounded-xl p-4">
              <TbPaperBag className="text-4xl text-orange-500" />
              <div>
                <h3 className="font-bold">Alimento</h3>
                <p className="text-gray-500">50%</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-100 rounded-xl p-4">
              <TbPaw className="text-4xl text-purple-500" />
              <div>
                <h3 className="font-bold">Actividad</h3>
                <p className="text-gray-500">100%</p>
              </div>
            </div>
          </div>

          {/* Card 3: Notificaciones */}
          <div className="p-6 bg-white rounded-xl flex flex-col justify-between gap-2">
            <h1 className="text-2xl text-center font-semibold mb-4 my-2 gap-8">
              Eventos de Hoy
            </h1>
            <p className="text-gray-500 text-center text-sm">07.Noviembre.24</p>

            <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-2">
              <TbBellRinging className="text-3xl text-center text-morado" />
              <div>
                <h3 className="font-bold text-sm">Ir a Vacunar</h3>
                <p className="text-gray-500 font-medium text-sm">
                  Clinica Huellitas
                </p>
                <p className="text-gray-500 text-xs">
                  07.Noviembre.24, 12:30 hrs
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-2">
              <TbBellRinging className="text-3xl text-morado" />
              <div>
                <h3 className="font-bold text-sm">Dar un paseo</h3>
                <p className="text-gray-500 font-medium text-sm">
                  Parque Huellitas
                </p>
                <p className="text-gray-500 text-xs">
                  07.Noviembre.24, 12:30 hrs
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-2">
              <TbBellRinging className="text-3xl text-morado" />
              <div>
                <h3 className="font-bold text-sm">Dar Medicamento</h3>
                <p className="text-gray-500 font-medium text-sm">Casa</p>
                <p className="text-gray-500 text-xs">
                  07.Noviembre.24, 12:30 hrs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seccion Mis Lugares */}

        <h1 className="text-2xl font-semibold mb-8 my-12">Mis Lugares</h1>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8 drop-shadow-xl">
          {/* Card 1: Lugar 1 */}
          <div className="bg-white p-8 rounded-xl text-gray-300 flex flex-col gap-2">
            <img
              src={ClinicaHuellitas}
              className="w-62 h-48 object-cover rounded-lg"
              alt="Perfil principal"
            />
            <span className="text-2xl text-black font-semibold">
              Clinica Huellitas
            </span>
            <span className=" text-sm font-base text-morado">
              Av. Bonampack, Calle 51, Cancún, Q.Roo.
            </span>
            <a href="#" className=" text-base text-gray-500  font-semibold">
              Ver más
            </a>
          </div>

          {/* Card 2: Lugar 2 */}
          <div className="bg-white p-8 rounded-xl text-gray-300 flex flex-col gap-2">
            <img
              src={ParqueHuellitas}
              className="w-62 h-48 object-cover rounded-lg"
              alt="Perfil principal"
            />
            <span className="text-2xl text-black font-semibold">
              Parque Huellitas
            </span>
            <span className=" text-sm font-base text-morado">
              Av. Bonampack, Calle 51, Cancún, Q.Roo.
            </span>
            <a href="#" className=" text-base text-gray-500  font-semibold">
              Ver más
            </a>
          </div>

          {/* Card 3: Lugar 3 */}
          <div className="bg-white p-8 rounded-xl text-gray-300 flex flex-col gap-2">
            <img
              src={GuarderiaHuellitas}
              className="w-62 h-48 object-cover rounded-lg"
              alt="Perfil principal"
            />
            <span className="text-2xl text-black font-semibold">
              Guarderia Huellitas
            </span>
            <span className=" text-sm font-base text-morado">
              Av. Bonampack, Calle 51, Cancún, Q.Roo.
            </span>
            <a href="#" className=" text-base text-gray-500  font-semibold">
              Ver más
            </a>
          </div>

          {/* Card 4: Lugar 4 */}
          <div className="bg-white p-8 rounded-xl text-gray-300 flex flex-col gap-2">
            <img
              src={Casa}
              className="w-62 h-48 object-cover rounded-lg"
              alt="Perfil principal"
            />
            <span className="text-2xl text-black font-semibold">Casa</span>
            <span className=" text-sm font-base text-morado">
              Av. Bonampack, Calle 51, Cancún, Q.Roo.
            </span>
            <a href="#" className=" text-base text-gray-500  font-semibold">
              Ver más
            </a>
          </div>
        </section>

        {/* Seccion Documentos */}
        <h1 className="text-2xl font-semibold mb-8 my-12">
          Documentos Importantes
        </h1>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8 drop-shadow-lg">
          {/* Card 1: Documentos */}
          <div className="bg-morado p-4 rounded-xl text-gray-100 flex flex-col gap-6">
            <a href="#" className="text-base font-medium text-center">
              Certificado de Vacunación
            </a>
          </div>

          {/* Card 2: Documentos */}
          <div className="bg-morado p-4 rounded-xl text-gray-100 flex flex-col gap-6">
            <a href="#" className="text-base font-medium text-center">
              Pasaporte
            </a>
          </div>

          {/* Card 3: Documentos */}
          <div className="bg-morado p-4 rounded-xl text-gray-100 flex flex-col gap-6">
            <a href="#" className="text-base font-medium text-center">
              Identificación
            </a>
          </div>

          {/* Card 4: Documentos */}
          <div className="bg-morado p-4 rounded-xl text-gray-100 flex flex-col gap-6">
            <a href="#" className="text-base font-medium text-center">
              Certificado de Salud
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
export default App;
