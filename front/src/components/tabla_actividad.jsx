import { TbSearch, TbTrash, TbEdit } from "react-icons/tb";
import { useState, useEffect } from "react";
import axios from "axios";

function Tabla_Actividad() {
  async function handledeleteactividad(e, activity_id) {
    e.preventDefault();
    try {
      const response = await axios.delete(
        "http://localhost:3001/actividad/delete",
        {
          data: { activity_id }, // Aquí enviamos el ID en el cuerpo de la solicitud
        }
      );
      console.log(response.data);
      window.location.reload(true);
    } catch (error) {
      console.error("Error al eliminar el registro:", error);
    }
  }
  
  const [actividades_all, setActividades_all] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/actividad`)
      .then((response) => {
        const actividades_allData = response.data;
        setActividades_all(actividades_allData);
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
      });
  }, []);

  return (
    <>
      <h1 className="text-2xl text-purple-500  font-semibold mb-6 my-12">
        Recordatorios de Actividad
      </h1>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="relative mb-4 w-full">
          <input
            type="text"
            placeholder="Buscar..."
            className="p-2 pl-10 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
          />
          <TbSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <table className="min-w-full bg-white my-4">
          <thead>
            <tr>
              <th className="py-2 px-4 font-medium border-b text-center">ID</th>
              <th className="py-2 px-4 font-medium border-b text-center">
                Actividad
              </th>
              <th className="py-2 px-4 font-medium border-b text-center">
                Lugar
              </th>
              <th className="py-2 px-4 font-medium border-b text-center">
                Fecha
              </th>
              <th className="py-2 px-4 font-medium border-b text-center">
                Hora
              </th>
              <th className="py-2 px-4 font-medium border-b text-center"></th>
            </tr>
          </thead>

          <tbody>
            {actividades_all.length > 0 ? (
              actividades_all.map((item, index) => (
                <tr key={item.activity_id}>
                  <td className="py-2 px-4 border-b text-center">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.name}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.place_name}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.activity_date}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.activity_time}
                  </td>
                  <td className="py-2 px-4 border-b text-center justify-center gap-4">
                    <button>
                      <TbEdit
                        onClick={() => setFormType2("actividad")}
                        className="text-green-500 text-2xl mx-4 hover:text-green-700"
                      />
                    </button>
                    <button
                      onClick={(e) =>
                        handledeleteactividad(e, item.activity_id)
                      }
                    >
                      <TbTrash className="text-red-500 text-2xl hover:text-red-700" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-4 py-2 text-center text-gray-500">
                  No hay registros disponibles
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Tabla_Actividad;
