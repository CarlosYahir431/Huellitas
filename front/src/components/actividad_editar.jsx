import { useState } from "react";
import axios from "axios";
import LugaresSelect from "../components/selectlugar";

function Actividad_Editar({ id, petId, activity, place, date, time }) {
  const [actividad, setActividad] = useState(activity);
  const getPlaceId = (placeName) => {
    const placeMapping = {
      casa: 1,
      "Clinica Huellitas": 2,
    };
    return placeMapping[placeName.toLowerCase()] || "";
  };
  const [lugar, setLugar] = useState(() => getPlaceId(place));

  const [fecha, setFecha] = useState(() => {
    if (date) {
      const [day, month, year] = date.split("/");
      return `${year}-${month}-${day}`;
    }
    return "";
  });
  const [hora, setHora] = useState(time || "");

  async function handleEdit(e) {
    e.preventDefault();
    try {
      const response = await axios.patch(
        "http://localhost:3001/actividad/update",
        {
          pet_id: petId,
          name: actividad,
          place_id: lugar,
          activity_date: fecha,
          activity_time: hora,
          activity_id: id,
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
            <LugaresSelect
              onPlaceChange={setLugar}
              value={lugar}
              placeholder="Selecciona un lugar"
            />
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
