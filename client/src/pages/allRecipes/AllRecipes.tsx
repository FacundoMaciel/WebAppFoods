import { getAllDBRecipesThunk, getAllRecipesThunk } from "../../store/slices/recipes/thunk";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../../store/store";

import Recipes from "../../components/recipes/Recipes";
import Paginated from "../../components/paginated/Paginated";
import FiltersAndSearch from "./FiltersAndSearch";

import SimpleRecipesCarousel from "./filters/simpleRecipesCarousel/SimpleRecipesCarousel";
//import CreatedRecipesCarousel from "./filters/createdRecipesCarousel/CreatedRecipesCarousel";
import TheRecipesCreatedByUsers from "./filters/createdRecipesCarousel/TheRecipesCreatedByUsers";

const AllRecipes = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const { recipes, currentPage } = useSelector(
    (state: RootState) => state.recipes
  );

  let [paginated, setPaginated] = useState(1);
  let [recipesPerPage] = useState(12);

  const lastRecipeLocation = paginated * recipesPerPage;
  const firstRecipeLocation = lastRecipeLocation - recipesPerPage;
  let moreElaboratedRecipes = recipes.filter(rec => rec.readyInMinutes && rec.readyInMinutes > 30)
  const recipesPages = moreElaboratedRecipes.slice(firstRecipeLocation, lastRecipeLocation);

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
    dispatch(getAllDBRecipesThunk());
  }, []);

  //  console.log(recipes);

  return (
    <>
      <div className="flex items-center w-full pt-14">
        <FiltersAndSearch />
      </div>
      {recipesPages.length === 1 ||
      recipesPages.length === 2 ||
      recipesPages.length === 3 ||
      recipesPages.length === 4 ||
      recipesPages.length === 5 ||
      recipesPages.length === 6 ||
      recipesPages.length === 7 ||
      recipesPages.length === 8 ||
      recipesPages.length === 9 ||
      recipesPages.length === 11 ? (
        <div className="hidden"></div>
      ) : (
        <div className="flex justify-center items-center w-full text-center bg-white">
          <Paginated
            recipes={recipesPerPage}
            paginated={paginated}
            recipesPerPage={recipesPerPage}
            thePage={thePage}
            nextPage={nextPage}
            previousPage={previousPage}
            currentPage={currentPage}
          />
        </div>
        )}
      <div className="flex justify-center items-center">
        {recipesPages ? <Recipes recipes={recipesPages} /> : "Loading..."}
      </div>
      <div className="flex justify-center items-center">
        <TheRecipesCreatedByUsers />
      </div>
      <div className="container mx-auto p-10">
      <SimpleRecipesCarousel />
      </div>
    </>
  );
};

export default AllRecipes;
