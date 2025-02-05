import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import RecetaPage from "./pages/RecetaPage";
import FeedPage from "./pages/FeedPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RecipePreview from "./pages/RecipePreview";
import NotFoundPage from "./pages/NotFoundPage";
import MisRecetas from "./pages/MisRecetas";
import RecetaDetail from "./pages/RecetaDetail";
import AuthProvider from "./components/AuthProvider";

function App() {
  return (
    <Router>
      <AuthProvider />
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<HomePage />} />

        {/* Autenticación */}

        {/* Usuario autenticado */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/create-recipe" element={<RecetaPage />} />
        <Route path="/vista-previa" element={<RecipePreview />} />
        <Route path="/mis-recetas" element={<MisRecetas />} />
        <Route path="/recipe/:id" element={<RecetaDetail />} />
        <Route path="/feed" element={<FeedPage />} />

        {/* Ruta para manejar 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
