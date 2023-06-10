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
    <div className="border w-[40%] p-2 ml-10">
        <div className="">
          <Recipes recipes={recipes} />
        </div>
      
    </div>
  );
};

export default AllRecipes;
