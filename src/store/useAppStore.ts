import { create } from "zustand";

interface Recipe {
  id: string;
  userid: string;
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
  thumbnail: string;
  tags: string[];
  country: string;
  like: string[];
}

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  profileimage: string;
  creationdate: string;
  country: string;
}

interface AppState {
  user: User | null;
  recipes: Recipe[];
  setUser: (user: User | null) => void;
  addRecipe: (recipe: Recipe) => void;
  logout: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null, // Estado inicial del usuario.
  recipes: [], // Lista de recetas publicadas.

  // Acciones:
  setUser: (user) => set({ user }), // Establece el usuario autenticado.
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })), // Agrega una receta.
  logout: () => set({ user: null, recipes: [] }), // Cierra sesión.
}));
