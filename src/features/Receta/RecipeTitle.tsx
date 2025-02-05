import React from "react";

interface RecipeTitleProps {
  value: string;
  onChange: (value: string) => void;
}

const RecipeTitle: React.FC<RecipeTitleProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Título de la receta"
      className="w-full text-2xl font-bold text-black placeholder-gris bg-transparent outline-none"
    />
  );
};

export default RecipeTitle;
