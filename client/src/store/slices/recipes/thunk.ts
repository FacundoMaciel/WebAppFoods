import axios from "axios";
import { getAllRecipes, getRecipeByName, getRecipeById } from "./recipesSlice";
import { AppThunk } from "../../store";


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
      const response = await axios.get(`http://localhost:3000/api/recipe/${id}`);
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
      const response = await axios.get(`http://localhost:3000/api/recipe?name=${name}`);
      dispatch(getRecipeByName(response.data));
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };
}