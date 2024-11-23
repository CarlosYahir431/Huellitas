import { useState } from "react";
import axios from "axios";

function Actividad_Editar() {
  const [actividad, setActividad] = useState("");
  const [lugar, setLugar] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  async function handleEdit(e) {
    e.preventDefault();
    try {
      const response = await axios.patch("http://localhost:3001/update", {
        name: actividad,
        place_id: lugar,
        activity_date: fecha,
        activity_time: hora,
      });
      console.log(response);
      window.location.reload(true);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex w-full h-full max-w-4x">
      {/* Sección del Formulario */}
      <div className="w-2/2 p-16 py-16">
        <h2 className="text-xl font-semibold text-purple-500 text-center ">
          Editar Recordatorio de
        </h2>
        <h2 className="text-4xl font-semibold text-purple-500 text-center ">
          Actividad
        </h2>
        <form className="mt-1" onSubmit={handleEdit}>
          <div className="mb-2 my-12">
            <label className="block text-gray-700">Actividad</label>
            <input
              type="name"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
              placeholder="croquetas"
              value={actividad}
              onChange={(e) => setActividad(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Lugar</label>
            <select
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
              value={lugar}
              onChange={(e) => setLugar(e.target.value)}
            >
              <option value="">Selecciona</option>
              <option value="macho">Casa</option>
              <option value="hembra">Clinica Huellitas</option>
              <option value="hembra">Parque Huellitas</option>
              <option value="hembra">Guarderia Huellitas</option>
            </select>
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Fecha</label>
              <input
                type="date"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="Edad en años"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">Hora</label>
              <input
                type="time"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="Edad en años"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-morado font-medium text-white py-3 rounded-lg text-center hover:bg-blue-700 transition duration-200 my-6"
          >
            Editar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Actividad_Editar;
