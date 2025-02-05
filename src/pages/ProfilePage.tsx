import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import ResumeMyRecipe from "../features/Receta/ResumeMyRecipe";
import { User } from "../core/interface/userInterface";
import { fetchData } from "../api/fetchData";
import { Recipe } from "../core/interface/RecipeInterface";

const ProfilePage = () => {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData("/data.json");

      if (result.error) {
        setError(result.error);
      } else {
        if (result.data) {
          setRecipes(result.data.recipes);
          setUser(result.data.user);
        }
      }

      setLoading(result.loading);
    };

    loadData();
  }, []);

  return (
    <Layout>
      <div className="-mt-16 flex flex-col justify-center items-center">
        {user ? (
          <>
            <img
              src={user.imgThumbnail}
              alt={user.name}
              className="mx-auto mb-4"
            />
            <div className="max-w-2xl">
              <p className="text-center text-xl">"{user.description}"</p>
              <p className="text-center text-2xl">
                {user.name} - {user.countRecipes} recetas cargadas -{" "}
                {user.country}
              </p>
            </div>
            <Link to="/edit-profile">
              <img
                src="/botonEditar.png"
                alt="Editar perfil"
                className="mt-4 w-14"
              />
            </Link>
          </>
        ) : (
          <div>
            <p className="text-center text-red-500 mt-4">
              No se pudo encontrar al usuario
            </p>
          </div>
        )}
        <div className="bg-celestePopup w-full min-h-40 flex flex-col items-center justify-center my-4">
          <p className="text-2xl max-w-2xl text-center pt-2">
            Aquí puedes cargar tus recetas y compartirlas a otros usuarios de
            Las recetas de la Nona:
          </p>
          <Link
            to="/create-recipe"
            className="bg-azulOscuro flex items-center justify-center rounded-lg px-4 py-3 mt-2 text-celesteBoton hover:bg-amarilloOscuro transition-all max-w-[200px]"
          >
            Añadir Nueva Receta
          </Link>
        </div>
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}
        {loading ? (
          <p className="text-center text-gray-500 mt-10">Cargando recetas...</p>
        ) : recipes && recipes.length > 0 ? (
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Mis Recetas</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-6 flex-wrap">
              {recipes.map((recipe, index) => (
                <ResumeMyRecipe key={index} {...recipe} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-6">
            <p className="text-gray-600 text-lg font-semibold mb-4">
              ¡Vaya! Todavía no tienes recetas cargadas.
            </p>
            <img
              src="/abuela.png"
              alt="No hay recetas"
              className="w-60 h-60 mb-4"
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProfilePage;
