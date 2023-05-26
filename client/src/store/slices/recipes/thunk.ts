import axios from "axios";
import { getAllRecipes } from "./recipesSlice";
import { AppThunk } from "../../store";


export function getAllRecipesThunk(): AppThunk {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:3000/api/allRecipes")
            let results = response.data.results
            dispatch(getAllRecipes(results))
            // console.log(results);
        } catch (e) {
            console.error(e)
        }
    }
}