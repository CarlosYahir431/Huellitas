import React, { useState, useEffect } from "react";
import Modal from "./modal";
import axios from "axios";
import Actividad from "./actividad";
import { TbPaw } from "react-icons/tb";

function Recordatorio_Actividad() {
  const [actividad, setActividad] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const Id = JSON.parse(localStorage.getItem("pet"));

  useEffect(() => {
    axios
      .get(`http://localhost:3001/actividad/contar/${Id}`)
      .then((response) => {
        const actividadData = response.data;
        setActividad(actividadData);
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
      });
  }, []);

  return (
    <div className="bg-purple-500 p-8 rounded-xl text-gray-300 flex flex-col gap-2">
      <TbPaw className="text-5xl text-white" />
      <h4 className="text-2xl text-white">Actividad</h4>
      <span className="text-5xl text-white">
        {actividad.total !== undefined ? actividad.total : "Cargando..."}
      </span>{" "}
      <span className="text-lg text-gray-100">Recordatorios</span>
      <button
        className="py-3 px-3 bg-gray-100 text-lg font-medium mt-auto text-purple-500 rounded-full"
        onClick={openModal}
      >
        Agregar
      </button>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <Actividad />
      </Modal>
    </div>
  );
}

export default Recordatorio_Actividad;
