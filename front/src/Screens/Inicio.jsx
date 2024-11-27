import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import React, { useEffect, useState } from "react";
import { TbHeart, TbPaperBag, TbPaw, TbBellRinging, TbClock } from "react-icons/tb";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function App() {
  const [perros, setPerros] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  const petId = localStorage.getItem("pet"); // No es necesario JSON.parse aquí
  const userId = user?.id || "null";
  const Id = userId;
  const [error, setError] = useState("");

  const [comida, setComida] = useState({});

  const [salud, setSalud] = useState({});

  const [actividad, setActividad] = useState({});
  const [lugares, setLugares] = useState([]);

  useEffect(() => {
    getPets();
    getSalud();
    getActividad();
    getComida();
  }, []);

  async function getSalud() {
    axios
      .get(`http://localhost:3001/salud/contar/${Id}`)
      .then((response) => {
        const saludData = response.data; // Aquí response.data es un objeto, no un array
        setSalud(saludData); // Actualiza el estado con el objeto recibido
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
      });
  }

  async function getActividad() {
    axios
      .get(`http://localhost:3001/actividad/contar/${Id}`)
      .then((response) => {
        const actividadData = response.data;
        setActividad(actividadData);
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
      });
  }
  async function getComida() {
    axios
      .get(`http://localhost:3001/comida/contar/${Id}`)
      .then((response) => {
        const comidaData = response.data;
        setComida(comidaData);
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
      });
  }
  async function getPets() {
    try {
      const response = await axios.post("http://localhost:3001/mascotas", {
        user_id: userId,
      });

      if (response.data && petId) {
        // Busca la mascota seleccionada por su ID
        const currentPet = response.data.find(
          (mascota) => mascota.pet_id.toString() === petId
        );

        if (currentPet) {
          const datosPerro = {
            raza: currentPet.breed,
            caracteristica: currentPet.characteristics,
            color: currentPet.color,
            name: currentPet.name,
            id: currentPet.pet_id,
            sex: currentPet.sex,
            species: currentPet.species,
            img: currentPet.image_url,
          };

          setPerros(datosPerro); // Actualiza el estado con los datos de la mascota seleccionada
        }
      }
    } catch (error) {
      console.error("Error al obtener las mascotas:", error);
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user ? user.token : null;
    if (token) {
      fetch("http://localhost:3001/places", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al obtener los lugares.");
          }
          return response.json();
        })
        .then((data) => setLugares(data))
        .catch((error) => setError(error.message));
    } else {
      setError("No se encontró el token de autenticación.");
    }
  }, []);

  return (
    //Utilizar Siempre
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-white p-8 h-[100vh] overflow-y-scroll">
        <Header />

        {/* Inicio */}

        {/* Seccion Información de la Mascota */}
        <h1 className="text-2xl font-semibold mb-8 my-12">
          Información de la Mascota
        </h1>

        <section className="grid grid-cols-3 md:grid-cols-3 xl:grid-cols-4 mt-10 gap-8 ">
          {/* Card 1: Información de la mascota */}
          <div className="col-span-1 md:col-span-2 p-4 bg-gray-100 rounded-xl flex items-center gap-6">
            {/* Imagen de la mascota */}
            <img
              src={perros.img}
              className="w-56 h-80 mx-6 object-cover rounded-lg"
            />

            {/* Información de la mascota */}
            <div className="flex flex-col">
              <h1 className="text-3xl text-morado font-bold">{perros.name}</h1>
              <div className="flex-col gap-2 my-8 p-2">
                <p className="text-lg text-gray-500">
                  Sexo: {perros.sex == "M" ? "Macho" : "Hembra"}
                </p>
                <p className="text-lg text-gray-500">
                  Especie: {perros.species}
                </p>
                <p className="text-lg text-gray-500">Color: {perros.color}</p>
                <p className="text-lg text-gray-500">
                  Caracteristicas: {perros.caracteristica}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Estado de la Mascota */}
          <div className="p-4 bg-gray-100 rounded-xl flex flex-col justify-between gap-4">
            <h1 className="text-2xl text-center font-semibold mb-4 my-4 gap-8">
              Recordatorios
            </h1>

            <div className="flex items-center gap-4 bg-gray-200 rounded-xl p-4">
              <TbHeart className="text-4xl text-red-500" />
              <div>
                <h3 className="font-semibold">Salud</h3>
                <p className="text-gray-500">
                  {" "}
                  {salud.total !== undefined ? salud.total : "Cargando..."}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-200 rounded-xl p-4">
              <TbPaperBag className="text-4xl text-orange-500" />
              <div>
                <h3 className="font-semibold">Alimento</h3>
                <p className="text-gray-500">
                  {" "}
                  {comida.total !== undefined ? comida.total : "Cargando..."}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-200 rounded-xl p-4">
              <TbPaw className="text-4xl text-purple-500" />
              <div>
                <h3 className="font-semibold">Actividad</h3>
                <p className="text-gray-500">
                  {" "}
                  {actividad.total !== undefined
                    ? actividad.total
                    : "Cargando..."}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Notificaciones */}
          <div className="p-4 bg-slate-100 rounded-xl flex flex-col justify-center gap-2">
            <h1 className="text-2xl text-center text-gray-800 font-semibold  my-2 mb-8 ">
              Eventos de Hoy
            </h1>

            <div className="flex items-center gap-4 bg-slate-200 rounded-xl p-4 mb-1">
              <TbBellRinging className="text-3xl text-center text-morado" />
              <div className="flex justify-between items-center w-full">
                <div>
                  <h3 className="font-bold text-gray-700 text-sm">Vacuna</h3>
                  <p className="text-gray-500 font-medium text-sm">
                    <span>Veterinaria Piccolo Cane</span>
                  </p>
                  
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <TbClock />
                  <span className="ml-1 text-xs">21:30 hrs</span>
                </div>
              </div>
            </div>


            <div className="flex items-center gap-4 bg-slate-200 rounded-xl p-4 mb-1">
              <TbBellRinging className="text-3xl text-center text-morado" />
              <div className="flex justify-between items-center w-full">
                <div>
                  <h3 className="font-bold text-gray-700 text-sm">Dar Alimento</h3>
                  <p className="text-gray-500 font-medium text-sm">
                    <span></span>
                  </p>
                  
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <TbClock />
                  <span className="ml-1 text-xs">12:00 hrs</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-200 rounded-xl p-4 mb-1">
              <TbBellRinging className="text-3xl text-center text-morado" />
              <div className="flex justify-between items-center w-full">
                <div>
                  <h3 className="font-bold text-gray-700 text-sm">Dar un Paseo</h3>
                  <p className="text-gray-500 font-medium text-sm">
                    <span>CHICO PARK</span>
                  </p>
                  
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <TbClock />
                  <span className="ml-1 text-xs">19:00 hrs</span>
                </div>
              </div>
            </div>
  

          </div>
        </section>

        {/* Seccion Mis Lugares */}

        <h1 className="text-2xl font-semibold mb-6 my-12">Mis Lugares</h1>

        <div className="mt-10">
          <Swiper
            slidesPerView={5}
            spaceBetween={8}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            onSwiper={(swiper) => {
              swiper.el.addEventListener("mouseenter", () =>
                swiper.autoplay.stop()
              );
              swiper.el.addEventListener("mouseleave", () =>
                swiper.autoplay.start()
              );
            }}
          >
            {lugares.map((lugar, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="bg-gray-100 p-8 rounded-xl text-gray-300 flex flex-col gap-6 mx-2 transform hover:scale-90 transition-transform duration-300 cursor-pointer">
                  <div>
                    <img
                      src={lugar.image || "https://via.placeholder.com/300"}
                      alt={lugar.name}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {lugar.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        {lugar.address || "Dirección no disponible"}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Seccion Documentos */}
        <h1 className="text-2xl font-semibold mb-8 my-12">
          Documentos Importantes
        </h1>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8 drop-shadow-lg">
          {/* Card 1: Documentos */}
          <div className="bg-morado p-4 rounded-xl text-gray-100 flex flex-col gap-6">
            <a href="#" className="text-base font-medium text-center">
              Certificado de Vacunación
            </a>
          </div>

          {/* Card 2: Documentos */}
          <div className="bg-morado p-4 rounded-xl text-gray-100 flex flex-col gap-6">
            <a href="#" className="text-base font-medium text-center">
              Pasaporte
            </a>
          </div>

          {/* Card 3: Documentos */}
          <div className="bg-morado p-4 rounded-xl text-gray-100 flex flex-col gap-6">
            <a href="#" className="text-base font-medium text-center">
              Identificación
            </a>
          </div>

          {/* Card 4: Documentos */}
          <div className="bg-morado p-4 rounded-xl text-gray-100 flex flex-col gap-6">
            <a href="#" className="text-base font-medium text-center">
              Certificado de Salud
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
export default App;
