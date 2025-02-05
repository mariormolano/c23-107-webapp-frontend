import { Recipe } from "../../core/interface/RecipeInterface";
import { useNavigate } from "react-router-dom";
const ResumeMyRecipe = ({ image, title, id }: Recipe) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${id}`); // Redirige a la página de detalles
  };

  return (
    <div
      key={id}
      className="relative w-80 h-40 cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-lg"
      />
      <p className="absolute bottom-0 py-2 bg-fondoCeleste w-full text-center bg-opacity-50 text-black text-lg font-bold rounded">
        {title}
      </p>
    </div>
  );
};

export default ResumeMyRecipe;
