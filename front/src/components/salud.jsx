import React, { useState } from "react";
import axios from "axios";

function Salud() {
  const [tipo, setTipo] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  async function handlecreatesalud(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/salud/create", {
        pet_id: 11,
        health_type_id: tipo,
        name: name,
        place_id: place,
        event_date: fecha,
        event_time: hora,
      });
      console.log(response);
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex w-full h-full max-w-4x">
      <div className="w-2/2 p-16 py-16">
        <h2 className="text-xl font-semibold text-red-500 text-center ">
          Recordatorio de
        </h2>
        <h2 className="text-4xl font-semibold text-red-500 text-center ">
          Salud
        </h2>
        <form className="mt-1" onSubmit={handlecreatesalud}>
          <div className="mb-2 my-12">
            <label className="block text-gray-700">Tipo</label>
            <select
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
              onChange={(e) => setTipo(e.target.value)}
              value={tipo}
            >
              <option value="">Selecciona</option>
              <option value="1">Vacuna</option>
              <option value="2">Tratamiento</option>
              <option value="3">Medicamento</option>
              <option value="4">Otro</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Nombre</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
              placeholder="parvovirus"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Lugar</label>
            <select
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
              onChange={(e) => setPlace(e.target.value)}
              value={place}
            >
              <option value="">Selecciona</option>
              <option value="1">Huellitas</option>
              <option value="2">Casa</option>
            </select>
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Fecha</label>
              <input
                type="date"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                value={fecha}
                name="fecha"
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">Hora</label>
              <input
                type="time"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                value={hora}
                name="hora"
                onChange={(e) => setHora(e.target.value)}
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

export default Salud;
