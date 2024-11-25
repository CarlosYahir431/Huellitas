import React, { useState } from "react";

const BuscadorVeterinarias = ({ onVeterinariaSeleccionada }) => {
  const [query, setQuery] = useState("");
  const [resultados, setResultados] = useState([]);

  const handleBuscar = async () => {
    const API_KEY = "AIzaSyC_-V187MJ-ueVIyAe84dXPFXW-XzWG40M"; // Tu API Key
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&type=veterinary_care&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setResultados(data.results);
    } catch (error) {
      console.error("Error al buscar veterinarias:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar veterinarias"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
      />
      <button
        onClick={handleBuscar}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Buscar
      </button>
      <ul>
        {resultados.map((resultado, index) => (
          <li
            key={index}
            className="border-b py-2 cursor-pointer hover:bg-gray-100"
            onClick={() =>
              onVeterinariaSeleccionada({
                name: resultado.name,
                address: resultado.formatted_address,
              })
            }
          >
            <p className="font-bold">{resultado.name}</p>
            <p className="text-sm text-gray-600">
              {resultado.formatted_address}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuscadorVeterinarias;
