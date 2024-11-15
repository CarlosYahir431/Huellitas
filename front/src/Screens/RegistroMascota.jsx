import axios from "axios";
import React, { useState } from "react";

function RegistroMascota() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [sexo, setSexo] = useState("");
  const [especie, setEspecie] = useState("");
  const [raza, setRaza] = useState("");
  const [color, setColor] = useState("");
  const [caracteristicas, setCaracteristicas] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  // Verificar si existe y obtener el nombre
  const userId = user?.id || "null";

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  async function handleRegisterPet(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/mascotas/register",
          {
            user_id: userId,
            name: name,
            sex: sexo,
            species: especie,
            breed: raza,
            color: color,
            characteristics: caracteristicas,
          }
      );
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-pink-100 via-blue-100 to-purple-100">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden p-8">
        <h2 className="text-4xl font-semibold text-morado text-center my-4">
          Registrar Mascota
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Registra los datos de tu mascota para continuar
        </p>
        <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleRegisterPet}>
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
                  <option value="Macho">Macho</option>
                  <option value="Hembra">Hembra</option>
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

              <p className="text-sm text-gray-500  text-center">
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
                onChange={(e)=>(setCaracteristicas(e.target.value))}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">
                Fotografía de la Mascota
              </label>
              <div className="w-full px-4 py-2 mt-2 text-center border rounded-md border-dashed">
                <input
                  type="file"
                  accept="image/*"
                  className="w-full px-4 py-2 mt-2 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                  onChange={handleFileChange}
                />
              </div>

              {/* Contenedor fijo para la previsualización */}
              <div className="mt-4 w-full h-64 bg-gray-100 rounded-xl flex justify-center items-center">
                {file ? (
                  <img
                    src={file}
                    alt="Previsualización"
                    className="object-cover w-full h-full rounded-xl shadow-md"
                  />
                ) : (
                  <div className="flex justify-center items-center w-full h-full bg-gray-200 rounded-xl">
                    <span className="text-gray-500 text-lg">
                      Previsualiza tu foto aquí
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistroMascota;
