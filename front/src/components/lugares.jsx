// Importaciones
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Imágenes
import FotoPerro1 from "../img/FotoPerro1.jpg";
import ClinicaHuellitas from "../img/Clinica Huellitas.jpg";
import ParqueHuellitas from "../img/Parque Huellitas.jpg";
import GuarderiaHuellitas from "../img/Guarderia Huellitas.jpg";
import Casa from "../img/Casa.jpg";

// Iconos
import { TbCirclePlus } from "react-icons/tb";

function Lugares() {
    return (
        <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
            <Sidebar />
            <main className="lg:col-span-3 xl:col-span-5  bg-white p-8 h-[100vh] overflow-y-scroll">
                <Header />

                <h1 className="text-2xl text-gray-800 font-semibold mb-6 my-12">Mis lugares</h1>

                {/* Botón agregar lugar */}
                <div className="mb-6 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-6" >
                    <button
                        type="submit"
                        className="flex items-center justify-center bg-green-600 font-medium text-white py-3 px-4 rounded-lg text-center hover:bg-green-700 transition duration-200 space-x-2"
                    >
                        <TbCirclePlus className="text-2xl" />
                        <span>Agregar Lugar</span>
                    </button>
                </div>



                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
          {/* Card 1: Lugar 1 */}
          <div className="bg-gray-100 p-8 rounded-xl text-gray-300 flex flex-col gap-2">
            <img
              src={ClinicaHuellitas}
              className="w-62 h-48 object-cover rounded-lg"
              alt="Perfil principal"
            />
            <span className="text-xl text-black font-semibold">
              Clinica Huellitas
            </span>
            <span className=" text-sm font-base text-morado">
              Av. Bonampack, Calle 51, Cancún, Q.Roo.
            </span>
            <a href="#" className=" text-base text-gray-500  font-semibold">
              Ver más
            </a>
          </div>

          {/* Card 2: Lugar 2 */}
          <div className="bg-gray-100 p-8 rounded-xl text-gray-300 flex flex-col gap-2">
            <img
              src={ParqueHuellitas}
              className="w-62 h-48 object-cover rounded-lg"
              alt="Perfil principal"
            />
            <span className="text-xl text-gray-800 font-semibold">
              Parque Huellitas
            </span>
            <span className=" text-sm font-base text-morado">
              Av. Bonampack, Calle 51, Cancún, Q.Roo.
            </span>
            <a href="#" className=" text-base text-gray-500  font-semibold">
              Ver más
            </a>
          </div>

          {/* Card 3: Lugar 3 */}
          <div className="bg-gray-100 p-8 rounded-xl text-gray-300 flex flex-col gap-2">
            <img
              src={GuarderiaHuellitas}
              className="w-62 h-48 object-cover rounded-lg"
              alt="Perfil principal"
            />
            <span className="text-xl text-gray-800 font-semibold">
              Guarderia Huellitas
            </span>
            <span className=" text-sm font-base text-morado">
              Av. Bonampack, Calle 51, Cancún, Q.Roo.
            </span>
            <a href="#" className=" text-base text-gray-500  font-semibold">
              Ver más
            </a>
          </div>

          {/* Card 4: Lugar 4 */}
          <div className="bg-gray-100 p-8 rounded-xl text-gray-800 flex flex-col gap-2">
            <img
              src={Casa}
              className="w-62 h-48 object-cover rounded-lg"
              alt="Perfil principal"
            />
            <span className="text-xl text-black font-semibold">Casa</span>
            <span className=" text-sm font-base text-morado">
              Av. Bonampack, Calle 51, Cancún, Q.Roo.
            </span>
            <a href="#" className=" text-base text-gray-500  font-semibold">
              Ver más
            </a>
          </div>
        </section>

        <h1 className="text-2xl text-gray-800 flex justify-center font-semibold mb-6 my-12">Todos mis lugares</h1>


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
                            <div className="bg-gray-100 p-6 rounded-xl text-gray-300 flex flex-col gap-2">
                                <img src={ClinicaHuellitas} className="w-72 h-48 object-cover rounded-lg" alt="Clinica Huellitas" />
                                <span className="text-lg text-black font-semibold mt-4">Clinica Huellitas</span>
                                <span className="text-sm font-base text-morado">Av. Bonampack, Calle 51, Cancún, Q.Roo.</span>
                                <a href="#" className="text-base text-gray-500 font-semibold mt-2">Ver más</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-gray-100 p-6 rounded-xl text-gray-300 flex flex-col gap-2">
                                <img src={ParqueHuellitas} className="w-72 h-48 object-cover rounded-lg" alt="Parque Huellitas" />
                                <span className="text-lg text-black font-semibold mt-4">Parque Huellitas</span>
                                <span className="text-sm font-base text-morado">Av. Bonampack, Calle 51, Cancún, Q.Roo.</span>
                                <a href="#" className="text-base text-gray-500 font-semibold mt-2">Ver más</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-gray-100 p-6 rounded-xl text-gray-300 flex flex-col gap-2">
                                <img src={GuarderiaHuellitas} className="w-72 h-48 object-cover rounded-lg" alt="Guarderia Huellitas" />
                                <span className="text-lg text-black font-semibold mt-4">Guarderia Huellitas</span>
                                <span className="text-sm font-base text-morado">Av. Bonampack, Calle 51, Cancún, Q.Roo.</span>
                                <a href="#" className="text-base text-gray-500 font-semibold mt-2">Ver más</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-gray-100 drop-shadow-xl p-6 rounded-xl text-gray-300 flex flex-col gap-2">
                                <img src={Casa} className="w-72 h-48 object-cover rounded-lg" alt="Casa" />
                                <span className="text-lg text-black font-semibold mt-4">Casa</span>
                                <span className="text-sm font-base text-morado">Av. Bonampack, Calle 51, Cancún, Q.Roo.</span>
                                <a href="#" className="text-base text-gray-500 font-semibold mt-2">Ver más</a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>
            </main>
        </div>
    );
}

export default Lugares;
