export interface TheModalRecipe {
  healthScore?: number;
  id?: number;
  title?: string;
  image?: string;
  summary?: string;
  steps?:any;
  dishTypes?: dishTypes[] | string[];
  diets?: dietsTypes[] | string[];
}

export interface ActionInterface {
  type: string
  payload: Record
}

export interface RecipesInterface {
  aggregateLikes?: number;
  analyzedInstructions?: any;
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
  name?: string;
  vegan?: boolean;
  vegetarian?: boolean;
  veryHealthy?: boolean;
  veryPopular?: boolean;
  weightWatcherSmartPoints?: number;
}

export interface CreatedRecipeInterface {
  id: number;
  name: string;
  summary: string;
  steps: string;
  score: number;
  healthScore: number;
  image: string;
  diets: string | string[];
}

// export interface RecipesDetailsInterface {
//   analyzedInstructions?: {}[];
//   cheap?: boolean;
//   cookingMinutes?: number;
//   diets?: dietsTypes[] | string[];
//   dishTypes?: dishTypes[] | string[];
//   healthScore?: number;
//   id?: number;
//   image?: string;
//   summary?: string;
//   title?: string;
//   vegan?: boolean;
//   vegetarian?: boolean;
// }

export interface TheInitialState {
  currentPage: number
  recipes: RecipesInterface[]
  recipeDetails: RecipesInterface | Record<string>
  allRecipes: RecipesInterface[]
  DBrecipes: CreatedRecipeInterface[]
  diets: dietsTypes[] | string[]
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
