import { TbSearch, TbTrash, TbEdit } from "react-icons/tb";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./modal";
import Actividad_Editar from "./actividad_editar";

function Tabla_Actividad() {
  const [actividades_all, setActividades_all] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedActivity(null); // Limpiar la actividad seleccionada
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/actividad")
      .then((response) => {
        setActividades_all(response.data);
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
      });
  }, []);

  // Función para eliminar una actividad
  async function handledeleteactividad(e, activity_id) {
    e.preventDefault();
    try {
      await axios.delete("http://localhost:3001/actividad/delete", {
        data: { activity_id },
      });
      // Elimina la actividad del estado local
      setActividades_all((prevActividades) =>
        prevActividades.filter(
          (activity) => activity.activity_id !== activity_id
        )
      );
    } catch (error) {
      console.error("Error al eliminar el registro:", error);
    }
  }

  // Función para manejar la edición y actualizar el estado local
  const handleUpdateActivity = (updatedActivity) => {
    setActividades_all((prevActividades) =>
      prevActividades.map((activity) =>
        activity.activity_id === updatedActivity.activity_id
          ? { ...activity, ...updatedActivity } // Actualizar solo la actividad seleccionada
          : activity
      )
    );
    closeModal(); // Cerrar el modal después de actualizar
  };

  const handleEditClick = (activity) => {
    setSelectedActivity(activity);
    openModal();
  };

  return (
    <>
      <h1 className="text-2xl text-purple-500 font-semibold mb-6 my-12">
        Recordatorios de Actividad
      </h1>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <table className="min-w-full bg-white my-4">
          <thead>
            <tr>
              <th className="py-2 px-4 font-medium border-b text-center text-xl">
                ID
              </th>
              <th className="py-2 px-4 font-medium border-b text-center text-xl">
                Actividad
              </th>
              <th className="py-2 px-4 font-medium border-b text-center text-xl">
                Lugar
              </th>
              <th className="py-2 px-4 font-medium border-b text-center text-xl">
                Fecha
              </th>
              <th className="py-2 px-4 font-medium border-b text-center text-xl">
                Hora
              </th>
              <th className="py-2 px-4 font-medium border-b text-center text-xl">
                Acciones
              </th>
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
                  <td className="py-2 px-4 border-b text-center flex justify-center gap-4">
                    <TbEdit
                      onClick={() => handleEditClick(item)}
                      className="text-green-500 text-2xl hover:text-green-700"
                    />
                    <TbTrash
                      onClick={(e) =>
                        handledeleteactividad(e, item.activity_id)
                      }
                      className="text-red-500 text-2xl hover:text-red-700"
                    />
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

      {/* Modal para editar */}
      {isModalOpen && selectedActivity && (
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <Actividad_Editar
            id={selectedActivity.activity_id}
            petId={selectedActivity.pet_id}
            activity={selectedActivity.name}
            place={selectedActivity.place_name} 
            date={selectedActivity.activity_date} 
            time={selectedActivity.activity_time}
            onUpdate={handleUpdateActivity}
          />
        </Modal>
      )}
    </>
  );
}

export default Tabla_Actividad;
