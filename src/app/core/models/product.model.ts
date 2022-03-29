import { Allergen } from './allergen.model';
import { CommandProduct } from './command-product.model';
import { Ingredient } from './ingredient.model';
import { Mark } from './mark.model';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageName: string;
  mark: Mark;
  ingredients: Ingredient[];
  allergens: Allergen[];
  commandsProduct: CommandProduct[];
}
