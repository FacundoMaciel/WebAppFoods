import { createSlice } from "@reduxjs/toolkit";
import { TheInitialState } from "../../../Interfaces/Interfaces";
import { getAlphabeticalOrderThunk } from "./thunk";

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
			state.recipesWithFilters = action.payload
        },
		getRecipeById: (state, action) => {
            state.recipeDetails = action.payload
        },
		getRecipeByName: (state, action) => {
            state.recipes = action.payload
        },
		alphabeticalOrder: (state, action) => {
			const alphabeticVideogames = getAlphabeticalOrderThunk(
                state.recipes,
                action
            )
            state.recipes = alphabeticVideogames
            state.recipes = action.payload
        },
		setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
		clearDetails: (state) => {
            state.recipeDetails = {}
        },
	},
});

export const {
	getAllRecipes,
	getRecipeById,
	setCurrentPage,
	getRecipeByName,
	clearDetails,
	alphabeticalOrder
} = recipesSlice.actions;

export default recipesSlice.reducer;
