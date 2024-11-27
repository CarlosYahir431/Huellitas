import React, { useState, useEffect } from "react";
import Modal from "./modal";
import axios from "axios";
import Salud from "./salud";
import { TbHeart } from "react-icons/tb";

function Recordatorio_Salud() {
  const [salud, setSalud] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const Id = JSON.parse(localStorage.getItem("pet"));

  useEffect(() => {
    axios
      .get(`http://localhost:3001/salud/contar/${Id}`)
      .then((response) => {
        const saludData = response.data; // Aquí response.data es un objeto, no un array
        setSalud(saludData); // Actualiza el estado con el objeto recibido
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
      });
  }, []);

  return (
    <div className="bg-red-500 p-8 rounded-xl text-gray-300 flex flex-col gap-2">
      <TbHeart className="text-5xl text-white" />
      <h4 className="text-2xl text-white">Salud</h4>
      {/* Mostrar el total directamente */}
      <span className="text-5xl text-white">
        {salud.total !== undefined ? salud.total : "Cargando..."}
      </span>
      <span className="text-lg text-gray-100">Recordatorios</span>
      <button
        className="py-3 px-3 bg-gray-100 text-lg font-medium mt-auto text-orange-500 rounded-full"
        onClick={openModal}
      >
        Agregar
      </button>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <Salud />
      </Modal>
    </div>
  );
}

export default Recordatorio_Salud;
