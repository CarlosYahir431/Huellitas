import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Frame from "../img/hombre.mp4"; // Asegúrate de que la ruta sea correcta
import axios from "axios";
// Componentes
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

// Iconos
import {
  TbHeart,
  TbPaperBag,
  TbPaw,
  TbTrash,
  TbEdit,
  TbSearch,
} from "react-icons/tb";

function Recordatorios() {
  // Estado para controlar el formulario a mostrar
  const [formType, setFormType] = useState(null);
  const [tipo, setTipo] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  //alimento
  const [name_alimento, setName_alimento] = useState("");
  const [fecha_alimento, setFecha_alimento] = useState("");
  const [hora_alimento, setHora_alimento] = useState("");
  //actividad
  const [name_actividad, setName_actividad] = useState("");
  const [place_actividad, setPlace_actividad] = useState("");
  const [fecha_actividad, setFecha_actividad] = useState("");
  const [hora_actividad, setHora_actividad] = useState("");
  //contador
  const [salud, setSalud] = useState({});
  const [actividad, setActividad] = useState({});
  const [comida, setComida] = useState({});

  async function handlecreatesalud(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/salud/create", {
        pet_id: 11,
        health_type_id: tipo,
        name: name,
        place_id: place,
        event_date: fecha,
        event_time: hora,
      });
      console.log(response);
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  }

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

  async function handledeleteactividad(e, activity_id) {
    e.preventDefault();
    try {
      const response = await axios.delete(
        "http://localhost:3001/actividad/delete",
        {
          data: { activity_id }, // Aquí enviamos el ID en el cuerpo de la solicitud
        }
      );
      console.log(response.data);
      window.location.reload(true);
    } catch (error) {
      console.error("Error al eliminar el registro:", error);
    }
  }

  async function handledeletecomida(e,food_id) {
    e.preventDefault();
    try {
      const response = await axios.delete(
        "http://localhost:3001/comida/delete",
        {
          data: {food_id }, // Aquí enviamos el ID en el cuerpo de la solicitud
        }
      );
      console.log(response.data);
      window.location.reload(true);
    } catch (error) {
      console.error("Error al eliminar el registro:", error);
    }
  }

  async function handlecreatealimento(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/comida/create", {
        pet_id: 11,
        name: name_alimento,
        feeding_date: fecha_alimento,
        feeding_time: hora_alimento,
      });
      console.log(response);
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function handlecreateactividad(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/actividad/create",
        {
          pet_id: 11,
          name: name_actividad,
          place_id: place_actividad,
          activity_date: fecha_actividad,
          activity_time: hora_actividad,
        }
      );
      console.log(response);
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  }
  //get de todo
  const [salud_all, setSalud_all] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/salud`)
      .then((response) => {
        const salud_allData = response.data;
        setSalud_all(salud_allData);
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
      });
  }, []);

  const [alimento_all, setAlimento_all] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/comida`)
      .then((response) => {
        const alimento_allData = response.data;
        setAlimento_all(alimento_allData);
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
      });
  }, []);

  const [actividades_all, setActividades_all] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/actividad`)
      .then((response) => {
        const actividades_allData = response.data;
        setActividades_all(actividades_allData);
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
      });
  }, []);

  //Contadores
  useEffect(() => {
    axios
      .get(`http://localhost:3001/salud/contar`)
      .then((response) => {
        const saludData = response.data; // Aquí response.data es un objeto, no un array
        setSalud(saludData); // Actualiza el estado con el objeto recibido
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/comida/contar`)
      .then((response) => {
        const comidaData = response.data;
        setComida(comidaData);
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/actividad/contar`)
      .then((response) => {
        const actividadData = response.data;
        setActividad(actividadData);
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
      });
  }, []);

  // Función para cerrar el modal
  const closeModal = () => setFormType(null);

  // Función para mostrar el formulario correspondiente
  const renderForm = () => {
    switch (formType) {
      case "salud":
        return (
          <div className="modal-content flex w-full h-full max-w-4x">
            {/* Sección del Formulario */}
            <div className="w-2/2 p-16 py-16">
              <h2 className="text-xl font-semibold text-red-500 text-center ">
                Recordatorio de
              </h2>
              <h2 className="text-4xl font-semibold text-red-500 text-center ">
                Salud
              </h2>
              <form className="mt-1" onSubmit={handlecreatesalud}>
                <div className="mb-2 my-12">
                  <label className="block text-gray-700">Tipo</label>
                  <select
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                    onChange={(e) => setTipo(e.target.value)}
                    value={tipo}
                  >
                    <option value="">Selecciona</option>
                    <option value="1">Vacuna</option>
                    <option value="2">Tratamiento</option>
                    <option value="3">Medicamento</option>
                    <option value="4">Otro</option>
                  </select>
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                    placeholder="parvovirus"
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700">Lugar</label>
                  <select
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                    onChange={(e) => setPlace(e.target.value)}
                    value={place}
                  >
                    <option value="">Selecciona</option>
                    <option value="1">Huellitas</option>
                    <option value="2">Casa</option>
                  </select>
                </div>
                <div className="flex space-x-4 mb-4">
                  <div className="w-1/2">
                    <label className="block text-gray-700">Fecha</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                      value={fecha}
                      name="fecha"
                      onChange={(e) => setFecha(e.target.value)}
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700">Hora</label>
                    <input
                      type="time"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                      value={hora}
                      name="hora"
                      onChange={(e) => setHora(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-morado font-medium text-white py-3 rounded-lg text-center hover:bg-blue-700 transition duration-200 my-6"
                >
                  Agregar
                </button>
              </form>
            </div>
          </div>
        );

      case "alimento":
        return (
          <div className="modal-content flex w-full h-full max-w-4x">
            {/* Sección del Formulario */}
            <div className="w-2/2 p-16 py-16">
              <h2 className="text-xl font-semibold text-orange-500 text-center ">
                Recordatorio de
              </h2>
              <h2 className="text-4xl font-semibold text-orange-500 text-center ">
                Alimento
              </h2>
              <form className="mt-1" onSubmit={handlecreatealimento}>
                <div className="mb-2 my-12">
                  <label className="block text-gray-700">Alimento</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                    value={name_alimento}
                    name="name_alimento"
                    onChange={(e) => setName_alimento(e.target.value)}
                  />
                </div>
                <div className="flex space-x-4 mb-4">
                  <div className="w-1/2">
                    <label className="block text-gray-700">Fecha</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                      placeholder="Edad en años"
                      value={fecha_alimento}
                      name="fecha_alimento"
                      onChange={(e) => setFecha_alimento(e.target.value)}
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700">Hora</label>
                    <input
                      type="time"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                      placeholder="Edad en años"
                      value={hora_alimento}
                      name="hora"
                      onChange={(e) => setHora_alimento(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-morado font-medium text-white py-3 rounded-lg text-center hover:bg-blue-700 transition duration-200 my-6"
                >
                  Agregar
                </button>
              </form>
            </div>
          </div>
        );
      //Actividad
      case "actividad":
        return (
          <div className="modal-content flex w-full h-full max-w-4x">
            {/* Sección del Formulario */}
            <div className="w-2/2 p-16 py-16">
              <h2 className="text-xl font-semibold text-purple-500 text-center ">
                Recordatorio de
              </h2>
              <h2 className="text-4xl font-semibold text-purple-500 text-center ">
                Actividad
              </h2>
              <form className="mt-1" onSubmit={handlecreateactividad}>
                <div className="mb-2 my-12">
                  <label className="block text-gray-700">Actividad</label>
                  <input
                    type="name"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                    placeholder="croquetas"
                    value={name_actividad}
                    onChange={(e) => setName_actividad(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700">Lugar</label>
                  <select
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                    onChange={(e) => setPlace_actividad(e.target.value)}
                    value={place_actividad}
                  >
                    <option value="">Selecciona</option>
                    <option value="1">Huellitas</option>
                    <option value="2">Casa</option>
                  </select>
                </div>
                <div className="flex space-x-4 mb-4">
                  <div className="w-1/2">
                    <label className="block text-gray-700">Fecha</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                      placeholder="Edad en años"
                      value={fecha_actividad}
                      onChange={(e) => setFecha_actividad(e.target.value)}
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700">Hora</label>
                    <input
                      type="time"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                      placeholder="Edad en años"
                      value={hora_actividad}
                      onChange={(e) => setHora_actividad(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-morado font-medium text-white py-3 rounded-lg text-center hover:bg-blue-700 transition duration-200 my-6"
                >
                  Agregar
                </button>
              </form>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Estado para controlar el formulario a mostrar
  const [formType2, setFormType2] = useState(null);

  // Función para cerrar el modal
  const closeModal2 = () => setFormType2(null);

  // Función para mostrar el formulario correspondiente
  const renderForm2 = () => {
    switch (formType2) {
      case "salud":
        return (
          <div className="modal-content flex w-full h-full max-w-4x">
            {/* Sección del Formulario */}
            <div className="w-2/2 p-16 py-16">
              <h2 className="text-xl font-semibold text-red-500 text-center ">
                Editar Recordatorio de
              </h2>
              <h2 className="text-4xl font-semibold text-red-500 text-center ">
                Saluda
              </h2>
              <form className="mt-1">
                <div className="mb-2 my-12">
                  <label className="block text-gray-700">Tipo</label>
                  <select className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]">
                    <option value="">Selecciona</option>
                    <option value="macho">Vacuna</option>
                    <option value="hembra">Tratamiento</option>
                    <option value="hembra">Medicamento</option>
                    <option value="hembra">Otro</option>
                  </select>
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700">Nombre</label>
                  <input
                    type="name"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                    placeholder="parvovirus"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700">Lugar</label>
                  <select className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]">
                    <option value="">Selecciona</option>
                    <option value="macho">Casa</option>
                    <option value="hembra">Clinica Huellitas</option>
                    <option value="hembra">Parque Huellitas</option>
                    <option value="hembra">Guarderia Huellitas</option>
                  </select>
                </div>
                <div className="flex space-x-4 mb-4">
                  <div className="w-1/2">
                    <label className="block text-gray-700">Fecha</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                      placeholder="Edad en años"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700">Hora</label>
                    <input
                      type="time"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                      placeholder="Edad en años"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-morado font-medium text-white py-3 rounded-lg text-center hover:bg-blue-700 transition duration-200 my-6"
                >
                  Editar
                </button>
              </form>
            </div>
          </div>
        );
      case "alimento":
        return (
          <div className="modal-content flex w-full h-full max-w-4x">
            {/* Sección del Formulario */}
            <div className="w-2/2 p-16 py-16">
              <h2 className="text-xl font-semibold text-orange-500 text-center ">
                Editar Recordatorio de
              </h2>
              <h2 className="text-4xl font-semibold text-orange-500 text-center ">
                Alimento
              </h2>
              <form className="mt-1">
                <div className="mb-2 my-12">
                  <label className="block text-gray-700">Alimento</label>
                  <input
                    type="name"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                    placeholder="croquetas"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700">Lugar</label>
                  <select className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]">
                    <option value="">Selecciona</option>
                    <option value="macho">Casa</option>
                    <option value="hembra">Clinica Huellitas</option>
                    <option value="hembra">Parque Huellitas</option>
                    <option value="hembra">Guarderia Huellitas</option>
                  </select>
                </div>
                <div className="flex space-x-4 mb-4">
                  <div className="w-1/2">
                    <label className="block text-gray-700">Fecha</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                      placeholder="Edad en años"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700">Hora</label>
                    <input
                      type="time"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                      placeholder="Edad en años"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-morado font-medium text-white py-3 rounded-lg text-center hover:bg-blue-700 transition duration-200 my-6"
                >
                  Editar
                </button>
              </form>
            </div>
          </div>
        );
      case "actividad":
        return (
          <div className="modal-content flex w-full h-full max-w-4x">
            {/* Sección del Formulario */}
            <div className="w-2/2 p-16 py-16">
              <h2 className="text-xl font-semibold text-purple-500 text-center ">
                Editar Recordatorio de
              </h2>
              <h2 className="text-4xl font-semibold text-purple-500 text-center ">
                Actividad
              </h2>
              <form className="mt-1">
                <div className="mb-2 my-12">
                  <label className="block text-gray-700">Actividad</label>
                  <input
                    type="name"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                    placeholder="croquetas"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700">Lugar</label>
                  <select className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]">
                    <option value="">Selecciona</option>
                    <option value="macho">Casa</option>
                    <option value="hembra">Clinica Huellitas</option>
                    <option value="hembra">Parque Huellitas</option>
                    <option value="hembra">Guarderia Huellitas</option>
                  </select>
                </div>
                <div className="flex space-x-4 mb-4">
                  <div className="w-1/2">
                    <label className="block text-gray-700">Fecha</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                      placeholder="Edad en años"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700">Hora</label>
                    <input
                      type="time"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                      placeholder="Edad en años"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-morado font-medium text-white py-3 rounded-lg text-center hover:bg-blue-700 transition duration-200 my-6"
                >
                  Editar
                </button>
              </form>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Header />

        {/* Título de Agregar Recordatorio */}
        <h1 className="text-2xl font-semibold mb-8 my-12">
          Agregar Recordatorio
        </h1>

        {/* Sección de las tarjetas */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8 drop-shadow-xl">
          {/* Card 1: Salud */}
          <div className="bg-red-500 p-8 rounded-xl text-gray-300 flex flex-col gap-2">
            <TbHeart className="text-5xl" />
            <h4 className="text-2xl text-white">Salud</h4>
            {/* Mostrar el total directamente */}
            <span className="text-5xl text-white">
              {salud.total !== undefined ? salud.total : "Cargando..."}
            </span>
            <span className="text-base text-gray-100">Recordatorios</span>

            <button
              className="py-3 px-3 bg-gray-100 font-medium mt-auto text-orange-500 rounded-full"
              onClick={() => setFormType("salud")}
            >
              Agregar
            </button>
          </div>
          {/* Card 2: Alimento */}
          <div className="bg-orange-500 p-8 rounded-xl text-gray-300 flex flex-col gap-2">
            <TbPaperBag className="text-5xl " />
            <h4 className="text-2xl text-white">Alimento</h4>
            <span className="text-5xl text-white">
              {comida.total !== undefined ? comida.total : "Cargando..."}
            </span>
            <span className="text-base text-gray-100">Recordatorios</span>
            <button
              className="py-3 px-3 bg-gray-100 font-medium mt-auto text-orange-500 rounded-full"
              onClick={() => setFormType("alimento")}
            >
              Agregar
            </button>
          </div>
          {/* Card 3: Actividad */}
          <div className="bg-purple-500 p-8 rounded-xl text-gray-300 flex flex-col gap-2">
            <TbPaw className="text-5xl" />
            <h4 className="text-2xl text-white">Actividad</h4>
            <span className="text-5xl text-white">
              {actividad.total !== undefined ? actividad.total : "Cargando..."}
            </span>{" "}
            <span className="text-base text-gray-100">Recordatorios</span>
            <button
              className="py-3 px-3 bg-gray-100 font-medium mt-auto text-purple-500 rounded-full"
              onClick={() => setFormType("actividad")}
            >
              Agregar
            </button>
          </div>
          {/* Card 2: Estado de la Mascota */}
          <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4">
            <h1 className="text-2xl text-center font-semibold mb-4 my-4 gap-8">
              Estado de la Mascota
            </h1>
            <div className="flex items-center gap-4 bg-gray-100 rounded-xl p-2">
              <TbHeart className="text-4xl text-red-500" />
              <div>
                <p className="text-gray-500">25%</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-100 rounded-xl p-2">
              <TbPaperBag className="text-4xl text-orange-500" />
              <div>
                <p className="text-gray-500">50%</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-100 rounded-xl p-2">
              <TbPaw className="text-4xl text-purple-500" />
              <div>
                <p className="text-gray-500">100%</p>
              </div>
            </div>
          </div>
        </section>

        <h1 className="text-2xl text-red-500  font-semibold mb-6 my-12">
          Recordatorios de Salud
        </h1>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="relative mb-4 w-full">
            <input
              type="text"
              placeholder="Buscar..."
              className="p-2 pl-10 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
            />
            <TbSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <table className="min-w-full bg-white my-4">
            <thead>
              <tr>
                <th className="py-2 px-4 font-medium border-b text-center">
                  ID
                </th>
                <th className="py-2 px-4 font-medium border-b text-center">
                  Nombre
                </th>
                <th className="py-2 px-4 font-medium border-b text-center">
                  Tipo
                </th>
                <th className="py-2 px-4 font-medium border-b text-center">
                  Lugar
                </th>
                <th className="py-2 px-4 font-medium border-b text-center">
                  Fecha
                </th>
                <th className="py-2 px-4 font-medium border-b text-center">
                  Hora
                </th>
                <th className="py-2 px-4 font-medium border-b text-center">
                  Acciones
                </th>

                <th className="py-2 px-4 font-medium border-b text-center"></th>
              </tr>
            </thead>
            <tbody>
              {salud_all.length > 0 ? (
                salud_all.map((item, index) => (
                  <tr key={item.health_id}>
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
                      <button onClick={() => setFormType2("salud")}>
                        <TbEdit className="text-green-500 text-2xl mx-4 hover:text-green-700" />
                      </button>
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
                  <td
                    colSpan={6}
                    className="px-4 py-2 text-center text-gray-500"
                  >
                    No hay registros disponibles
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <h1 className="text-2xl text-orange-500  font-semibold mb-6 my-12">
          Recordatorios de Alimento
        </h1>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="relative mb-4 w-full">
            <input
              type="text"
              placeholder="Buscar..."
              className="p-2 pl-10 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
            />
            <TbSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <table className="min-w-full bg-white my-4">
            <thead>
              <tr>
                <th className="py-2 px-4 font-medium border-b text-center">
                  ID
                </th>
                <th className="py-2 px-4 font-medium border-b text-center">
                  Nombre
                </th>
                <th className="py-2 px-4 font-medium border-b text-center">
                  Fecha
                </th>
                <th className="py-2 px-4 font-medium border-b text-center">
                  Hora
                </th>
                <th className="py-2 px-4 font-medium border-b text-center">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {alimento_all.length > 0 ? (
                alimento_all.map((item, index) => (
                  <tr key={item.food_id}>
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
                      <button onClick={() => setFormType2("alimento")}>
                        <TbEdit className="text-green-500 text-2xl mx-4 hover:text-green-700" />
                      </button>
                      <button onClick={(e) => handledeletecomida(e, item.food_id)}>
                        <TbTrash className="text-red-500 text-2xl hover:text-red-700" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-2 text-center text-gray-500"
                  >
                    No hay registros disponibles
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <h1 className="text-2xl text-purple-500  font-semibold mb-6 my-12">
          Recordatorios de Actividad
        </h1>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="relative mb-4 w-full">
            <input
              type="text"
              placeholder="Buscar..."
              className="p-2 pl-10 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
            />
            <TbSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <table className="min-w-full bg-white my-4">
            <thead>
              <tr>
                <th className="py-2 px-4 font-medium border-b text-center">
                  ID
                </th>
                <th className="py-2 px-4 font-medium border-b text-center">
                  Actividad
                </th>
                <th className="py-2 px-4 font-medium border-b text-center">
                  Lugar
                </th>
                <th className="py-2 px-4 font-medium border-b text-center">
                  Fecha
                </th>
                <th className="py-2 px-4 font-medium border-b text-center">
                  Hora
                </th>
                <th className="py-2 px-4 font-medium border-b text-center"></th>
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
                    <td className="py-2 px-4 border-b text-center justify-center gap-4">
                      <button>
                        <TbEdit
                          onClick={() => setFormType2("actividad")}
                          className="text-green-500 text-2xl mx-4 hover:text-green-700"
                        />
                      </button>
                      <button onClick={(e) => handledeleteactividad(e, item.activity_id)}>
                        <TbTrash className="text-red-500 text-2xl hover:text-red-700" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-2 text-center text-gray-500"
                  >
                    No hay registros disponibles
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Modal Overlay */}
        {formType && (
          <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="modal-container bg-white p-4 rounded-lg relative">
              {/* Botón de cerrar el modal */}
              <button
                className="absolute top-2 right-2 text-gray-500 "
                onClick={closeModal}
              >
                X
              </button>
              {renderForm()}
            </div>
          </div>
        )}

        {/* Modal Overlay */}
        {formType2 && (
          <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="modal-container bg-white p-4 rounded-lg relative">
              {/* Botón de cerrar el modal */}
              <button
                className="absolute top-2 right-2 text-gray-500 "
                onClick={closeModal2}
              >
                X
              </button>
              {renderForm2()}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Recordatorios;
