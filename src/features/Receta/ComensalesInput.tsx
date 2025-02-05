import React, { useState } from "react";

interface ComensalesInputProps {
  value: number;
  onChange: (value: number) => void;
}

const ComensalesInput: React.FC<ComensalesInputProps> = ({
  value,
  onChange,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (/^\d+$/.test(inputValue)) {
      setError(null);
      onChange(parseInt(inputValue, 10));
    } else {
      setError("Por favor, ingresa un número válido.");
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-balck font-semibold mb-2">
        ¿Cuántos comensales?
      </label>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        className="rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-azulOscuro bg-azulClaro"
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default ComensalesInput;
