import React, { useState } from "react";

interface RecipePhotoUploaderProps {
  onPhotoChange: (file: File | null) => void;
}

const RecipePhotoUploader: React.FC<RecipePhotoUploaderProps> = ({
  onPhotoChange,
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      // Crear una URL de vista previa
      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL);
      onPhotoChange(file);
    } else {
      setPreview(null);
      onPhotoChange(null);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-48 h-48 bg-cremaClaro border border-azulClaro rounded-md overflow-hidden">
        {preview ? (
          <img
            src={preview}
            alt="Vista previa de la receta"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-azulClaro">
            No hay imagen
          </div>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mt-4"
      />
    </div>
  );
};

export default RecipePhotoUploader;
