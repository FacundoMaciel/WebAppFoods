export type dietsTypes =
  | "gluten free"
  | "ketogenic"
  | "vegetarian"
  | "lacto vegetarian"
  | "ovo vegetarian"
  | "lacto ovo vegetarian"
  | "vegan"
  | "pescetarian"
  | "paleolithic"
  | "primal"
  | "fodmap friendly"
  | "whole 30"
  | "dairy free";

export type dishTypes =
  | "side dish"
  | "lunch"
  | "mail course"
  | "salad"
  | "main dish"
  | "dinner"
  | "antipasti"
  | "starker"
  | "snack"
  | "appetizer"
  | "antipasto"
  | "hor d'oeuvre"
  | "morning meal"
  | "brunch"
  | "beverage"
  | "breakfast"
  | "drink"
  | "soup"
  | "main course"
  | "main dish"
  | "marinade"
  | "spread"
  | "dip"
  | "condiment"
  | "starter"
  | "seasoning";

export interface TheRecipe {
  healthScore: number;
  id: number;
  title: string;
  image: string;
  summary?: string;
  dishTypes: dishTypes[] | string[];
  diets: dietsTypes[] | string[];
}

export interface TheInitialState {
  recipes: TheRecipe[];
  recipeDetails: TheRecipe | {};
  recipesWithFilters: TheRecipe[];
  favorites: TheRecipe[];
  diets: string[];
}
