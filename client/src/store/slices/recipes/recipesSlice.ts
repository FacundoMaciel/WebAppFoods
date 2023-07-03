import { createSlice } from "@reduxjs/toolkit";
import { TheInitialState } from "../../../Interfaces/Interfaces";

const initialState: TheInitialState = {
	recipes: [],
	recipeDetails: {},
	recipesWithFilters: [],
	favorites: [],
	diets: [],
	currentPage: 1
};

const recipesSlice = createSlice({
	name: "recipes",
	initialState,
	reducers: {
		getAllRecipes: (state, action) => {
            state.recipes = action.payload
        },
		getRecipeById: (state, action) => {
            state.recipeDetails = action.payload
        },
		getRecipeByName: (state, action) => {
            state.recipesWithFilters = action.payload
        },
		setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
	},
});

export const {
	getAllRecipes,
	getRecipeById,
	setCurrentPage,
	getRecipeByName
} = recipesSlice.actions;

export default recipesSlice.reducer;
