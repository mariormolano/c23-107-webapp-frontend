import { useStore } from "exome/react";
import { authStore } from "../core/store/AuthStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../features/Header/Header";
import BGImage from "../features/Header/BGImage";

const Login = () => {
  const { login, loginWithGoogle } = useStore(authStore);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const success =
      (await login(target.email.value, target.password.value)) ?? false;
    if (!success) {
      setLoginError(true);
    }
  };

  return (
    <div className="bg-login-background bg-cover bg-no-repeat">
      <Header />
      <BGImage svgUrl="fondo1.svg" />
      <div className="flex items-start justify-center min-h-screen">
        <div className="flex flex-col justify-center max-w-md rounded-lg border-2 border-black bg-white">
          {loginError ? (
            <div className="bg-amarilloLogo rounded-lg p-8 flex flex-col items-center">
              <h2 className="mb-4 text-xl font-bold text-center text-black">
                ¡Ups! Cariño, no estás registrado!
              </h2>
              <img
                src="abuela_login.png"
                alt="No registrado"
                className="mb-4 w-45 mx-auto"
              />
              <button
                onClick={() => navigate("/register")}
                className="w-2/3 px-4 py-2 text-azulOscuro bg-celesteBoton rounded-lg hover:bg-azulOscuro hover:text-celesteBoton focus:ring-4 focus:outline-none"
              >
                Registrarme
              </button>
            </div>
          ) : (
            <>
              <div className="p-8 mt-2">
                <h2 className="mb-6 text-lg font-bold text-center text-gray-800">
                  Ingresa tus datos para iniciar sesión:
                </h2>
                <form
                  className="flex flex-col items-center space-y-4"
                  onSubmit={handleSubmit}
                >
                  <div className="max-w-72">
                    <div className="w-full">
                      <label
                        htmlFor="email"
                        className="block text-lg font-bold text-black"
                      >
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-celesteClaro px-3 py-2 mt-1 text-gray-800 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Escribe tu email"
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="password"
                        className="block text-lg font-bold text-black"
                      >
                        Contraseña
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        className="w-full bg-celesteClaro px-3 py-2 mt-1 text-gray-800 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Escribe tu contraseña"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full px-8 py-2 text-black bg-celesteBoton rounded-lg hover:bg-azulOscuro/90 focus:ring-4 focus:outline-none"
                    >
                      Ingresar
                    </button>
                  </div>
                </form>
                <div className="flex justify-center items-center mt-4">
                  <button
                    type="button"
                    onClick={loginWithGoogle}
                    className="flex justify-center bg-azulOscuro text-white hover:bg-[#4285F4]/90 focus:outline-none font-medium rounded-lg text-sm max-w-56 px-4 py-2.5"
                  >
                    <svg
                      className="w-4 h-4 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 19"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>
                      Iniciar Sesión con{" "}
                      <span className="underline">Google</span>
                    </p>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
