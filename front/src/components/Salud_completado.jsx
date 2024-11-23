import { useState, useEffect } from "react";
import { TbSearch, TbEdit, TbTrash } from "react-icons/tb";
import axios from "axios";
import Modal from "./modal";
import Salud_Editar from "./salud_editar";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Salud_completado() {
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [medicamento, setMedicamento] = useState("");
  const [tratamiento, setTratamiento] = useState("");
  const [vacuna, setVacuna] = useState("");
  const [otro, setOtro] = useState("");

  // Replace multiple useEffect hooks with a single function
  const fetchHealthRecords = () => {
    const typeIds = [1, 2, 3, 4]; // Corresponding to vacuna, tratamiento, medicamento, otro

    const fetchData = async (typeId) => {
      try {
        const response = await axios.get(
          `http://localhost:3001/salud/health-records/${typeId}`
        );
        switch (typeId) {
          case 1:
            setVacuna(response.data);
            break;
          case 2:
            setTratamiento(response.data);
            break;
          case 3:
            setMedicamento(response.data);
            break;
          case 4:
            setOtro(response.data);
            break;
        }
      } catch (error) {
        console.error(
          `Error fetching health records for type ${typeId}:`,
          error
        );
      }
    };

    typeIds.forEach(fetchData);
  };

  // Call this in a useEffect
  useEffect(() => {
    fetchHealthRecords();
  }, []);
  return (
    <>
      <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
        <Sidebar />
        <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
          <Header />
          <h1 className="text-2xl text-red-500 font-semibold mb-6 my-12">
            Recordatorios de Salud
          </h1>

          {[
            { data: vacuna, title: "Vacunas" },
            { data: tratamiento, title: "Tratamientos" },
            { data: medicamento, title: "Medicamentos" },
            { data: otro, title: "Otros" },
          ].map(({ data, title }) => (
            <div key={title} className="bg-white p-8 rounded-xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-4">{title}</h2>
              <table className="min-w-full bg-white my-4">
                <thead>
                  <tr>
                    {[
                      "ID",
                      "Nombre",
                      "Tipo",
                      "Lugar",
                      "Fecha",
                      "Hora",
                      "Acciones",
                    ].map((header) => (
                      <th
                        key={header}
                        className="py-2 px-4 font-medium border-b text-center text-xl"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    data.map((item, index) => (
                      <tr key={item.health_id}>
                        <td className="py-2 px-4 border-b text-center">
                          {index + 1}
                        </td>
                        <td className="py-2 px-4 border-b text-center">
                          {item.health_name}
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
                            <TbEdit className="text-green-500 text-2xl mx-4 hover:text-green-700" />
                          </button>
                          <Modal isOpen={isModalOpen} closeModal={closeModal}>
                            <Salud_Editar />
                          </Modal>
                          <button
                            onClick={(e) =>
                              handledeletesalud(e, item.health_id)
                            }
                          >
                            <TbTrash className="text-red-500 text-2xl hover:text-red-700" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={7}
                        className="px-4 py-2 text-center text-gray-500"
                      >
                        No hay registros disponibles
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}

export default Salud_completado;
