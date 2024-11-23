import { useState } from "react";
import { Link } from "react-router-dom";

// Componentes
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

// Iconos
import {
    TbHeart, TbPaperBag, TbPaw, TbTrash, TbEdit, TbSearch, TbChevronLeft, TbChevronRight
} from "react-icons/tb";

function Recordatorios() {

    return (
        <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
            <Sidebar />
            <main className="lg:col-span-3 xl:col-span-5  bg-white p-8 h-[100vh] overflow-y-scroll">
                <Header />

                {/* Título de Agregar Recordatorio */}
                <h1 className="text-2xl text-gray-900 font-semibold mb-8 my-12">Agregar Recordatorio</h1>

                {/* Sección de las tarjetas */}
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">

                    {/* Card 1: Salud */}
                    <div className="bg-red-500 p-8 rounded-xl text-gray-300 flex flex-col gap-2">
                        <TbHeart className="text-5xl" />
                        <h4 className="text-3xl text-white">Salud</h4>
                        <span className="text-5xl text-white">5</span>
                        <span className="text-base text-gray-100">Recordatorios</span>
                        <button className="py-3 px-3 bg-gray-100 font-medium mt-auto text-red-500 rounded-full">
                            Agregar
                        </button>
                    </div>

                    {/* Card 2: Alimento */}
                    <div className="bg-orange-500 p-8 rounded-xl text-gray-300 flex flex-col gap-2">
                        <TbPaperBag className="text-5xl " />
                        <h4 className="text-2xl text-white">Alimento</h4>
                        <span className="text-5xl text-white">5</span>
                        <span className="text-base text-gray-100">Recordatorios</span>
                        <button className="py-3 px-3 bg-gray-100 font-medium mt-auto text-orange-500 rounded-full">
                            Agregar
                        </button>
                    </div>

                    {/* Card 3: Actividad */}
                    <div className="bg-purple-500 p-8 rounded-xl text-gray-300 flex flex-col gap-2">
                        <TbPaw className="text-5xl" />
                        <h4 className="text-2xl text-white">Actividad</h4>
                        <span className="text-5xl text-white">5</span>
                        <span className="text-base text-gray-100">Recordatorios</span>
                        <button className="py-3 px-3 bg-gray-100 font-medium mt-auto text-purple-500 rounded-full">
                            Agregar
                        </button>
                    </div>

                    {/* Card 4: Estado de la Mascota */}
                    <div className="p-4 bg-gray-100 rounded-xl flex flex-col justify-between gap-4">
                        <h1 className="text-2xl text-gray-900 text-center font-semibold mb-4 my-4 gap-8">Estado de la Mascota</h1>
                        <div className="flex items-center gap-4 bg-gray-200 rounded-xl p-2">
                            <TbHeart className="text-4xl text-red-500" />
                            <div>
                                <p className="text-gray-500">25%</p>
                            </div>
                            {/* Grafica simulada */}
                            <div class="bg-red-500 h-4 rounded-full w-12"></div>
                        </div>
                        <div className="flex items-center gap-4 bg-gray-200 rounded-xl p-2">
                            <TbPaperBag className="text-4xl text-orange-500" />
                            <div>
                                <p className="text-gray-500">50%</p>
                            </div>
                            {/* Grafica simulada */}
                            <div class="bg-orange-500 h-4 rounded-full w-24"></div>
                        </div>
                        <div className="flex items-center gap-4 bg-gray-200 rounded-xl p-2">
                            <TbPaw className="text-4xl text-purple-500" />
                            <div>
                                <p className="text-gray-500">100%</p>
                            </div>
                            {/* Grafica simulada */}
                            <div class="bg-purple-500 h-4 rounded-full w-48"></div>
                        </div>
                    </div>
                </section>

                {/* Tablas */}


                <h1 className="text-2xl text-red-500 font-semibold mb-6 my-12">Recordatorios de Salud</h1>

                <h1 className="text-xl text-gray-700 font-semibold mb-6 my-6">Medicamentos</h1>

                <div className="bg-gray-200 p-4 mb-4 rounded-xl">
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
                                <th className="py-2 px-2 font-medium border-b text-center">Cantidad</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Frecuencia</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Hora</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Estado</th>
                                <th className="py-2 px-2 font-medium border-b text-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-gray-500">
                                <td className="py-2 px-2 border-b text-center">1</td>
                                <td className="py-2 px-2 border-b text-center">Jarabe</td>
                                <td className="py-2 px-2 border-b text-center">1 Cucharada</td>
                                <td className="py-2 px-2 border-b text-center">Martes</td>
                                <td className="py-2 px-2 border-b text-center">12:07 P.m.</td>
                                <td className="py-2 px-2 border-b text-center">Pendiente</td>
                                <td className="py-2 px-2 border-b text-center space-x-4">
                                    <button>
                                        <TbEdit className="text-green-500 text-2xl hover:text-green-700" />
                                    </button>
                                    <button>
                                        <TbTrash className="text-red-500 text-2xl hover:text-red-700" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Vista en tarjetas para móviles */}


                    <div className="md:hidden space-y-4">

                        <div className="bg-gray-300 p-4 rounded-lg">
                            <p className="font-medium text-gray-700">Número:<span className="text-gray-500"> 1</span></p>
                            <p className="font-medium text-gray-700">Nombre:<span className="text-gray-500"> Jarabe</span></p>
                            <p className="font-medium text-gray-700">Cantidad:<span className="text-gray-500"> 1 Cucharada</span></p>
                            <p className="font-medium text-gray-700">Frecuencia:<span className="text-gray-500"> Martes</span></p>
                            <p className="font-medium text-gray-700">Hora:<span className="text-gray-500"> 12:12 P.m.</span></p>
                            <p className="font-medium text-gray-700">Estado:<span className="text-gray-500"> Pendiente</span></p>


                            <div className="flex justify-end gap-2 mt-2">
                                <button>
                                    <TbEdit className="text-green-500 text-2xl hover:text-green-700" />
                                </button>
                                <button>
                                    <TbTrash className="text-red-500 text-2xl hover:text-red-700" />
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

                <h1 className="text-xl text-gray-700 font-semibold mb-6 my-6">Tratamientos</h1>


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
                                <th className="py-2 px-2 font-medium border-b text-center">Tipo</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Nombre</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Lugar</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Fecha</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Hora</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Estado</th>
                                <th className="py-2 px-2 font-medium border-b text-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-gray-500">
                                <td className="py-2 px-2 border-b text-center">1</td>
                                <td className="py-2 px-2 border-b text-center">Vacuna</td>
                                <td className="py-2 px-2 border-b text-center">Parvovirus</td>
                                <td className="py-2 px-2 border-b text-center">Clínica Huellitas</td>
                                <td className="py-2 px-2 border-b text-center">11-11-2024</td>
                                <td className="py-2 px-2 border-b text-center">12:07 P.m.</td>
                                <td className="py-2 px-2 border-b text-center">Pendiente</td>

                                <td className="py-2 px-2 border-b text-center space-x-4">
                                    <button>
                                        <TbEdit className="text-green-500 text-2xl hover:text-green-700" />
                                    </button>
                                    <button>
                                        <TbTrash className="text-red-500 text-2xl hover:text-red-700" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Vista en tarjetas para móviles */}


                    <div className="md:hidden space-y-4">

                        <div className="bg-gray-300 p-4 rounded-lg">
                            <p className="font-medium text-gray-700">Número:<span className="text-gray-500"> 1</span></p>
                            <p className="font-medium text-gray-700">Tipo:<span className="text-gray-500"> Vacuna</span></p>
                            <p className="font-medium text-gray-700">Nombre:<span className="text-gray-500"> Parvovirus</span></p>
                            <p className="font-medium text-gray-700">Lugar:<span className="text-gray-500"> Clinica Huellitas</span></p>
                            <p className="font-medium text-gray-700">Fecha:<span className="text-gray-500"> 01-01-24</span></p>
                            <p className="font-medium text-gray-700">Hora:<span className="text-gray-500"> 12:12 P.m.</span></p>
                            <p className="font-medium text-gray-700">Estado:<span className="text-gray-500"> Pendiente</span></p>

                            <div className="flex justify-end gap-2 mt-2">
                                <button>
                                    <TbEdit className="text-green-500 text-2xl hover:text-green-700" />
                                </button>
                                <button>
                                    <TbTrash className="text-red-500 text-2xl hover:text-red-700" />
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

                <h1 className="text-2xl text-orange-500 font-semibold mb-6 my-12">Recordatorios de Alimento</h1>
                <div className="bg-gray-200 p-4 rounded-xl">
                    <div className="relative mb-4 w-full">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="p-2 pl-10 bg-gray-300 border text-gray-700 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                        <TbSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>

                    {/* Tabla en escritorio */}
                    <table className="hidden md:table w-full text-sm my-4">
                        <thead>
                            <tr className="text-gray-700">
                                <th className="py-2 px-2 font-medium border-b text-center">Número</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Alimento</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Cantidad</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Frecuencia</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Hora</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Estado</th>
                                <th className="py-2 px-2 font-medium border-b text-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-gray-500">
                                <td className="py-2 px-2 border-b text-center">1</td>
                                <td className="py-2 px-2 border-b text-center">Croquetas</td>
                                <td className="py-2 px-2 border-b text-center">100g</td>
                                <td className="py-2 px-2 border-b text-center">Lunes</td>
                                <td className="py-2 px-2 border-b text-center">12:07 P.m.</td>
                                <td className="py-2 px-2 border-b text-center">Pendiente</td>
                                <td className="py-2 px-2 border-b text-center space-x-4">
                                    <button>
                                        <TbEdit className="text-green-500 text-2xl hover:text-green-700" />
                                    </button>
                                    <button>
                                        <TbTrash className="text-red-500 text-2xl hover:text-red-700" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Vista en tarjetas para móviles */}
                    <div className="md:hidden space-y-4">
                        <div className="bg-gray-300 p-4 rounded-lg">
                            <p className="font-medium text-gray-700">Número:<span className="text-gray-500"> 1</span></p>
                            <p className="font-medium text-gray-700">Nombre:<span className="text-gray-500">Croquetas</span></p>
                            <p className="font-medium text-gray-700">Cantidad:<span className="text-gray-500"> 100g</span></p>
                            <p className="font-medium text-gray-700">Hora:<span className="text-gray-500"> 12:12 P.m.</span></p>
                            <p className="font-medium text-gray-700">Estado:<span className="text-gray-500"> Pendiente</span></p>


                            <div className="flex justify-end gap-2 mt-2">
                                <button>
                                    <TbEdit className="text-green-500 text-2xl hover:text-green-700" />
                                </button>
                                <button>
                                    <TbTrash className="text-red-500 text-2xl hover:text-red-700" />
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


                <h1 className="text-2xl text-purple-500 font-semibold mb-6 my-12">Recordatorios de Actividad</h1>
                <div className="bg-gray-200 p-4 rounded-xl">
                    <div className="relative mb-4 w-full">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="p-2 pl-10 bg-gray-300 border text-gray-700 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                        <TbSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>

                    {/* Tabla en escritorio */}
                    <table className="hidden md:table w-full text-sm my-4">
                        <thead>
                            <tr className="text-gray-700">
                                <th className="py-2 px-2 font-medium border-b text-center">Número</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Actividad</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Lugar</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Frecuencia</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Hora</th>
                                <th className="py-2 px-2 font-medium border-b text-center">Estado</th>
                                <th className="py-2 px-2 font-medium border-b text-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-gray-500">
                                <td className="py-2 px-2 border-b text-center">1</td>
                                <td className="py-2 px-2 border-b text-center">Dar un Paseo</td>
                                <td className="py-2 px-2 border-b text-center">Parque Huellitas</td>
                                <td className="py-2 px-2 border-b text-center">Lunes y Miercoles</td>
                                <td className="py-2 px-2 border-b text-center">12:07 P.m.</td>
                                <td className="py-2 px-2 border-b text-center">Pendiente</td>

                                <td className="py-2 px-2 border-b text-center space-x-4">
                                    <button>
                                        <TbEdit className="text-green-500 text-2xl  hover:text-green-700" />
                                    </button>
                                    <button>
                                        <TbTrash className="text-red-500 text-2xl  hover:text-red-700" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Vista en tarjetas para móviles */}
                    <div className="md:hidden space-y-4">
                        <div className="bg-gray-300 p-4 rounded-lg">
                            <p className="font-medium text-gray-700">Número:<span className="text-gray-500"> 1</span></p>
                            <p className="font-medium text-gray-700">Nombre:<span className="text-gray-500"> Dar un Paseo</span></p>
                            <p className="font-medium text-gray-700">Lugar:<span className="text-gray-500"> Parque Huellitas</span></p>
                            <p className="font-medium text-gray-700">Frecuencia:<span className="text-gray-500"> Lunes y Miercoles</span></p>
                            <p className="font-medium text-gray-700">Hora:<span className="text-gray-500"> 12:12 P.m.</span></p>
                            <p className="font-medium text-gray-700">Estado:<span className="text-gray-500"> Pendiente</span></p>



                            <div className="flex justify-end gap-2 mt-2">
                                <button>
                                    <TbEdit className="text-green-500 text-2xl hover:text-green-700" />
                                </button>
                                <button>
                                    <TbTrash className="text-red-500 text-2xl hover:text-red-700" />
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

export default Recordatorios;
