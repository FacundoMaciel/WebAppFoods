import { getAllRecipesThunk } from "../../store/slices/recipes/thunk";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../../store/store";

import Recipes from "../../components/recipes/Recipes";
import Paginated from "../../components/paginated/Paginated";
import SearchBar from "../../components/searchBar/searchBar";

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
  }, []);

  //  console.log(recipes);

  return (
    <div className="pt-20 bg-gray-200">
      <div className="flex bg-gray-200 justify-center shadow-2xl">
        <section className="border w-[40%] my-5 ml-8 bg-white rounded-md shadow-2xl">
          <div className="flex justify-center">
            <SearchBar />
          </div>
          <div className="flex justify-center">
            {recipesPages ? <Recipes recipes={recipesPages} /> : "Loading..."}
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
        </section>
        <section className="flex justify-center text-center border w-[55%] my-5 mx-5 bg-white rounded-md shadow-2xl">
          <div className="w-auto h-auto"></div>
        </section>
      </div>
    </div>
  );
};

export default AllRecipes;

{
  /* <div className="flex bg-gray-300 p-20">
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
      <SearchBar />
      <section className="flex justify-center text-center border w-[55%] my-10 mx-5 bg-white rounded-md">
      <div className="w-auto h-auto">
        
      </div>
      </section>
    </div> */
}
