/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../features/Footer/Footer";
import Layout from "../layouts/Layout";

const PreviewRecipe: React.FC = () => {
  const location = useLocation();
  const recipeData = location.state;

  if (!recipeData) {
    return <p>No se han proporcionado datos para la receta.</p>;
  }

  const {
    title,
    recipeText,
    ingredients,
    steps,
    comensales,
    selectedCountry,
    image,
    tiempoTotal,
  } = recipeData;

  return (
    <Layout>
      <h2 className="text-azulOscuro text-3xl font-bold mb-4 -mt-6 ms-4">
        Tu Receta
      </h2>
      <div className="p-6 bg-white rounded-md shadow-md max-w-5xl mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            {image && (
              <img
                src={image}
                alt="Imagen principal de la receta"
                className="w-[500px] h-[500px] object-cover rounded-lg mb-4"
              />
            )}
            <div className="text-left w-full">
              <p className="text-gray-700 mb-2">
                <strong>Tiempo:</strong> {tiempoTotal}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Comensales:</strong> {comensales}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>País:</strong> {selectedCountry || "No especificado"}
              </p>
              <h3 className="text-lg font-semibold mb-2">Ingredientes:</h3>
              <ul className="list-disc list-inside">
                {ingredients.map((ingredient: any, index: number) => (
                  <li key={index}>
                    {ingredient.quantity} - {ingredient.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col mb-5">
            <h1 className="text-black text-2xl font-bold mb-4">{title}</h1>
            <p className="text-gray-700 mb-6">{recipeText}</p>
            <h3 className="text-lg font-semibold mb-4">Pasos:</h3>
            <ol className="space-y-6">
              {steps.map((step: any, index: number) => (
                <li key={index} className="flex items-start">
                  <div className="mr-4 text-lg font-medium">{index + 1}.</div>
                  <div className="flex-1">
                    <p className="mb-2">{step.text}</p>
                    {step.image && (
                      <img
                        src={URL.createObjectURL(step.image)}
                        alt={`Paso ${index + 1}`}
                        className="w-[300px] h-[300px] object-cover rounded-lg"
                      />
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default PreviewRecipe;
