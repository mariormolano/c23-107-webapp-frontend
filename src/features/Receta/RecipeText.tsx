import React from "react";

interface RecipeTextProps {
  value: string;
  onChange: (value: string) => void;
}

const RecipeText: React.FC<RecipeTextProps> = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Escribe aquí de dónde viene la receta..."
      className="w-full h-14 text-lg text-black placeholder-gris bg-transparent outline-none resize-none p-2 rounded-md"
    />
  );
};

export default RecipeText;
