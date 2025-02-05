import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IngredientInput from "./IngredientInput";
import ComensalesInput from "./ComensalesInput";
import TiempoInput from "./TiempoInput";
import StepComponent from "./StepComponent";
import RecipeTitle from "./RecipeTitle";
import RecipeText from "./RecipeText";
import ElegirPais from "./ElegirPais";
import ImageUploader from "./ImageUploader";

interface Ingredient {
  id: number;
  value: string;
  quantity: string;
}

interface StepData {
  text: string;
  image: File | null;
}

const IngredientForm: React.FC = () => {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: 1, value: "", quantity: "" },
    { id: 2, value: "", quantity: "" },
  ]);
  const [comensales, setComensales] = useState(1);
  const [tiempoTotal, setTiempoTotal] = useState<string>("");

  const [steps, setSteps] = useState<StepData[]>([
    { text: "", image: null },
    { text: "", image: null },
  ]);

  const [title, setTitle] = useState("");
  const [recipeText, setRecipeText] = useState("");

  const [selectedCountry, setSelectedCountry] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handleTiempoChange = (value: string) => {
    setTiempoTotal(value);
  };

  const handleCountryChange = (
    selectedCountry: { value: string; label: string } | null
  ) => {
    if (selectedCountry) {
      setSelectedCountry(selectedCountry.label);
      console.log("País seleccionado:", selectedCountry.label);
    } else {
      setSelectedCountry("");
      console.log("Ningún país seleccionado");
    }
  };

  /*   const [photo, setPhoto] = useState<File | null>(null); */

  const addIngredient = () => {
    setIngredients((prev) => [
      ...prev,
      { id: prev.length + 1, value: "", quantity: "" },
    ]);
  };

  const updateIngredientValue = (id: number, value: string) => {
    setIngredients((prev) =>
      prev.map((ingredient) =>
        ingredient.id === id ? { ...ingredient, value } : ingredient
      )
    );
  };

  const updateIngredientQuantity = (id: number, quantity: string) => {
    setIngredients((prev) =>
      prev.map((ingredient) =>
        ingredient.id === id ? { ...ingredient, quantity } : ingredient
      )
    );
  };

  const deleteIngredient = (id: number) => {
    setIngredients((prev) =>
      prev
        .filter((ingredient) => ingredient.id !== id)
        .map((ingredient, index) => ({ ...ingredient, id: index + 1 }))
    );
  };

  const addStep = () => {
    setSteps((prev) => [...prev, { text: "", image: null }]);
  };

  const removeStep = (index: number) => {
    setSteps((prev) => prev.filter((_, i) => i !== index));
  };

  const updateStepText = (index: number, text: string) => {
    const updatedSteps = [...steps];
    updatedSteps[index].text = text;
    setSteps(updatedSteps);
  };

  const updateStepImage = (index: number, file: File | null) => {
    const updatedSteps = [...steps];
    updatedSteps[index].image = file;
    setSteps(updatedSteps);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const recipeData = {
      title,
      recipeText,
      ingredients,
      steps,
      comensales,
      selectedCountry,
      image,
      tiempoTotal,
    };
    console.log("Datos de la receta cargada:", recipeData);
    navigate("/vista-previa", { state: recipeData });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Carga aquí tu receta</h1>
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded-md shadow-md"
      >
        <div className="flex justify-center gap-4">
          <div className="w-1/2">
            <ImageUploader onChange={setImage} />
          </div>
          <div className="w-1/2">
            <RecipeTitle value={title} onChange={setTitle} />

            <RecipeText value={recipeText} onChange={setRecipeText} />
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <div className="bg-slate-100 p-3 w-1/2">
            <h4 className="mb-2 text-black">
              De donde viene tu receta? Elige acá:
            </h4>
            <div className="w-60 from-neutral-200 text-s mb-2">
              <ElegirPais onChange={handleCountryChange} />
            </div>
            <h4 className="mb-4 text-black">
              Agrega acá los ingredientes y cantidades para tu receta
            </h4>
            <div className="flex gap-2">
              <div className="w-1/2">
                <ComensalesInput value={comensales} onChange={setComensales} />
              </div>
              <div className="w-1/2">
                <TiempoInput onChange={handleTiempoChange} />
              </div>
            </div>
            {ingredients.map((ingredient) => (
              <IngredientInput
                key={ingredient.id}
                number={ingredient.id}
                value={ingredient.value}
                quantity={ingredient.quantity}
                onValueChange={(value) =>
                  updateIngredientValue(ingredient.id, value)
                }
                onQuantityChange={(quantity) =>
                  updateIngredientQuantity(ingredient.id, quantity)
                }
                onDelete={
                  ingredients.length > 1
                    ? () => deleteIngredient(ingredient.id)
                    : undefined
                }
              />
            ))}
            <div className="flex gap-4 mt-6">
              <button
                type="button"
                onClick={addIngredient}
                className="border border-azulClaro hover:bg-celesteClaro text-black px-4 py-2 rounded"
              >
                + Agregar Ingrediente
              </button>
            </div>
          </div>

          <div className="w-1/2 bg-slate-100 p-6">
            <h4 className="mb-4 text-gris">
              Detalla los pasos de preparación de tu receta
            </h4>
            {steps.map((step, index) => (
              <StepComponent
                key={index}
                stepNumber={index + 1}
                stepData={step}
                onTextChange={(text) => updateStepText(index, text)}
                onImageChange={(file) => updateStepImage(index, file)}
              />
            ))}
            <div className="flex gap-4 mt-6">
              <button
                type="button"
                onClick={addStep}
                className="border border-azulClaro hover:bg-celesteClaro text-black px-4 py-2 rounded"
              >
                + Agregar Paso
              </button>
              {steps.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeStep(steps.length - 1)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Eliminar Último Paso
                </button>
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-amarilloOscuro hover:bg-amarilloClaro text-white px-4 py-2 rounded mt-6"
        >
          Guardar Receta
        </button>
      </form>
    </div>
  );
};
export default IngredientForm;
