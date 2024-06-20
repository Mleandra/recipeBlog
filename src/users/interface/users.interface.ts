import { Recipe } from '../../recipes/entity/recipes.entity';

export interface User {
  id: number;
  nom?: string;
  prenom?: string;
  email?: string;
  password?: string;
  recipes: Recipe[];
  isActive: boolean;
}
