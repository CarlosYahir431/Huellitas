import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  function logOut(){
    localStorage.removeItem("user");
    navigate("/login");
  }

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div
        className={`bg-moradobajo font-sans h-full fixed lg:static w-[62%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
          <img src={LogoHuellitas} className="w-36 h-36 object-cover " />
          <h1 className="text-4xl text-white font-semibold">Huellitas</h1>
        </div>
        {/* Nav */}
        <div className="bg-morado p-8 rounded-tr-[75px] h-[70vh] flex flex-col justify-between gap-8">
          <nav className="flex flex-col my-4 text-gray-100 text-base gap-4">
            <Link
              to={"/"}
              className={`flex items-center rounded-xl px-2 py-2 hover:bg-moradobajo gap-2 transition-all ${
                isActive("/") ? "rounded-xl w-56 py-2 translate-x-4 font-semibold" : ""
              }`}
            >
              <TbHome /> Inicio
            </Link>

            <Link
              to={"/recordatorios"}
              className={`flex items-center rounded-xl px-2 py-2 hover:bg-moradobajo gap-2  transition-all ${
                isActive("/recordatorios") ? "rounded-xl w-56 py-2 translate-x-4 font-semibold" : ""
              }`}
            >
              <TbCalendarStats /> Recordatorios
            </Link>

            <Link
              to={"/salud"}
              className={`flex items-center rounded-xl px-2 py-2 hover:bg-moradobajo gap-2 transition-all ${
                isActive("/salud") ?  "rounded-xl w-56 py-2 translate-x-4 font-semibold" : ""
              }`}
            >
              <TbHeart /> Salud
            </Link>
            
            <Link
              to={"/alimentación"}
              className={`flex items-center rounded-xl px-2 py-2 hover:bg-moradobajo gap-2 transition-all ${
                isActive("/alimentación") ?  "rounded-xl w-56 py-2 translate-x-4 font-semibold" : ""
              }`}
            >
              <TbPaperBag /> Alimentación
            </Link>
            <Link
              to={"/actividad"}
              className={`flex items-center rounded-xl px-2 py-2 hover:bg-moradobajo gap-2 transition-all ${
                isActive("/actividad") ?  "rounded-xl w-56 py-2 translate-x-4 font-semibold" : ""
              }`}
            >
              <TbPaw /> Actividad
            </Link>
            <Link
              to={"/documentos"}
              className={`flex items-center rounded-xl px-2 py-2 hover:bg-moradobajo gap-2 transition-all ${
                isActive("/documentos") ?  "rounded-xl w-56 py-2 translate-x-4 font-semibold" : ""
              }`}
            >
              <TbAlignBoxLeftTop /> Documentos
            </Link>
            <Link
              to={"/lugares"}
              className={`flex items-center rounded-xl px-2 py-2 hover:bg-moradobajo gap-2 transition-all ${
                isActive("/lugares") ?  "rounded-xl w-56 py-2 translate-x-4 font-semibold" : ""
              }`}
            >
              <TbMap2 /> Lugares
            </Link>
            <Link
              to={"/perfil"}
              className={`flex items-center rounded-xl px-2 py-2 hover:bg-moradobajo gap-2 transition-all ${
                isActive("/perfil") ?  "rounded-xl w-56 py-2 translate-x-4 font-semibold" : ""
              }`}
            >
              <TbUser /> Perfil
            </Link>
          </nav>
          <div className="bg-moradobajo text-white text-base font-semibold  p-2 rounded-xl">
            <button className="flex items-center gap-4 text-white py-2 px-4 rounded-xl" onClick={logOut}>
              <TbLogout className="text-2xl" /> Cerrar Sesión
            </button>
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
