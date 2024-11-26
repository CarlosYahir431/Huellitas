import React, { useState, useEffect } from "react";
import MapaInteractivo from "../components/MapaInteractivo";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TbCirclePlus } from "react-icons/tb";
const Lugares = () => {
  const [isMapaOpen, setIsMapaOpen] = useState(false);
  const [lugares, setLugares] = useState([]);
  const [rutaLugar, setRutaLugar] = useState(null);
  const [error, setError] = useState("");
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
  
  const handleLugarSeleccionado = (lugar) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user ? user.token : null;
    if (token) {
      fetch("http://localhost:3001/places/register", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lugar),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al guardar el lugar.");
          }
          return response.json();
        })
        .then(() => {
          setLugares((prev) => [...prev, lugar]);
          setIsMapaOpen(false);
        })
        .catch((error) => setError(error.message));
    } else {
      setError("No se encontró el token de autenticación.");
    }
  };
  const handleEliminarLugar = (id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user ? user.token : null;
    if (token) {
      fetch(`http://localhost:3001/places/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al eliminar el lugar.");
          }
          return response.json();
        })
        .then(() => {
          setLugares((prev) => prev.filter((lugar) => lugar.id !== id));
        })
        .catch((error) => setError(error.message));
    } else {
      setError("No se encontró el token de autenticación.");
    }
  };
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-white p-8 h-[100vh] overflow-y-scroll">
        <Header />
        <h1 className="text-2xl text-gray-800 font-semibold mb-6 my-12">
          Mis lugares
        </h1>
        {error && <div className="text-red-500">{error}</div>}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-6">
          <button
            type="button"
            onClick={() => setIsMapaOpen(true)}
            className="flex items-center justify-center bg-green-600 font-medium text-white py-3 px-4 rounded-lg text-center hover:bg-green-700 transition duration-200 space-x-2"
          >
            <TbCirclePlus className="text-2xl" />
            <span>Agregar Lugar</span>
          </button>
        </div>
        {isMapaOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-2/3 lg:w-1/3">
              <h2 className="text-lg font-bold mb-4">
                {rutaLugar
                  ? `Ruta hacia ${rutaLugar.nombre}` 
                  : "Selecciona un lugar"}
              </h2>
              <MapaInteractivo
                origen={{
                  lat: 19.432608,
                  lng: -99.133209,
                }}
                destino={rutaLugar}
                onLugarSeleccionado={handleLugarSeleccionado}
              />
              <button
                onClick={() => {
                  setIsMapaOpen(false);
                  setRutaLugar(null);
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded-md mt-4"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
        <div className="mt-10">
          <h2 className="text-lg font-bold mb-4">Lugares Seleccionados:</h2>
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
                <div
                  className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                  style={{
                    maxWidth: "300px",
                    minHeight: "400px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
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
                  <button
                    onClick={() => handleEliminarLugar(lugar.id)}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition self-center"
                  >
                    Eliminar
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </div>
  );
};
export default Lugares;