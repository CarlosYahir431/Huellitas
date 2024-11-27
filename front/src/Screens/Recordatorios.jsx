import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Tabla_Alimento from "../components/tabla_alimento";
import Tabla_Salud from "../components/tabla_salud";
import Tabla_Actividad from "../components/tabla_actividad";
import Recordatorio_Salud from "../components/recordatorio_salud";
import Recordatorio_Actividad from "../components/recordatorio_actividad";
import Recordatorio_comida from "../components/recordatorio_comida";
import { TbHeart, TbPaperBag, TbPaw, TbBellRinging, TbClock } from "react-icons/tb";

function Recordatorios() {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5  bg-white p-8 h-[100vh] overflow-y-scroll">
        <Header />

        <h1 className="text-2xl font-semibold mb-8 my-12">
          Agregar Recordatorio
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
          
          <Recordatorio_Salud />
          <Recordatorio_comida />
          <Recordatorio_Actividad />
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

        <Tabla_Salud />
        <Tabla_Alimento />
        <Tabla_Actividad />
        
      </main>
    </div>
  );
  // const [formType2, setFormType2] = useState(null);

  // // Función para cerrar el modal
  // const closeModal2 = () => setFormType2(null);

  // // Función para mostrar el formulario correspondiente
  // const renderForm2 = () => {
  //   switch (formType2) {
  //     case "salud":
  //       return (
  //         <div className="modal-content flex w-full h-full max-w-4x">
  //           {/* Sección del Formulario */}
  //           <div className="w-2/2 p-16 py-16">
  //             <h2 className="text-xl font-semibold text-red-500 text-center ">
  //               Editar Recordatorio de
  //             </h2>
  //             <h2 className="text-4xl font-semibold text-red-500 text-center ">
  //               Saluda
  //             </h2>
  //             <form className="mt-1">
  //               <div className="mb-2 my-12">
  //                 <label className="block text-gray-700">Tipo</label>
  //                 <select className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]">
  //                   <option value="">Selecciona</option>
  //                   <option value="macho">Vacuna</option>
  //                   <option value="hembra">Tratamiento</option>
  //                   <option value="hembra">Medicamento</option>
  //                   <option value="hembra">Otro</option>
  //                 </select>
  //               </div>
  //               <div className="mb-2">
  //                 <label className="block text-gray-700">Nombre</label>
  //                 <input
  //                   type="name"
  //                   className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
  //                   placeholder="parvovirus"
  //                 />
  //               </div>
  //               <div className="mb-2">
  //                 <label className="block text-gray-700">Lugar</label>
  //                 <select className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]">
  //                   <option value="">Selecciona</option>
  //                   <option value="macho">Casa</option>
  //                   <option value="hembra">Clinica Huellitas</option>
  //                   <option value="hembra">Parque Huellitas</option>
  //                   <option value="hembra">Guarderia Huellitas</option>
  //                 </select>
  //               </div>
  //               <div className="flex space-x-4 mb-4">
  //                 <div className="w-1/2">
  //                   <label className="block text-gray-700">Fecha</label>
  //                   <input
  //                     type="date"
  //                     className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
  //                     placeholder="Edad en años"
  //                   />
  //                 </div>
  //                 <div className="w-1/2">
  //                   <label className="block text-gray-700">Hora</label>
  //                   <input
  //                     type="time"
  //                     className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
  //                     placeholder="Edad en años"
  //                   />
  //                 </div>
  //               </div>
  //               <button
  //                 type="submit"
  //                 className="w-full bg-morado font-medium text-white py-3 rounded-lg text-center hover:bg-blue-700 transition duration-200 my-6"
  //               >
  //                 Editar
  //               </button>
  //             </form>
  //           </div>
  //         </div>
  //       );
  //     case "alimento":
  //       return (
  //         <div className="modal-content flex w-full h-full max-w-4x">
  //           {/* Sección del Formulario */}
  //           <div className="w-2/2 p-16 py-16">
  //             <h2 className="text-xl font-semibold text-orange-500 text-center ">
  //               Editar Recordatorio de
  //             </h2>
  //             <h2 className="text-4xl font-semibold text-orange-500 text-center ">
  //               Alimento
  //             </h2>
  //             <form className="mt-1">
  //               <div className="mb-2 my-12">
  //                 <label className="block text-gray-700">Alimento</label>
  //                 <input
  //                   type="name"
  //                   className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
  //                   placeholder="croquetas"
  //                 />
  //               </div>
  //               <div className="mb-2">
  //                 <label className="block text-gray-700">Lugar</label>
  //                 <select className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]">
  //                   <option value="">Selecciona</option>
  //                   <option value="macho">Casa</option>
  //                   <option value="hembra">Clinica Huellitas</option>
  //                   <option value="hembra">Parque Huellitas</option>
  //                   <option value="hembra">Guarderia Huellitas</option>
  //                 </select>
  //               </div>
  //               <div className="flex space-x-4 mb-4">
  //                 <div className="w-1/2">
  //                   <label className="block text-gray-700">Fecha</label>
  //                   <input
  //                     type="date"
  //                     className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
  //                     placeholder="Edad en años"
  //                   />
  //                 </div>
  //                 <div className="w-1/2">
  //                   <label className="block text-gray-700">Hora</label>
  //                   <input
  //                     type="time"
  //                     className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
  //                     placeholder="Edad en años"
  //                   />
  //                 </div>
  //               </div>
  //               <button
  //                 type="submit"
  //                 className="w-full bg-morado font-medium text-white py-3 rounded-lg text-center hover:bg-blue-700 transition duration-200 my-6"
  //               >
  //                 Editar
  //               </button>
  //             </form>
  //           </div>
  //         </div>
  //       );
  //     case "actividad":
  //       return (
  //         <div className="modal-content flex w-full h-full max-w-4x">
  //           {/* Sección del Formulario */}
  //           <div className="w-2/2 p-16 py-16">
  //             <h2 className="text-xl font-semibold text-purple-500 text-center ">
  //               Editar Recordatorio de
  //             </h2>
  //             <h2 className="text-4xl font-semibold text-purple-500 text-center ">
  //               Actividad
  //             </h2>
  //             <form className="mt-1">
  //               <div className="mb-2 my-12">
  //                 <label className="block text-gray-700">Actividad</label>
  //                 <input
  //                   type="name"
  //                   className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
  //                   placeholder="croquetas"
  //                 />
  //               </div>
  //               <div className="mb-2">
  //                 <label className="block text-gray-700">Lugar</label>
  //                 <select className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]">
  //                   <option value="">Selecciona</option>
  //                   <option value="macho">Casa</option>
  //                   <option value="hembra">Clinica Huellitas</option>
  //                   <option value="hembra">Parque Huellitas</option>
  //                   <option value="hembra">Guarderia Huellitas</option>
  //                 </select>
  //               </div>
  //               <div className="flex space-x-4 mb-4">
  //                 <div className="w-1/2">
  //                   <label className="block text-gray-700">Fecha</label>
  //                   <input
  //                     type="date"
  //                     className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
  //                     placeholder="Edad en años"
  //                   />
  //                 </div>
  //                 <div className="w-1/2">
  //                   <label className="block text-gray-700">Hora</label>
  //                   <input
  //                     type="time"
  //                     className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
  //                     placeholder="Edad en años"
  //                   />
  //                 </div>
  //               </div>
  //               <button
  //                 type="submit"
  //                 className="w-full bg-morado font-medium text-white py-3 rounded-lg text-center hover:bg-blue-700 transition duration-200 my-6"
  //               >
  //                 Editar
  //               </button>
  //             </form>
  //           </div>
  //         </div>
  //       );
  //     default:
  //       return null;
  //   }
  // };
}

export default Recordatorios;
