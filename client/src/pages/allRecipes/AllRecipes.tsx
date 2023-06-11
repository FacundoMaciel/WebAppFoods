import { getAllRecipesThunk } from "../../store/slices/recipes/thunk";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../../store/store";

import Recipes from "../../components/recipes/Recipes";
import RecipeDetails from "../../components/recipeDetails/RecipeDetails";
import Paginated from "../../components/paginated/Paginated";

const AllRecipes = () => {
  const dispatch: AppDispatch = useDispatch();
  const { recipes, currentPage } = useSelector(
    (state: RootState) => state.recipes
  );
  // const [selection, setSelection] = useState("Loading");

  let [paginated, setPaginated] = useState(1);
  let [recipesPerPage] = useState(10);

  const lastRecipeLocation = paginated * recipesPerPage;
  const firstRecipeLocation = lastRecipeLocation - recipesPerPage;
  const recipesPages = recipes.slice(firstRecipeLocation, lastRecipeLocation);

  const nextPage = function () {
    setPaginated(paginated + 1);
  };
  const previousPage = function () {
    setPaginated(paginated - 1);
  };

  const thePage = (pageNumber: number) => {
    setPaginated(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllRecipesThunk());
  }, [dispatch]);

  //  console.log(recipes);

  return (
    <div className="flex bg-gray-300 p-20">
      <section className="border w-[40%] my-10 ml-8 bg-white rounded-md">
        <div className="flex justify-center">{recipesPages ? <Recipes recipes={recipesPages} /> : "Loading..."}</div>
        <Paginated
          recipes={recipesPerPage}
          paginated={paginated}
          recipesPerPage={recipesPerPage}
          thePage={thePage}
          nextPage={nextPage}
          previousPage={previousPage}
          currentPage={currentPage}
        />
      </section>
      <section className="flex justify-center text-center border w-[55%] my-10 mx-5 bg-white rounded-md">
        <RecipeDetails />
      </section>
    </div>
  );
};

export default AllRecipes;
