import { createSlice } from "@reduxjs/toolkit";
import { TheInitialState } from "../../../types/recipes";

const initialState: TheInitialState = {
	recipes: [],
	recipeDetails: {},
	recipesWithFilters: [],
	favorites: [],
	diets: []
};

const recipesSlice = createSlice({
	name: "recipes",
	initialState,
	reducers: {
		getAllRecipes: (state, action) => {
            state.recipes = action.payload
        },
	},
});

export const {
	getAllRecipes
} = recipesSlice.actions;

export default recipesSlice.reducer;
