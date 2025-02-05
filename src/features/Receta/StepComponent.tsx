import React, { useState } from "react";

interface StepComponentProps {
  stepNumber: number;
  stepData: { text: string; image: File | null };
  onTextChange: (text: string) => void;
  onImageChange: (file: File | null) => void;
}

const StepComponent: React.FC<StepComponentProps> = ({
  stepNumber,
  stepData,
  onTextChange,
  onImageChange,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    processFile(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Por favor, carga solo imágenes.");
      return;
    }
    setError(null);
    onImageChange(file);
  };

  return (
    <div className="border border-gray-300 p-4 rounded mb-4">
      <h3 className="text-lg font-semibold mb-2">Paso {stepNumber}:</h3>
      <textarea
        rows={2}
        value={stepData.text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Describe el paso..."
        className="w-full border border-gray-300 rounded p-2 mb-4"
      />
      <div
        className="w-full h-48 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center cursor-pointer bg-gray-50"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() =>
          document.getElementById(`fileInput-step-${stepNumber}`)?.click()
        }
      >
        {stepData.image ? (
          <img
            src={URL.createObjectURL(stepData.image)}
            alt={`Paso ${stepNumber}`}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <p className="text-gray-500">
            Arrastra tu imagen aquí o haz clic para cargarla
          </p>
        )}
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <input
        type="file"
        id={`fileInput-step-${stepNumber}`}
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default StepComponent;
