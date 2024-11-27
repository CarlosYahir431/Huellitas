import axios from "axios";
import { useEffect, useState } from "react";
import { TbTrash, TbEdit, TbSearch } from "react-icons/tb";
import Comida_Editar from "./comida_editar";
import Modal from "./modal";

function Tabla_Alimento() {
  async function handledeletecomida(e, food_id) {
    e.preventDefault();
    try {
      const response = await axios.delete(
        "http://localhost:3001/comida/delete",
        {
          data: { food_id },
        }
      );
      console.log(response.data);
      window.location.reload(true);
    } catch (error) {
      console.error("Error al eliminar el registro:", error);
    }
  }
  const [alimento_all, setAlimento_all] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFood(null);
  };

  const handleUpdateFood = (updatedFood) => {
    setAlimento_all((prevAlimentos) =>
      prevAlimentos.map((food) =>
        food.food_id === updatedFood.food_id
          ? { ...food, ...updatedFood }
          : food
      )
    );
    closeModal();
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/comida`)
      .then((response) => {
        setAlimento_all(response.data);
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
      });
  }, []);
  const handleEditClick = (food) => {
    setSelectedFood(food);
    openModal();
  };
  return (
    <>
      <h1 className="text-2xl text-orange-500  font-semibold mb-6 my-12">
        Recordatorios de Alimentación
      </h1>
      <div className="bg-gray-200 p-4 mb-4 rounded-xl">
        <table className="hidden md:table w-full text-sm my-4">
          <thead>
            <tr className="text-gray-800">
              <th className="py-2 px-4 font-medium border-b text-center text-lg">
                ID
              </th>
              <th className="py-2 px-4 font-medium border-b text-center text-lg">
                Nombre
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
            {alimento_all.length > 0 ? (
              alimento_all.map((item, index) => (
                <tr key={item.food_id} className="text-gray-500">
                  <td className="py-2 px-4 border-b text-center">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.name}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.feeding_date}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.feeding_time}
                  </td>
                  <td className="py-2 px-4 border-b text-center justify-center gap-4">
                    <button onClick={openModal}>
                      <TbEdit
                        className="text-green-500 text-2xl mx-4 hover:text-green-700"
                        onClick={() => handleEditClick(item)}
                      />
                    </button>

                    {isModalOpen && selectedFood && (
                      <Modal isOpen={isModalOpen} closeModal={closeModal}>
                        <Comida_Editar
                          id={selectedFood.food_id}
                          petId={selectedFood.pet_id}
                          name={selectedFood.name}
                          date={selectedFood.feeding_date}
                          time={selectedFood.feeding_time}
                          onUpdate={handleUpdateFood}
                        />
                      </Modal>
                    )}

                    <button
                      onClick={(e) => handledeletecomida(e, item.food_id)}
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

export default Tabla_Alimento;
