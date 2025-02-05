import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // Usamos React Icons

const HomeButton = () => {
  return (
    <NavLink
      to="/"
      className={({ isActive }) =>
        `bg-celesteBoton rounded-lg flex flex-col items-center text-gray-700 hover:text-blue-600 px-3 ms-6 ${
          isActive ? "font-bold text-blue-500" : ""
        }`
      }
    >
      <FaHome className="text-4xl text-black" />
      <span className="text-sm text-black">Inicio</span>
    </NavLink>
  );
};

export default HomeButton;
