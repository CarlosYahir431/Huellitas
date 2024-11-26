import React, { useState, useEffect } from "react";
import { TbChevronDown } from "react-icons/tb";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [mascotas, setMascotas] = useState([]); // Cambiado a un array para almacenar todas las mascotas
  const [selectedPet, setSelectedPet] = useState(null); // Para rastrear la mascota seleccionada
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id || "null";

  useEffect(() => {
    getPets();
  }, []);

  async function getPets() {
    try {
      const response = await axios.post("http://localhost:3001/mascotas", {
        user_id: userId,
      });

      if (response.data && Array.isArray(response.data)) {
        // Asegúrate de que response.data sea un array
        const mascotasData = response.data.map((mascota) => ({
          id: mascota.pet_id,
          name: mascota.name,
          breed: mascota.breed,
          characteristics: mascota.characteristics,
          color: mascota.color,
          sex: mascota.sex,
          species: mascota.species,
          img: mascota.image_url, // La URL completa debería estar en el backend
        }));

        setMascotas(mascotasData);

        // Establecer la primera mascota como seleccionada si aún no se ha seleccionado
        const petFromStorage = localStorage.getItem("pet");
        
        if (petFromStorage) {
          setSelectedPet(mascotasData.find((pet) => pet.id == petFromStorage));

        } else {
          setSelectedPet(mascotasData[0]);
        }
        
      }
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  }

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handlePetSelection = (pet) => {
    setSelectedPet(pet); // Actualiza la mascota seleccionada
    localStorage.setItem("pet", pet.id); // Guarda el ID de la mascota seleccionada en el localStorage
    setDropdownOpen(false); // Cierra el menú desplegable
    window.location.reload();
  };

  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
      <h1 className="text-2xl md:text-3xl text-morado font-bold">
        Bienvenido, {user?.username || "Usuario"}
      </h1>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <h1 className="text-lg text-gray-500">Perfiles</h1>
          </li>
          <li className="relative">
            <div className="flex items-center gap-2 cursor-pointer" onClick={toggleDropdown}>
              {/* Muestra la imagen de la mascota seleccionada o una por defecto */}
              <img
                src={selectedPet?.img || "https://via.placeholder.com/150"}
                className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full"
                alt="Perfil principal"
              />
              <a className="flex items-center gap-1 text-xl font-semibold">
                {selectedPet?.name || "Mascota"} <TbChevronDown />
              </a>
            </div>

            {/* Menú desplegable */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                <ul className="p-2">
                  {/* Lista dinámica de mascotas */}
                  {mascotas.map((mascota) => (
                    <li
                      key={mascota.id}
                      className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 rounded-lg cursor-pointer"
                      onClick={() => handlePetSelection(mascota)} // Maneja la selección de mascotas
                    >
                      <img
                        src={mascota.img || "https://via.placeholder.com/150"}
                        className="w-8 h-8 object-cover rounded-full"
                        alt={mascota.name}
                      />
                      <span className="text-sm font-medium">{mascota.name}</span>
                    </li>
                  ))}
                  <Link
                    to={"/mascota"}
                    className="py-2 px-4 text-morado text-sm font-medium hover:bg-gray-100 rounded-lg cursor-pointer"
                  >
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
