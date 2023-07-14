import { createSlice } from "@reduxjs/toolkit";
import { TheInitialState } from "../../../Interfaces/Interfaces";
import {
  getAlphabeticalOrderThunk,
  getHealthyScoreOrderThunk,
  getLikesOrderThunk,
  getPricePerServingOrderThunk,
} from "./thunk";

const initialState: TheInitialState = {
  recipes: [],
  recipeDetails: {},
  allRecipes: [],
  favorites: [],
  diets: [],
  currentPage: 1,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    getAllRecipes: (state, action) => {
      state.recipes = action.payload;
      state.allRecipes = action.payload;
    },
    getRecipeById: (state, action) => {
      state.recipeDetails = action.payload;
    },
    getRecipeByName: (state, action) => {
      state.recipes = action.payload;
    },
    alphabeticalOrder: (state, action) => {
      let recipesByAlphabet = getAlphabeticalOrderThunk(state.recipes, action);
      state.recipes = recipesByAlphabet;
    },
    healthyScoreOrder: (state, action) => {
      let recipesByHealthyScore = getHealthyScoreOrderThunk(
        state.recipes,
        action
      );
      state.recipes = recipesByHealthyScore;
    },
    pricePerServingOrder: (state, action) => {
      let recipesByPrice = getPricePerServingOrderThunk(state.recipes, action);
      state.recipes = recipesByPrice;
    },
    likesOrder: (state, action) => {
      let recipesByLikes = getLikesOrderThunk(state.recipes, action);
      state.recipes = recipesByLikes;
    },
    clearFilters: (state) => {
      state.recipes = state.allRecipes;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    clearDetails: (state) => {
      state.recipeDetails = {};
    },
  },
});

export const {
  getAllRecipes,
  getRecipeById,
  setCurrentPage,
  getRecipeByName,
  clearDetails,
  alphabeticalOrder,
  healthyScoreOrder,
  pricePerServingOrder,
  likesOrder,
  clearFilters,
} = recipesSlice.actions;

export default recipesSlice.reducer;
