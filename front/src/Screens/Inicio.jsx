//Componentes
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//Imagenes
import FotoPerro1 from "../img/FotoPerro1.jpg";
import ClinicaHuellitas from "../img/Clinica Huellitas.jpg";
import ParqueHuellitas from "../img/Parque Huellitas.jpg";
import GuarderiaHuellitas from "../img/Guarderia Huellitas.jpg";
import Casa from "../img/Casa.jpg";
import React, { useEffect, useState } from "react";

// Iconos
import { TbHeart, TbPaperBag, TbPaw, TbBellRinging, TbClock } from "react-icons/tb";
import axios from "axios";

function App() {
  const [perros, setPerros] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id || "null";

  useEffect(() => {
    getPets();
    console.log(perros);
  }, []);

  async function getPets() {
    const response = await axios.post("http://localhost:3001/mascotas", {
      user_id: userId,
    });
    // Verificar si la respuesta tiene datos
    if (response.data && response.data.length > 0) {
      const mascota = response.data; // Si hay varias mascotas, toma la primera
      const datosPerro = {
        raza: mascota.breed,
        caracteristica: mascota.characteristics,
        color: mascota.color,
        name: mascota.name,
        id: mascota.pet_id,
        sex: mascota.sex,
        species: mascota.species,
      };

      // Actualiza el estado con los datos de la mascota
      setPerros(datosPerro);
    }
  }

  return (
    //Utilizar Siempre
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-white p-8 h-[100vh] overflow-y-scroll">
        <Header />

        {/* Inicio */}

        {/* Seccion Información de la Mascota */}
        <h1 className="text-2xl font-semibold mb-6 my-12">
          Información de la Mascota
        </h1>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
          {/* Card 1: Información de la mascota */}
          <div className="col-span-1 md:col-span-2 p-4 bg-slate-100 rounded-xl flex items-center gap-6">
          <div className="bg-gray-100 items-left p-8 rounded-xl flex flex-col gap-2 ">

                        <section className="mx-4  grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-8">

                            <div className="">
                                <img
                                    src={FotoPerro1}
                                    className="w-full h-full object-cover rounded-lg"
                                    alt="Perfil principal"
                                />
                            </div>
                            <div className="">


                                <h1 className="text-3xl pb-6 text-morado font-bold">Cristal</h1>
                                <p className="text-base font-semibold text-gray-700">Edad:
                                    <span className="text-base font-normal text-gray-500"> 5 años</span>
                                </p>
                                <p className="text-base font-semibold text-gray-700">Sexo:
                                    <span className="text-base font-normal text-gray-500"> Femenino</span>
                                </p>
                                <p className="text-base font-semibold text-gray-700">Especie:
                                    <span className="text-base font-normal text-gray-500"> Perro</span>
                                </p>
                                <p className="text-base font-semibold text-gray-700">Raza:
                                    <span className="text-base font-normal text-gray-500"> Golden Retriver</span>
                                </p>
                                <p className="text-base font-semibold text-gray-700">Color:
                                    <span className="text-base font-normal text-gray-500"> Beige</span>
                                </p>
                                <p className="text-base font-semibold text-gray-700">Caracteristicas:
                                    <span className="text-base font-normal text-gray-500"> Tiene una mancha en la patita izquierda trasera</span>
                                </p>
                            </div>
                        </section>


                    </div>


          </div>

          {/* Card 2: Estado de la Mascota */}
          <div className="p-4 bg-slate-100 rounded-xl flex flex-col justify-between gap-4">
            <h1 className="text-2xl text-gray-800 text-center font-semibold mb-4 my-4 gap-8">
              Estado de la Mascota
            </h1>

            <div className="flex items-center gap-4 bg-slate-200 rounded-xl p-4">
              <TbHeart className="text-4xl text-red-500" />
              <div>
                <h3 className="font-bold text-gray-700">Salud</h3>
                <div class="bg-red-500 h-4 rounded-full w-16"></div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-200 rounded-xl p-4">
              <TbPaperBag className="text-4xl text-orange-500" />
              <div>
                <h3 className="font-bold text-gray-700">Alimento</h3>
                <div class="bg-orange-500 h-4 rounded-full w-32"></div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-200 rounded-xl p-4">
              <TbPaw className="text-4xl text-purple-500" />
              <div>
                <h3 className="font-bold text-gray-700">Actividad</h3>
                <div class="bg-purple-500 h-4 rounded-full w-64"></div>
              </div>
            </div>
          </div>

          {/* Card 3: Notificaciones */}
          <div className="p-4 bg-slate-100 rounded-xl flex flex-col justify-center gap-2">
            <h1 className="text-2xl text-center text-gray-800 font-semibold  my-2 ">
              Eventos de Hoy
            </h1>
            <p className="text-gray-500 text-center text-sm">07.Noviembre.24</p>

            <div className="flex items-center gap-4 bg-slate-200 rounded-xl p-4 mb-1">
              <TbBellRinging className="text-3xl text-center text-morado" />
              <div className="flex justify-between items-center w-full">
                <div>
                  <h3 className="font-bold text-gray-700 text-sm">Ir a Vacunar</h3>
                  <p className="text-gray-500 font-medium text-sm">
                    <span>Clínica Huellitas</span>
                  </p>
                  
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <TbClock />
                  <span className="ml-1 text-xs">12:30 hrs</span>
                </div>
              </div>
            </div>


            <div className="flex items-center gap-4 bg-slate-200 rounded-xl p-4 mb-1">
              <TbBellRinging className="text-3xl text-center text-morado" />
              <div className="flex justify-between items-center w-full">
                <div>
                  <h3 className="font-bold text-gray-700 text-sm">Ir a Vacunar</h3>
                  <p className="text-gray-500 font-medium text-sm">
                    <span>Clínica Huellitas</span>
                  </p>
                  
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <TbClock />
                  <span className="ml-1 text-xs">12:30 hrs</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-200 rounded-xl p-4 mb-1">
              <TbBellRinging className="text-3xl text-center text-morado" />
              <div className="flex justify-between items-center w-full">
                <div>
                  <h3 className="font-bold text-gray-700 text-sm">Ir a Vacunar</h3>
                  <p className="text-gray-500 font-medium text-sm">
                    <span>Clínica Huellitas</span>
                  </p>
                  
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <TbClock />
                  <span className="ml-1 text-xs">12:30 hrs</span>
                </div>
              </div>
            </div>
  

          </div>
        </section>

        {/* Seccion Mis Lugares */}

        <h1 className="text-2xl font-semibold mb-6 my-12">Mis Lugares</h1>

        {/* Carrusel de cards */}
        <section className="mt-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
          >
            <SwiperSlide>
              <div className="bg-slate-100 p-6 rounded-xl text-gray-300 flex flex-col gap-2">
                <img src={ClinicaHuellitas} className="w-72 h-48 object-cover rounded-lg" alt="Clinica Huellitas" />
                <span className="text-lg text-black font-semibold mt-4">Clinica Huellitas</span>
                <span className="text-sm font-base text-morado">Av. Bonampack, Calle 51, Cancún, Q.Roo.</span>
                <a href="#" className="text-base text-gray-500 font-semibold mt-2">Ver más</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-slate-100 p-6 rounded-xl text-gray-300 flex flex-col gap-2">
                <img src={ParqueHuellitas} className="w-72 h-48 object-cover rounded-lg" alt="Parque Huellitas" />
                <span className="text-lg text-black font-semibold mt-4">Parque Huellitas</span>
                <span className="text-sm font-base text-morado">Av. Bonampack, Calle 51, Cancún, Q.Roo.</span>
                <a href="#" className="text-base text-gray-500 font-semibold mt-2">Ver más</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-slate-100 p-6 rounded-xl text-gray-300 flex flex-col gap-2">
                <img src={GuarderiaHuellitas} className="w-72 h-48 object-cover rounded-lg" alt="Guarderia Huellitas" />
                <span className="text-lg text-black font-semibold mt-4">Guarderia Huellitas</span>
                <span className="text-sm font-base text-morado">Av. Bonampack, Calle 51, Cancún, Q.Roo.</span>
                <a href="#" className="text-base text-gray-500 font-semibold mt-2">Ver más</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-slate-100 drop-shadow-xl p-6 rounded-xl text-gray-300 flex flex-col gap-2">
                <img src={Casa} className="w-72 h-48 object-cover rounded-lg" alt="Casa" />
                <span className="text-lg text-black font-semibold mt-4">Casa</span>
                <span className="text-sm font-base text-morado">Av. Bonampack, Calle 51, Cancún, Q.Roo.</span>
                <a href="#" className="text-base text-gray-500 font-semibold mt-2">Ver más</a>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>



        <h1 className="text-2xl text-gray-800 font-semibold mb-6 my-12">Mis Documentos</h1>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-6">
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