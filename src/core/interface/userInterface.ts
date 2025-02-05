import { Recipe } from './RecipeInterface';

export interface User {
  name: string;
  imgThumbnail: string;
  description: string;
  countRecipes: number;
  country: string;
}

export interface ProfileData {
  user: User;
  recipes: Recipe[];
}
