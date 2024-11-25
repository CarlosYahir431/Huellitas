//Componentes 
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

//Imagenes
import FotoPerro1 from "../img/FotoPerro1.jpg";
import ClinicaHuellitas from "../img/Clinica Huellitas.jpg";
import ParqueHuellitas from "../img/Parque Huellitas.jpg";
import GuarderiaHuellitas from "../img/Guarderia Huellitas.jpg";
import Casa from "../img/Casa.jpg";

// Iconos
import {
    TbHeart,
    TbPaperBag,
    TbPaw,
    TbBellRinging
} from "react-icons/tb";


function App() {
    return (
        //Utilizar Siempre
        <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
            <Sidebar />
            <main className="lg:col-span-3 xl:col-span-5 bg-white p-8 h-[100vh] overflow-y-scroll font-sans">
                <Header />

                {/* Inicio */}




                {/* Seccion Información de la Mascota */}
                <h1 className="text-2xl text-gray-800 font-semibold mb-8 my-12">Perfiles</h1>


                <section className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 mt-10 gap-8">

                    <div className="bg-gray-100 items-left p-8 rounded-xl flex flex-col gap-2">
                        <h1 className="text-2xl mx-4 pb-4 text-gray-800 font-bold">Mi Perfil</h1>

                        <div className="mx-4">
                            <p className="text-base font-semibold text-gray-700">Nombre:
                                <span className="text-base font-normal text-gray-500"> Boris Joaquin</span>
                            </p>
                            <p className="text-base font-semibold text-gray-700">Correo Electronico:
                                <span className="text-base font-normal text-gray-500"> boris@gmail.com</span>
                            </p>
                        </div>

                        <div className="px-4 py-12 mt-4 mx-4 text-center border rounded-md border-dashed">
                            <span className="text-base font-normal  text-gray-500">Tu contraseña ha sido resguardada y protegida
                                por nosotros, por confidencialidad no podras visualizarlo, asi solo tu mismo podras cambiarlo o configurarlo.
                            </span>

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 mt-4 mx-4 gap-6 ">
                            <button
                                type="submit"
                                className=" bg-morado font-medium text-white py-3 rounded-lg text-center hover:bg-blue-700 transition duration-200"
                            >
                                Actualizar Información
                            </button>
                            <button
                                type="submit"
                                className=" border-2 border-morado font-medium text-morado py-3 rounded-lg text-center hover:border-blue-700 hover:ring-1 hover:text-blue-700 transition duration-200"
                            >
                                Cambiar Contraseña
                            </button>
                        </div>


                    </div>



                    <div className="bg-gray-100 items-left p-8 rounded-xl flex flex-col gap-2 ">
                        <h1 className="text-2xl pb-4 text-gray-800 mx-4 font-bold">Perfil de la Mascota</h1>

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

                        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 mt-4 mx-4">
                            <button
                                type="submit"
                                className=" bg-morado font-medium text-white py-3 rounded-lg text-center hover:bg-blue-700 transition duration-200"
                            >
                                Actualizar Información
                            </button>

                        </div>
                    </div>

                </section>
            </main>
        </div>
    );
}
export default App;