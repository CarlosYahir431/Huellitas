import React, { useState } from "react";
import axios from "axios";
import LugaresSelect from "../components/selectlugar";

function Actividad() {
  const [name_actividad, setName_actividad] = useState("");
  const [place_actividad, setPlace_actividad] = useState("");
  const [fecha_actividad, setFecha_actividad] = useState("");
  const [hora_actividad, setHora_actividad] = useState("");
  const Id = JSON.parse(localStorage.getItem("pet"));

  async function handlecreateactividad(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/actividad/create",
        {
          pet_id: Id,
          name: name_actividad,
          place_id: place_actividad,
          activity_date: fecha_actividad,
          activity_time: hora_actividad,
        }
      );
      console.log(response);
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex w-full h-full max-w-4x">
      <div className="w-2/2 p-16 py-16">
        <h2 className="text-xl font-semibold text-purple-500 text-center ">
          Recordatorio de
        </h2>
        <h2 className="text-4xl font-semibold text-purple-500 text-center ">
          Actividad
        </h2>
        <form className="mt-1" onSubmit={handlecreateactividad}>
          <div className="mb-2 my-12">
            <label className="block text-gray-700">Actividad</label>
            <input
              type="name"
              className="w-full text-gray-700 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
              placeholder="croquetas"
              value={name_actividad}
              onChange={(e) => setName_actividad(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Lugar</label>
            <LugaresSelect
              onPlaceChange={setPlace_actividad}
              className="text-gray-700"
              value={place_actividad}
              placeholder="Selecciona un lugar"
            />
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Fecha</label>
              <input
                type="date"
                className="w-full text-gray-700 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="Edad en años"
                value={fecha_actividad}
                onChange={(e) => setFecha_actividad(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">Hora</label>
              <input
                type="time"
                className="w-full text-gray-700 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="Edad en años"
                value={hora_actividad}
                onChange={(e) => setHora_actividad(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-morado font-medium text-white py-3 rounded-lg text-center hover:bg-blue-700 transition duration-200 my-6"
          >
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Actividad;
