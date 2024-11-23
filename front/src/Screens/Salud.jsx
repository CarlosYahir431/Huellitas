import { useState } from "react";
import { Link } from "react-router-dom";

// Componentes
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

// Iconos
import {
    TbTrash, TbEdit, TbSearch, TbChevronLeft, TbChevronRight, TbClockExclamation, TbCheckbox, TbClock, TbPill
} from "react-icons/tb";

function Salud() {

    return (
        <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
            <Sidebar />
            <main className="lg:col-span-3 xl:col-span-5  bg-white p-8 h-[100vh] overflow-y-scroll">
                <Header />

                {/* Título de Agregar Recordatorio */}

                <div className="text-4xl mb-8 my-12 flex items-center text-red-500  text-sm">
                    <span className="ml-2 text-4xl text-red-500 font-semibold">Salud</span>
                </div>



                {/* Sección de las tarjetas */}
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">

                    {/* Card 1: Salud */}
                    <div className="col-span-1 md:col-span-2 xl:col-span-3 bg-gray-100 p-8 rounded-xl flex flex-col gap-4">
    <h4 className="text-xl font-semibold text-center my-1 text-gray-800">Seguimiento de Medicamentos</h4>
    <div className="overflow-x-auto md:overflow-hidden rounded-xl">
        {/* Diseño para escritorio */}
        <table className="hidden md:table w-full border border-gray-300 text-center text-white">
            <thead className="bg-red-500">
                <tr>
                    <th className="px-4 py-2">Nombre</th>
                    <th className="px-4 py-2">Información</th>
                    <th className="px-4 py-2">Lunes</th>
                    <th className="px-4 py-2">Martes</th>
                    <th className="px-4 py-2">Miércoles</th>
                    <th className="px-4 py-2">Jueves</th>
                    <th className="px-4 py-2">Viernes</th>
                    <th className="px-4 py-2">Sábado</th>
                    <th className="px-4 py-2">Domingo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="px-4 py-2 text-gray-600 font-medium">Jarabe</td>
                    <td className="px-4 py-2 text-gray-600 font-medium">
                        <div className="flex items-center justify-center text-gray-500 text-sm">
                            <TbPill />
                            <span className="ml-1 text-xs">1 Cucharada</span>
                        </div>
                        <div className="flex items-center justify-center text-gray-500 text-sm">
                            <TbClock />
                            <span className="ml-1 text-xs">12:30 hrs</span>
                        </div>
                    </td>
                    {Array.from({ length: 7 }).map((_, i) => (
                        <td key={i} className="px-4 py-2">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-morado" />
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>

        {/* Diseño para móviles */}
        <div className="block md:hidden">
            {["Jarabe", "Pastilla"].map((medicamento, index) => (
                <div key={index} className="mb-4 border border-gray-300 rounded-lg p-4">
                    <h5 className="text-lg font-semibold text-gray-800">{medicamento}</h5>
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center text-gray-500 text-sm">
                            <TbPill />
                            <span className="ml-1 text-xs">{medicamento === "Jarabe" ? "1 Cucharada" : "2"}</span>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                            <TbClock />
                            <span className="ml-1 text-xs">12:30 hrs</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 mt-4">
                        {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map((dia, i) => (
                            <label key={i} className="flex items-center justify-between">
                                <span className="text-gray-600">{dia}</span>
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-morado" />
                            </label>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>




                    {/* Card 4: Estado de la Mascota */}
                    <div className="p-4 bg-red-500 rounded-xl flex flex-col justify-between gap-4">
                        <h1 className="text-2xl text-white  text-center font-semibold mb-4 my-4 gap-8">Recordatorios</h1>
                        <div className="flex items-center gap-4 bg-gray-100 rounded-xl p-2">
                            <TbClockExclamation className="text-4xl text-red-500" />
                            <div>
                                <p className="text-gray-700 font-medium">Pendientes:<span className="font-normal text-gray-500"> 2</span></p>
                            </div>
                            {/* Grafica simulada */}
                        </div>
                        <div className="flex items-center gap-4 bg-gray-100 rounded-xl p-2">
                            <TbCheckbox className="text-4xl text-red-500" />
                            <div>
                                <p className="text-gray-700 font-medium">Finalizados:<span className="font-normal text-gray-500"> 2</span></p>
                            </div>
                            {/* Grafica simulada */}
                        </div>
                    </div>
                </section>

                {/* Tablas */}




                <div className="bg-gray-100 p-4 rounded-xl my-6">
                    <h1 className="text-xl text-gray-800 text-center font-semibold xl:mb-12 my-6 mx-6">Seguimiento de Tratamientos</h1>

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
                                <td className="py-2 px-2 text-center">1</td>
                                <td className="py-2 px-2 text-center">Vacuna</td>
                                <td className="py-2 px-2 text-center">Parvovirus</td>
                                <td className="py-2 px-2 text-center">Clínica Huellitas</td>
                                <td className="py-2 px-2 text-center">11-11-2024</td>
                                <td className="py-2 px-2 text-center">12:07 P.m.</td>
                                <td className="py-2 px-2 text-center">Pendiente</td>

                                <td className="py-2 px-2 text-center">
                                    <button className="bg-morado text-white rounded-xl py-2 px-2 text-base font-medium hover:bg-blue-500">
                                        Finalizar
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
                            <button className="bg-morado text-white rounded-xl py-2 px-2 text-base font-medium hover:bg-blue-700">
                                        Finalizar
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


                <h1 className="text-2xl text-gray-700 font-semibold mb-6 my-12">Finalizados</h1>

                <div className="bg-gray-100 p-4 mb-4 rounded-xl">
                    <div className="relative mb-4 w-full">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="p-2 pl-10 bg-gray-200 border text-gray-700 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-300"
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
                                <th className="py-2 px-2 font-medium border-b text-center">Estado</th>
                                <th className="py-2 px-2 font-medium border-b text-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-gray-500">
                                <td className="py-2 px-2 text-center">1</td>
                                <td className="py-2 px-2 text-center">Vacuna</td>
                                <td className="py-2 px-2 text-center">Parvovirus</td>
                                <td className="py-2 px-2 text-center">Finalizado</td>
                                <td className="py-2 px-2 text-center space-x-4">
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
                            <p className="font-medium text-gray-700">Estado:<span className="text-gray-500"> Finalizado</span></p>
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

export default Salud;
