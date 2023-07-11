import { getAllRecipesThunk } from "../../store/slices/recipes/thunk";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../../store/store";

import Recipes from "../../components/recipes/Recipes";
import Paginated from "../../components/paginated/Paginated";
import FiltersAndSearch from "./FiltersAndSearch";

import banner from "../../assets/images.png"

const AllRecipes = () => {
  const dispatch: AppDispatch = useDispatch();
  const { recipes, currentPage } = useSelector(
    (state: RootState) => state.recipes
  );

  let [paginated, setPaginated] = useState(1);
  let [recipesPerPage] = useState(12);

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
  }, []);

  //  console.log(recipes);

  return (
    <>
      <div className="flex text-center justify-center items-center w-full h-screen opacity-90">
        <div className="flex w-full h-screen justify-start text-center items-center">
          <img className="" src={banner} alt=""/>
          <h1 className="absolute center text-3xl p-4 text-gray-200 md:text-4xl lg:text-6xl">
            All Recipes
          </h1>
        </div>
      </div>
      <div className="flex items-center w-full">
        <FiltersAndSearch />
      </div>
          <Paginated
            recipes={recipesPerPage}
            paginated={paginated}
            recipesPerPage={recipesPerPage}
            thePage={thePage}
            nextPage={nextPage}
            previousPage={previousPage}
            currentPage={currentPage}
          />
      <div className="flex justify-center items-center">
            {recipesPages ? <Recipes recipes={recipesPages} /> : "Loading..."}
      </div>
    </>
  );
};

export default AllRecipes;
