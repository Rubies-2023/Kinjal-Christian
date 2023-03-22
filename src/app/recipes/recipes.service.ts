import { Recipe } from "./recipe.model";
import {Injectable} from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is the description for Test Recipe','https://img.taste.com.au/p3Tp-7AU/w643-h428-cfill-q90/taste/2022/09/garlic-chilli-prawn-pasta-181440-1.jpg',
      [
        new Ingredients('Fries', 2),
        new Ingredients('Spinach', 10)
      ]),
    new Recipe(
      'Another Test2 Recipe'
      ,'This is the description for Test2 Recipe','https://img.taste.com.au/p3Tp-7AU/w643-h428-cfill-q90/taste/2022/09/garlic-chilli-prawn-pasta-181440-1.jpg',
      [
        new Ingredients('Babycorn',7),
        new Ingredients('Mushroom',4)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredients[]) {
    this.slService.addIngredients(ingredients);
  }
}
