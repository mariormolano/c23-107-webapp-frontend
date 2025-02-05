import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaTimes } from "react-icons/fa";
import { useStore } from "exome/react";
import { authStore } from "../../core/store/AuthStore";

interface ProfileButtonProps {
  userImage?: string;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ userImage }) => {
  const { logout } = useStore(authStore);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  /* Menu toggle */
  const toggleMenu = () => setIsOpen(!isOpen);

  /* Cierra menu */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex items-center space-x-3" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="w-48 h-14 bg-[#F1F6FD] rounded-lg relative clip-triangle flex items-center justify-center transition-transform hover:scale-110"
      >
        {userImage ? (
          <img
            src={userImage}
            alt="Perfil"
            className="w-10 h-10 rounded-full border border-gray-400"
          />
        ) : (
          <FaUser className="text-gray-500 text-2xl me-2" />
        )}
        <span className="text-gray-800 font-medium">Mi Perfil</span>
      </button>

      {/* Menú desplegable con animación */}
      <div
        ref={menuRef}
        className={`absolute top-0.5 right-0 mt-2 w-48 bg-celesteBoton shadow-lg rounded-lg overflow-hidden z-10 transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* Botón de cierre */}
        <div className="flex justify-between items-center pe-4 py-2">
          {/* <span className="text-gray-700 font-semibold">Opciones</span> */}

          <Link
            to="/profile"
            className="block ps-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Mi perfil
          </Link>
          <button onClick={() => setIsOpen(false)}>
            <FaTimes className="text-gray-500 hover:text-red-500" />
          </button>
        </div>

        <Link
          to="/mis-recetas"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Mis Recetas
        </Link>
        <button
          onClick={logout}
          className="block w-full text-left px-4  py-4 text-red-500 hover:bg-gray-100"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default ProfileButton;
