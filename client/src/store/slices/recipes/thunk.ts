import axios from "axios";

import { AppThunk } from "../../store";

import {
  ActionInterface,
  RecipesInterface,
} from "../../../Interfaces/Interfaces";

import { getAllRecipes, getRecipeByName, getRecipeById } from "./recipesSlice";

export function getAllRecipesThunk(): AppThunk {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3000/api/allRecipes");
      let results = response.data.results;
      dispatch(getAllRecipes(results));
      // console.log(results);
    } catch (e) {
      console.error(e);
    }
  };
}

export function getRecipeByIdThunk(id: string): AppThunk {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/recipe/${id}`
      );
      // let results = response.data.results;
      dispatch(getRecipeById(response.data[0]));
      // console.log(results);
    } catch (e) {
      console.error(e);
    }
  };
}

export function getRecipeByNameThunk(name: string): AppThunk {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/recipe?name=${name}`
      );
      dispatch(getRecipeByName(response.data));
      // console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };
}

export function getAlphabeticalOrderThunk(
  rec: RecipesInterface[],
  action: ActionInterface
): RecipesInterface[] {
  rec.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return action.payload === "asc" ? -1 : 1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return action.payload === "asc" ? 1 : -1;
    }
    return 0;
  });
  return rec;
};

export function getHealthyScoreOrderThunk(
  rec: RecipesInterface[],
  action: ActionInterface
): RecipesInterface[] {
  rec.sort((a, b) => {
    if (a.healthScore < b.healthScore) {
      return action.payload === "asc" ? -1 : 1;
    } else if (a.healthScore > b.healthScore) {
      return action.payload === "asc" ? 1 : -1;
    } else return 0;
  });
  return rec;
};

export function getPricePerServingOrderThunk(
  rec: RecipesInterface[],
  action: ActionInterface
): RecipesInterface[] {
  rec.sort((a, b) => {
    if (a.pricePerServing && b.pricePerServing && a.pricePerServing < b.pricePerServing) {
      return action.payload === "asc" ? -1 : 1;
    } else if (a.pricePerServing && b.pricePerServing && a.pricePerServing > b.pricePerServing) {
      return action.payload === "asc" ? 1 : -1;
    } else return 0;
  });
  return rec;
};

export function getLikesOrderThunk(
  rec: RecipesInterface[],
  action: ActionInterface
): RecipesInterface[] {
  rec.sort((a, b) => {
    if (a.aggregateLikes && b.aggregateLikes && a.aggregateLikes < b.aggregateLikes) {
      return action.payload === "asc" ? -1 : 1;
    } else if (a.aggregateLikes && b.aggregateLikes && a.aggregateLikes > b.aggregateLikes) {
      return action.payload === "asc" ? 1 : -1;
    } else return 0;
  });
  return rec;
};