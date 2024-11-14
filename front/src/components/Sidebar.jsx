import React, { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
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

import {
  TbHome,
  TbUser,
  TbCalendarStats,
  TbHeart,
  TbPaperBag,
  TbPaw,
  TbMap2,
  TbAlignBoxLeftTop,
  TbLogout,
} from "react-icons/tb";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div
        className={`bg-moradobajo h-full fixed lg:static w-[55%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
          <img src={LogoHuellitas} className="w-36 h-36 object-cover " />
          <h1 className="text-4xl text-white font-semibold">Huellitas</h1>
        </div>
        {/* Nav */}
        <div className="bg-morado p-8 rounded-tr-[100px] h-[70vh] flex flex-col justify-between gap-8">
          <nav className="flex flex-col text-white text-lg gap-8">
            <Link
              to={"/"}
              className={`flex items-center gap-2 transition-all ${
                isActive("/") ? "translate-x-4 font-bold" : ""
              }`}
            >
              <TbHome /> Inicio
            </Link>

            <Link to={"/recordatorios"}
              className={`flex items-center gap-2 transition-all ${
                isActive("/recordatorios") ? "translate-x-4 font-bold" : ""
              }`}>
              <TbCalendarStats /> Recordatorios
            </Link>

            <Link to={"/salud"}  className={`flex items-center gap-2 transition-all ${
                isActive("/salud") ? "translate-x-4 font-bold" : ""
              }`}>
              <TbHeart /> Salud
            </Link>
            <Link to={"/alimento"}  className={`flex items-center gap-2 transition-all ${
                isActive("/alimento") ? "translate-x-4 font-bold" : ""
              }`}>
              <TbPaperBag /> Alimento
            </Link>
            <Link to={"/actividad"}  className={`flex items-center gap-2 transition-all ${
                isActive("/actividad") ? "translate-x-4 font-bold" : ""
              }`}>
              <TbPaw /> Actividad
            </Link>
            <Link to={"documentacion"}  className={`flex items-center gap-2 transition-all ${
                isActive("/documentacion") ? "translate-x-4 font-bold" : ""
              }`}>
              <TbAlignBoxLeftTop /> Documentos
            </Link>
            <Link to={"/lugares"}  className={`flex items-center gap-2 transition-all ${
                isActive("/lugares") ? "translate-x-4 font-bold" : ""
              }`}>
              <TbMap2 /> Lugares
            </Link>
            <Link to={"/perfil"}  className={`flex items-center gap-2 transition-all ${
                isActive("/perfil") ? "translate-x-4 font-bold" : ""
              }`}>
              <TbUser /> Perfil
            </Link>
          </nav>
          <div className="bg-primary-900/50 text-white text-base font-semibold  p-4 rounded-xl">
            <Link to={"/login"}>
              <TbLogout /> Cerrar Sesión
            </Link>
          </div>
        </div>
      </div>
      {/* Button mobile */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50"
      >
        {showMenu ? <RiCloseFill /> : <RiMore2Fill />}
      </button>
    </>
  );
};

export default Sidebar;
