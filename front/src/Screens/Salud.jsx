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
            <main className="lg:col-span-3 xl:col-span-5 bg-negro p-8 h-[100vh] overflow-y-scroll">
                <Header />

                {/* Inicio */}




                {/* Seccion Información de la Mascota */}
                <h1 className="text-2xl text-slate-100 font-semibold mb-8 my-12">Perfiles</h1>


                <section className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 mt-10 gap-8 drop-shadow-xl">

                    <div className="bg-slate-900 items-left p-8 rounded-xl text-gray-300 flex flex-col gap-2">
                        <div className="mx-6 my-6">
                            <h1 className="text-3xl pb-6  text-morado font-bold">Mi Perfil</h1>
                            <p className="text-base font-semibold text-slate-300">Nombre:
                                <span className="text-base text-slate-500"> Boris Joaquin</span>
                            </p>
                            <p className="text-base font-semibold text-slate-300">Correo Electronico:
                                <span className="text-base text-slate-500"> boris@gmail.com</span>
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 mt-2 mx-6 gap-6">
                            <button
                                type="submit"
                                className=" bg-morado font-medium text-white py-3 rounded-lg text-center hover:bg-moradobajo transition duration-200"
                            >
                                Actualizar Información
                            </button>
                            <button
                                type="submit"
                                className=" border-2 border-morado font-medium text-white py-3 rounded-lg text-center hover:bg-morado transition duration-200"
                            >
                                Cambiar Contraseña
                            </button>
                        </div>
                    </div>



                    <div className="bg-slate-900 items-left p-8 rounded-xl text-gray-300 flex flex-col gap-2 mt-6">
                        <section className="mx-6 my-6 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-5 gap-8">
                            <div className="">
                                <img
                                    src={FotoPerro1}
                                    className="w-full h-full object-cover rounded-lg"
                                    alt="Perfil principal"
                                />
                            </div>
                            <div className="">


                                <h1 className="text-3xl pb-6  text-morado font-bold">Cristal</h1>
                                <p className="text-base font-semibold text-slate-300">Edad:
                                    <span className="text-base text-slate-500"> 5 años</span>
                                </p>
                                <p className="text-base font-semibold text-slate-300">Sexo:
                                    <span className="text-base text-slate-500"> Femenino</span>
                                </p>
                                <p className="text-base font-semibold text-slate-300">Especie:
                                    <span className="text-base text-slate-500"> Perro</span>
                                </p>
                                <p className="text-base font-semibold text-slate-300">Raza:
                                    <span className="text-base text-slate-500"> Golden Retriver</span>
                                </p>
                                <p className="text-base font-semibold text-slate-300">Color:
                                    <span className="text-base text-slate-500"> Beige</span>
                                </p>
                                <p className="text-base font-semibold text-slate-300">Caracteristicas:
                                    <span className="text-base text-slate-500"> Tiene una mancha en la patita izquierda trasera</span>
                                </p>
                            </div>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 mt-2 mx-6">
                            <button
                                type="submit"
                                className=" bg-morado font-medium text-white py-3 rounded-lg text-center hover:bg-moradobajo transition duration-200"
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
