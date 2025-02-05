import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../core/store/AuthStore";

const AuthProvider: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    authStore.setRedirectCallback(() => navigate("/"));
  }, [navigate]);

  return null; // No renderiza nada, solo configura la redirección
};

export default AuthProvider;
