import { getAllRecipesThunk } from "../../store/slices/recipes/thunk";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import Recipes from "../../components/recipes/Recipes";

const AllRecipes = () => {
  const dispatch: AppDispatch = useDispatch();
  const {recipes} = useSelector((state: RootState) => state.recipes);


  useEffect(() => {
    dispatch(getAllRecipesThunk());
  }, [dispatch]);
  

   console.log(recipes);

  return (
    <div className="container mx-auto px-20">
        <div className="grid grid-cols-8 gap-8 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20">
          <Recipes recipes={recipes} />
        </div>
      
    </div>
  );
};

export default AllRecipes;
