import React from "react";
import { useNavigate } from "react-router-dom";

interface Recipe {
  id: number;
  title: string;
  recipeText: string;
  image: string;
  tags: string[];
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <div className="flex border border-gray-300 rounded-lg p-4 shadow-lg">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-[350px] h-[250px] object-cover rounded-lg"
      />

      <div className="ml-6 flex flex-col justify-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{recipe.title}</h2>
          <hr className="my-2 border-gray-400" />
          <p className="text-gray-600">
            {recipe.recipeText.length > 200
              ? `${recipe.recipeText.substring(0, 200)}...`
              : recipe.recipeText}
          </p>
        </div>

        {/* Boton Ir a La Receta */}

        <button
          onClick={() => navigate(`/recipe/${recipe.id}`)}
          className="mt-4 text-black flex items-center hover:underline"
        >
          Ir a la receta
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Tags de las recetas */}

        <div className="flex flex-wrap gap-2 mt-3">
          {recipe.tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center bg-white border border-black px-3 py-1 rounded-lg text-sm font-medium text-gray-800"
            >
              {tag}
              <button className="ml-2 text-gray-500 hover:text-black">✖</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
