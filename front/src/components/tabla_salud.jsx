import { useState, useEffect } from "react";
import { TbSearch, TbEdit, TbTrash } from "react-icons/tb";
import axios from "axios";
import Modal from "./modal";
import Salud_Editar from "./salud_editar";

function Tabla_Salud() {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [salud_all, setSalud_all] = useState("");

  useEffect(() => {
    axios
      .get('http://localhost:3001/salud')
      .then((response) => {
        const salud_allData = response.data;
        setSalud_all(salud_allData);
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
      });
  }, []);

  async function handledeletesalud(e, health_id) {
    e.preventDefault();
    try {
      const response = await axios.delete(
        "http://localhost:3001/salud/delete",
        {
          data: { health_id }, // Aquí enviamos el ID en el cuerpo de la solicitud
        }
      );
      console.log(response.data);
      window.location.reload(true);
    } catch (error) {
      console.error("Error al eliminar el registro:", error);
    }
  }
 // Función para manejar la edición y actualizar el estado local
 const handleUpdateActivity = (updatedActivity) => {
  setSalud_all((prevActividades) =>
    prevActividades.map((activity) =>
      activity.activity_id === updatedActivity.activity_id
        ? { ...activity, ...updatedActivity } // Actualizar solo la actividad seleccionada
        : activity
    )
  );
  closeModal(); // Cerrar el modal después de actualizar
};

const handleEditClick = (activity) => {
  setSelectedActivity(activity); // Establecer la actividad seleccionada
  openModal(); // Abrir el modal
};

  return (
    <>
      <h1 className="text-2xl text-red-500  font-semibold mb-6 my-12">
        Recordatorios de Salud
      </h1>
      <div className="bg-gray-200 p-4 mb-4 rounded-xl">
        <table className="hidden md:table w-full text-sm my-4">
          <thead>
            <tr className="text-gray-800">
              <th className="py-2 px-4 font-medium border-b text-center text-xl">ID</th>
              <th className="py-2 px-4 font-medium border-b text-center">
                Nombre
              </th>
              <th className="py-2 px-4 font-medium border-b text-center text-lg">
                Tipo
              </th>
              <th className="py-2 px-4 font-medium border-b text-center text-lg">
                Lugar
              </th>
              <th className="py-2 px-4 font-medium border-b text-center text-lg">
                Fecha
              </th>
              <th className="py-2 px-4 font-medium border-b text-center text-lg">
                Hora
              </th>
              <th className="py-2 px-4 font-medium border-b text-center text-lg">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {salud_all.length > 0 ? (
              salud_all.map((item, index) => (
                <tr key={item.health_id} className="text-gray-500">
                  <td className="py-2 px-4 border-b text-center">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.name}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.type_name}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.place_name}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.event_date}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.event_time}
                  </td>
                  <td className="py-2 px-4 border-b text-center justify-center gap-4">
                    <button onClick={openModal}>
                      <TbEdit onClick={()=> handleEditClick(item)} className="text-green-500 text-2xl mx-4 hover:text-green-700" />
                    </button>
                    <Modal isOpen={isModalOpen} closeModal={closeModal}>
                      <Salud_Editar />
                    </Modal>
                    <button
                      onClick={(e) => handledeletesalud(e, item.health_id)}
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
            {/* Modal para editar */}
            {isModalOpen && selectedActivity && (
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <Salud_Editar
            id={selectedActivity.health_id}
            petId={selectedActivity.pet_id}
            name={selectedActivity.name}
            onUpdate={handleUpdateActivity} // Pasar la función de actualización
          />
        </Modal>
      )}
    </>
  );
}

export default Tabla_Salud;
