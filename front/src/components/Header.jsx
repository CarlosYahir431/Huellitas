import React, { useState, useEffect } from "react";
import FotoPerro1 from "../img/FotoPerro1.jpg";
import FotoPerro2 from "../img/FotoPerro1.jpg";
import FotoPerro3 from "../img/FotoPerro1.jpg";
import { TbChevronDown, TbBell } from "react-icons/tb";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
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


  // Lista de perfiles
  const profiles = [
    { id: 1, name: "Cristal", photo: FotoPerro1 },
    { id: 2, name: "Naricitas", photo: FotoPerro2 },
    { id: 3, name: "Abrazitos", photo: FotoPerro3 },
  ];

  // Función para alternar el menú desplegable
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
      <h1 className="text-2xl md:text-3xl text-morado font-bold">
        Bienvenido, {user.username}<span className="text-gray-500"></span>
      </h1>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <h1 className="text-lg text-gray-500">Perfiles</h1>
          </li>
          <li className="relative">
            <div className="flex items-center gap-2 cursor-pointer" onClick={toggleDropdown}>
              <img
                src={FotoPerro1}
                className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full"
                alt="Perfil principal"
              />
              <a className="flex items-center gap-1 text-xl font-semibold">
                {perros.name} <TbChevronDown />
              </a>
            </div>

            {/* Menú desplegable */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                <ul className="p-2">
                  {profiles.map((profile) => (
                    <li key={profile.id} className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 rounded-lg cursor-pointer">
                      <img
                        src={profile.photo}
                        className="w-8 h-8 object-cover rounded-full"
                        alt={profile.name}
                      />
                      <span className="text-sm font-medium">{profile.name}</span>
                    </li>
                  ))}
                  <Link to={"/mascota"} className="py-2 px-4 text-morado text-sm font-medium hover:bg-gray-100 rounded-lg cursor-pointer">
                    Agregar perfil
                  </Link>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
