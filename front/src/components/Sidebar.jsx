import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoHuellitas from "../img/LogoHuellitas.png";

// Icons
import {
  RiHome3Line,
  RiFileCopyLine,
  RiWalletLine,
  RiPieChartLine,
  RiMore2Fill,
  RiCloseFill,
} from "react-icons/ri";

import {TbHome,
   TbUser,
   TbCalendarStats,
   TbHeart,
   TbPaperBag, TbPaw, TbMap2,
   TbAlignBoxLeftTop,
   TbLogout    
  } from "react-icons/tb";



const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    navigate("/Login");
  };
  return (
    <>
      <div
        className={`bg-moradobajo h-full fixed lg:static w-[55%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
          <img
            src={LogoHuellitas}
            className="w-36 h-36 object-cover "
          />
          <h1 className="text-4xl text-white font-semibold">Huellitas</h1>

 
        </div>
        {/* Nav */}
        <div className="bg-morado p-8 rounded-tr-[100px] h-[70vh]  flex flex-col justify-between gap-8">
          <nav className="flex flex-col text-lg gap-4">
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <TbHome /> Inicio
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <TbCalendarStats  /> Recordatorios
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <TbHeart  /> Salud
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
                    <TbPaperBag/>   Alimento
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
             <TbPaw /> Actividad
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <TbAlignBoxLeftTop  /> Documentos
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <TbMap2  /> Lugares
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <TbUser /> Perfil
            </a>
          </nav>
          <div className="bg-primary-900/50 text-white text-base font-semibold  p-4 rounded-xl">
          <a href="/Login" className="flex items-center gap-4 text-white py-2 px-4 rounded-xl">
            <TbLogout /> Cerrar Sesión
          </a>
          </div>
        </div>
      </div>
      {/* Button mobile */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50"
      >
        {showMenu ? <RiCloseFill />  : <RiMore2Fill />}
      </button>
    </>
  );
};

export default Sidebar;
