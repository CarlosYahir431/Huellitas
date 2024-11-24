import React, { useState } from "react";
import axios from "axios";

function Comida() {
  const [name_alimento, setName_alimento] = useState("");
  const [fecha_alimento, setFecha_alimento] = useState("");
  const [hora_alimento, setHora_alimento] = useState("");

  async function handlecreatealimento(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/comida/create", {
        pet_id: 1,
        name: name_alimento,
        feeding_date: fecha_alimento,
        feeding_time: hora_alimento,
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
        <h2 className="text-xl font-semibold text-orange-500 text-center ">
          Recordatorio de
        </h2>
        <h2 className="text-4xl font-semibold text-orange-500 text-center ">
          Alimentación
        </h2>
        <form className="mt-1" onSubmit={handlecreatealimento}>
          <div className="mb-2 my-12">
            <label className="block text-gray-700">Alimento</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
              value={name_alimento}
              name="name_alimento"
              onChange={(e) => setName_alimento(e.target.value)}
            />
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Fecha</label>
              <input
                type="date"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="Edad en años"
                value={fecha_alimento}
                name="fecha_alimento"
                onChange={(e) => setFecha_alimento(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">Hora</label>
              <input
                type="time"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="Edad en años"
                value={hora_alimento}
                name="hora"
                onChange={(e) => setHora_alimento(e.target.value)}
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

export default Comida;
