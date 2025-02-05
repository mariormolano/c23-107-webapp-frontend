import React, { useEffect, useState } from "react";
import RecipeCard from "./../features/Receta/RecipeCard";
import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";
import { Recipe } from "../core/interface/RecipeInterface";

const MisRecetas: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null); // null indica carga

  useEffect(() => {
    fetch("../../src/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => {
        console.error("Error loading recipes:", error);
        setRecipes([]);
      });
  }, []);

  return (
    <Layout>
      <div className="p-8">
        {/* Mientras se carga */}
        {recipes === null ? (
          <p className="text-center text-gray-500 mt-10">Cargando recetas...</p>
        ) : recipes.length > 0 ? (
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Mis Recetas</h1>
              <Link
                to="/create-recipe"
                className="bg-azulClaro flex items-center rounded-lg px-4 py-3 text-gray-700 hover:bg-amarilloOscuro transition-all"
              >
                Añadir Nueva Receta
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-6">
              {recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
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

            <Link
              to="/create-recipe"
              className="bg-azulClaro text-black px-6 py-4 rounded-lg text-lg font-bold hover:bg-azulOscuro transition-all"
            >
              Carga Aquí Tu Primera Receta
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MisRecetas;
