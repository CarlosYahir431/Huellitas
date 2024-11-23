import { Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import FotoPerro1 from "../img/FotoPerro1.jpg";
import ClinicaHuellitas from "../img/Clinica Huellitas.jpg";
import ParqueHuellitas from "../img/Parque Huellitas.jpg";
import GuarderiaHuellitas from "../img/Guarderia Huellitas.jpg";
import Casa from "../img/Casa.jpg";
import {
    TbEye, TbTrash, TbEdit, TbSearch, TbChevronLeft, TbChevronRight, TbCirclePlus
} from "react-icons/tb";

function Documentos() {
    return (
        <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
            <Sidebar />
            <main className="lg:col-span-3 xl:col-span-5  bg-white p-8 h-[100vh] overflow-y-scroll">
                <Header />

                <h1 className="text-2xl text-gray-800 font-semibold mb-6 my-12">Mis Documentos</h1>

                {/* Botón agregar lugar */}
                <div className="mb-6 grid grid-cols-2 md:grid-cols-1 xl:grid-cols-6" >
                    <button
                        type="submit"
                        className="flex items-center justify-center bg-green-600 font-medium text-white py-3 px-4 rounded-lg text-center hover:bg-green-700 transition duration-200 space-x-2"
                    >
                        <TbCirclePlus className="text-2xl" />
                        <span>Agregar Documento</span>
                    </button>
                </div>



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


        <h1 className="text-2xl text-gray-800 font-semibold mb-6 my-12">Expedientes</h1>

{/* Botón agregar lugar */}
<div className="mb-6 grid grid-cols-2 md:grid-cols-1 xl:grid-cols-6" >
    <button
        type="submit"
        className="flex items-center justify-center bg-green-600 font-medium text-white py-3 px-4 rounded-lg text-center hover:bg-green-700 transition duration-200 space-x-2"
    >
        <TbCirclePlus className="text-2xl" />
        <span>Agregar Expediente</span>
    </button>
</div>

                <div className="bg-gray-200 p-4 rounded-xl">
                    <div className="relative mb-4 w-full">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="p-2 pl-10 bg-gray-300 border text-gray-700 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                        <TbSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>

                    {/* Vista en escritorio */}
                    <table className="hidden md:table w-full text-sm my-4">
                        <thead>
                            <tr className="text-gray-700">
                                <th className="py-2 px-2 font-medium border-b text-center">Número</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Nombre</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Lugar</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Ultima Revisión</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Hora</th>
                                <th className="py-2 px-2 font-medium border-b text-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-gray-500">
                                <td className="py-2 px-2 border-b text-center">1</td>
                                <td className="py-2 px-2 border-b text-center">Tratamiento Especial</td>
                                <td className="py-2 px-2 border-b text-center">Clínica Huellitas</td>
                                <td className="py-2 px-2 border-b text-center">11-11-2024</td>
                                <td className="py-2 px-2 border-b text-center">12:07 P.m.</td>
                                <td className="py-2 px-2 border-b text-center space-x-4">
                                    <button>
                                        <TbEdit className="text-green-500 text-2xl hover:text-green-700" />
                                    </button>
                                    <button>
                                        <TbTrash className="text-red-500 text-2xl hover:text-red-700" />
                                    </button>
                                    <button>
                                        <TbEye className="text-morado text-2xl hover:text-indigo-700" />
                                    </button>
                                </td>
                                
                            </tr>
                            
                        </tbody>
                    </table>

                    {/* Vista en tarjetas para móviles */}


                    <div className="md:hidden space-y-4">

                        <div className="bg-gray-300 p-4 rounded-lg">
                            <p className="font-medium text-gray-700">Número:<span className="text-gray-500"> 1</span></p>
                            <p className="font-medium text-gray-700">Nombre:<span className="text-gray-500"> Tratamiento Especial</span></p>
                            <p className="font-medium text-gray-700">Lugar:<span className="text-gray-500"> Clinica Huellitas</span></p>
                            <p className="font-medium text-gray-700">Ultima Revisión:<span className="text-gray-500"> 01-01-24</span></p>
                            <p className="font-medium text-gray-700">Hora:<span className="text-gray-500"> 12:12 P.m.</span></p>


                            <div className="flex justify-end gap-2 mt-2">
                                <button>
                                    <TbEdit className="text-green-500 text-2xl hover:text-green-700" />
                                </button>
                                <button>
                                    <TbTrash className="text-red-500 text-2xl hover:text-red-700" />
                                </button>
                                <button>
                                    <TbEye className="text-morado text-2xl hover:text-indigo-700" />
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-end my-2 gap-2 mt-2">
                            <h1 className="font-medium text-gray-700 mx-2">Ver más registros</h1>
                            <button className="bg-gray-400  py-1 px-1 rounded-lg ">
                                <TbChevronLeft />
                            </button>
                            <button className="bg-gray-400 py-1 px-1 rounded-lg ">
                                <TbChevronRight />
                            </button>
                        </div>
                    </div>
                </div>

        
               
            </main>
        </div>
    );
}

export default Documentos;
