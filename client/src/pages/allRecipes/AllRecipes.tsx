import { getAllRecipesThunk } from "../../store/slices/recipes/thunk";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../../store/store";

import Recipes from "../../components/recipes/Recipes";
import Paginated from "../../components/paginated/Paginated";
import FiltersAndSearch from "./FiltersAndSearch";

import banner from "../../assets/images.png";
import SimpleRecipesCarousel from "./filters/simpleRecipesCarousel/SimpleRecipesCarousel";

const AllRecipes = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const { recipes, currentPage } = useSelector(
    (state: RootState) => state.recipes
  );

  let [paginated, setPaginated] = useState(1);
  let [recipesPerPage] = useState(12);

  const lastRecipeLocation = paginated * recipesPerPage;
  const firstRecipeLocation = lastRecipeLocation - recipesPerPage;
  const recipesPages = recipes.filter((r) =>
  r.readyInMinutes ? r.readyInMinutes > 30 : r
).slice(firstRecipeLocation, lastRecipeLocation);

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
      <div className="flex relative text-center justify-center items-center w-full h-screen opacity-90 bg-gray-100">
        <div className="flex w-full h-screen justify-start text-center items-center">
          <img className="" src={banner} alt="" />
          <h1 className="absolute center text-3xl italic p-4 text-gray-200 md:text-4xl lg:text-6xl">
            All Recipes
          </h1>
        </div>
      </div>
      <div className="flex items-center w-full">
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
        <div className="flex justify-center items-center text-center bg-gray-100">
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
      <div className="container mx-auto p-10">
      <SimpleRecipesCarousel />
      </div>
    </>
  );
};

export default AllRecipes;
