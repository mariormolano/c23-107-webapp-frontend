import { useStore } from "exome/react";
import { authStore } from "../../core/store/AuthStore";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Headerlinks from "./HeaderLinks";
import HomeButton from "./HomeButton";
import ProfileButton from "./ProfileButton";

const Header = () => {
  const { loggedIn, checkToken } = useStore(authStore);

  useEffect(() => {
    checkToken();
  }, [loggedIn, checkToken]);

  const links = Headerlinks(loggedIn);

  return (
    <header className="p-4 bg-header-background">
      {/* Para usuario logueado */}
      <div className="flex justify-between items-center">
        {loggedIn && <HomeButton />}
        {loggedIn && <ProfileButton />}
      </div>

      {/* Si no esta logueado */}

      <div className="flex justify-end items-center">
        {!loggedIn && (
          <div className="flex gap-2">
            {links.map(({ to, text, extraClass = "" }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-center hover:bg-celesteBoton hover:text-black py-2 min-w-44 rounded-lg ${extraClass} ${
                    isActive ? "font-bold border-b-2 border-blue-500" : ""
                  }`
                }
              >
                {text}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
