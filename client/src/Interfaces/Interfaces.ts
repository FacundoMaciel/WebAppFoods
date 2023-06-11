export interface TheModalRecipe {
  healthScore?: number;
  id?: number;
  title?: string;
  image?: string;
  summary?: string;
  dishTypes?: dishTypes[] | string[];
  diets?: dietsTypes[] | string[];
}

export interface RecipesInterface {
  aggregateLikes?: number;
  analyzedInstructions?: {}[];
  cheap?: boolean;
  cookingMinutes?: number;
  creditsText?: string;
  cuisines?: [];
  dairyFree?: boolean;
  diets: dietsTypes[] | string[];
  dishTypes: dishTypes[] | string[];
  gaps?: string;
  glutenFree?: boolean;
  healthScore: number;
  id: number;
  image: string;
  imageType?: string;
  lowFodmap?: boolean;
  occasions?: [];
  preparationMinutes?: number;
  pricePerServing?: number;
  readyInMinutes?: number;
  servings?: number;
  sourceName?: string;
  sourceUrl?: string;
  spoonacularSourceUrl?: string;
  summary: string;
  sustainable?: boolean;
  title: string;
  vegan?: boolean;
  vegetarian?: boolean;
  veryHealthy?: boolean;
  veryPopular?: boolean;
  weightWatcherSmartPoints?: number;
}

export interface TheInitialState {
  currentPage: number;
  recipes: RecipesInterface[];
  recipeDetails: RecipesInterface | {};
  recipesWithFilters: RecipesInterface[];
  favorites: RecipesInterface[];
  diets: dietsTypes[] | string[];
}

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
