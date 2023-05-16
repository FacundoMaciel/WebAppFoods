import { getAllRecipesThunk } from "../../store/slices/recipes/thunk";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import Recipes from "../../components/recipes/Recipes";
import Paginated from "../../components/paginated/Paginated";

const AllRecipes = () => {
  const dispatch: AppDispatch = useDispatch();
  const {recipesWithFilters} = useSelector((state: RootState) => state.recipes);

  let [paginated, setPaginated] = useState(1);
  let [recipesPerPage] = useState(10);
    
    const lastRecipeLocation = paginated * recipesPerPage;
    const firstRecipeLocation = lastRecipeLocation - recipesPerPage;
    const recipesInOnePage = recipesWithFilters.slice(firstRecipeLocation, lastRecipeLocation);

    const nextPage = function (){
      setPaginated(paginated+1)
 }
 const previousPage = function (){
      setPaginated(paginated-1)
 }

 const thePaging = (pageNumber: number)=>{
     setPaginated(pageNumber);
 };

  useEffect(() => {
    dispatch(getAllRecipesThunk());
  }, [dispatch]);
  

  // console.log(showRecipes);

  return (
    <div className="max-w-screen-lg mx-auto p-4 pt-20 flex flex-col justify-center w-full h-full">
      <Recipes showRecipe={recipesInOnePage} />
      <Paginated
              paginated={paginated}
              recipesPerPage={recipesPerPage}
              thePaging={thePaging}
              nextPage={nextPage}
              previousPage={previousPage}
              theRecipes={recipesWithFilters}
              page={paginated}
            />
    </div>
  );
};

export default AllRecipes;
