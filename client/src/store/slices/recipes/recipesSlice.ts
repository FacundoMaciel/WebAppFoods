import { createSlice } from "@reduxjs/toolkit";
import { TheInitialState } from "../../../Interfaces/Interfaces";
import { getAlphabeticalOrderThunk, getHealthyScoreOrderThunk, getLikesOrderThunk, getPricePerServingOrderThunk } from "./thunk";

const initialState: TheInitialState = {
	recipes: [],
	recipeDetails: {},
	allRecipes: [],
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
			state.allRecipes = action.payload
        },
		getRecipeById: (state, action) => {
            state.recipeDetails = action.payload
        },
		getRecipeByName: (state, action) => {
            state.recipes = action.payload
        },
		alphabeticalOrder: (state, action) => {
			if (action.payload === "default") {
				state.recipes = state.allRecipes
				return
			}
			const recipesByAlphabet = getAlphabeticalOrderThunk(
                state.recipes,
                action
            )
            state.recipes = recipesByAlphabet
        },
		healthyScoreOrder: (state, action) => {
			if (action.payload === "default") {
				state.recipes = state.allRecipes
				return
			}
			const recipesByHealthyScore = getHealthyScoreOrderThunk(
                state.recipes,
                action
            )
            state.recipes = recipesByHealthyScore
		},
		pricePerServingOrder: (state, action) => {
			if (action.payload === "default") {
				state.recipes = state.allRecipes
				return
			}
			const recipesByPrice = getPricePerServingOrderThunk(
                state.recipes,
                action
            )
            state.recipes = recipesByPrice
		},
		likesOrder: (state, action) => {
			if (action.payload === "default") {
				state.recipes = state.allRecipes
				return
			}
			const recipesByLikes = getLikesOrderThunk(
                state.recipes,
                action
            )
            state.recipes = recipesByLikes
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
	alphabeticalOrder,
	healthyScoreOrder,
	pricePerServingOrder,
	likesOrder
} = recipesSlice.actions;

export default recipesSlice.reducer;
