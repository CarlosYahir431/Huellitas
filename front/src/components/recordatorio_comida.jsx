import React, { useState, useEffect } from "react";
import Modal from "./modal";
import axios from "axios";
import Comida from "./comida";
import { TbPaperBag } from "react-icons/tb";

function Recordatorio_comida() {
  const [comida, setComida] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const Id = JSON.parse(localStorage.getItem("pet"));
  useEffect(() => {
    axios
      .get(`http://localhost:3001/comida/contar/${Id}`)
      .then((response) => {
        const comidaData = response.data;
        setComida(comidaData);
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
      });
  }, []);
  return (
    <>
      <div className="bg-orange-500 p-8 rounded-xl text-gray-300 flex flex-col gap-2">
        <TbPaperBag className="text-5xl text-white" />
        <h4 className="text-2xl text-white">Alimento</h4>
        <span className="text-5xl text-white">
          {comida.total !== undefined ? comida.total : "Cargando..."}
        </span>
        <span className="text-lg text-gray-100">Recordatorios</span>
        <button
          className="py-3 px-3 bg-gray-100 text-lg font-medium mt-auto text-orange-500 rounded-full"
          onClick={openModal}
        >
          Agregar
        </button>
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <Comida />
        </Modal>
      </div>
    </>
  );
}

export default Recordatorio_comida;
