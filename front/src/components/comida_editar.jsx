import axios from "axios";
import { useState } from "react";

function Comida_Editar({ id, petId, name, date, time }) {
  const [alimento, setAlimento] = useState(name);
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
      // Convert date back to dd/mm/yyyy format
      const response = await axios.patch(
        "http://localhost:3001/comida/update",
        {
          pet_id: petId,
          name: alimento,
          feeding_date: fecha,
          feeding_time: hora,
          food_id: id,
        }
      );
      console.log(response);
      window.location.reload(true)
      // Optional: close modal or show success message
    } catch (error) {
      console.error("Error updating food:", error);
      // Handle error (show error message, etc.)
    }
  }

  return (
    <div className="flex w-full h-full max-w-4x">
      <div className="w-2/2 p-16 py-16">
        <h2 className="text-xl font-semibold text-orange-500 text-center">
          Editar Recordatorio de
        </h2>
        <h2 className="text-4xl font-semibold text-orange-500 text-center">
          Alimento
        </h2>
        <form className="mt-1" onSubmit={handleEdit}>
          <div className="mb-2 my-12">
            <label className="block text-gray-700">Alimento</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
              placeholder="croquetas"
              value={alimento}
              onChange={(e) => setAlimento(e.target.value)}
            />
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Fecha</label>
              <input
                type="date"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">Hora</label>
              <input
                type="time"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
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

export default Comida_Editar;
