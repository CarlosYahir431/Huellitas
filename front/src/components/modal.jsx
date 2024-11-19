import React from "react";
import { IoCloseSharp } from "react-icons/io5"; // Asegúrate de que la importación sea correcta

function Modal({ isOpen, closeModal, children }) {
  if (!isOpen) return null; // No renderizar si el modal no está abierto

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={closeModal}
        >
          <IoCloseSharp size={24} />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
