import React from "react";
import { useParams } from "react-router-dom";
import recipesData from "../data.json";
import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === Number(id));

  if (!recipe) {
    return <p className="text-red-500">Receta no encontrada</p>;
  }

  return (
    <Layout>
      <div className="p-6 bg-white rounded-md shadow-md max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-azulOscuro">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-[400px] object-cover rounded-lg my-4"
        />
        <p className="text-gray-700 mb-6">{recipe.recipeText}</p>

        <h3 className="text-lg font-semibold mb-2">Ingredientes:</h3>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.nombre} - {ingredient.cantidad}
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold mb-2">Pasos:</h3>
        <ol className="space-y-6">
          {recipe.steps.map((step, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-4 text-lg font-medium">{index + 1}.</div>
              <div className="flex-1">
                <p className="mb-2">{step.text}</p>
                {step.image && (
                  <img
                    src={step.image}
                    alt={`Paso ${index + 1}`}
                    className="w-[300px] h-[300px] object-cover rounded-lg"
                  />
                )}
              </div>
            </li>
          ))}
        </ol>
        {/* Botón para volver a "Mis Recetas" */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/mis-recetas"
            className="bg-azulOscuro text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-azulClaro transition"
          >
            Volver a Mis Recetas
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default RecipeDetail;
