import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegistroMascota() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [sexo, setSexo] = useState("");
  const [especie, setEspecie] = useState("");
  const [raza, setRaza] = useState("");
  const [color, setColor] = useState("");
  const [caracteristicas, setCaracteristicas] = useState("");
  const [pets, setPets] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const userId = user?.id || "null";

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await axios.post("http://localhost:3001/mascotas", {
        user_id: userId,
      });
      setPets(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleRegisterPet = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user_id", userId);
    formData.append("name", name);
    formData.append("sex", sexo);
    formData.append("species", especie);
    formData.append("breed", raza);
    formData.append("color", color);
    formData.append("characteristics", caracteristicas);
    formData.append("image", file);
    try {
      await axios.post("http://localhost:3001/mascotas/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-pink-100 via-blue-100 to-purple-100">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden p-8">
        <h2 className="text-4xl font-semibold text-morado text-center my-4">
          Registrar Mascota
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Registra los datos de tu mascota para continuar
        </p>
        <form
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleRegisterPet}
        >
          {/* Columna de Datos generales */}
          <div>
            <div className="mb-4">
              <label className="block text-gray-700">Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="Nombre de la mascota"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label className="block text-gray-700">Sexo</label>
                <select
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                  onChange={(e) => setSexo(e.target.value)}
                >
                  <option value="">Selecciona</option>
                  <option value="M">Macho</option>
                  <option value="H">Hembra</option>
                </select>
              </div>
            </div>

            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label className="block text-gray-700">Especie</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                  placeholder="Especie (ej. Perro, Gato)"
                  name="especie"
                  value={especie}
                  onChange={(e) => setEspecie(e.target.value)}
                />
              </div>

              <div className="w-1/2">
                <label className="block text-gray-700">Raza</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                  placeholder="Raza de la mascota"
                  name="raza"
                  value={raza}
                  onChange={(e) => setRaza(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Color</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="Color del pelaje"
                name="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>

            {/* Botón de registro alineado justo debajo de "Color" */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-morado my-8 text-white py-3 rounded-lg text-center hover:bg-blue-700 transition duration-200"
              >
                Registrar Mascota
              </button>

              <p className="text-sm text-gray-500 text-center">
                ¿Ya no quieres continuar?{" "}
                <a href="#" className="text-[#374BFF]">
                  Regresar
                </a>
              </p>
            </div>
          </div>

          {/* Columna de Características y Fotografía */}
          <div>
            <div className="mb-4">
              <label className="block text-gray-700">Características</label>
              <textarea
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                placeholder="Escribe algunas características de tu mascota"
                name="caracteristicas"
                value={caracteristicas}
                onChange={(e) => setCaracteristicas(e.target.value)}
              />
            </div>

            <p className="block text-gray-700 mb-2">Imagen de la mascota</p>
            <input type="file" onChange={handleFileChange} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistroMascota;
