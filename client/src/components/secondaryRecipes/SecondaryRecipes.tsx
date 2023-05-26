import { useEffect } from "react";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipesThunk } from "../../store/slices/recipes/thunk";
import { Link } from "react-router-dom";

const SecondRecipes = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const { recipes } = useSelector((state: RootState) => state.recipes);

  useEffect(() => {
    dispatch(getAllRecipesThunk());
  }, [dispatch]);

  let principalRecipe = recipes.slice(13, 14);

  return (
    <div className="text-center p-5">
      <div className="flex ml-6">
      <h1 className="text-2xl text-gray-700">People's favorite Recipe</h1>
      </div>
      <div className="flex p-6">
        {principalRecipe
          ? principalRecipe.map((rec) => (
              <div className="flex flex-grid">
                <div className="flex">
                  <Link to={"/"}>
                    <img className="w-screen shadow-xl" src={rec.image} alt="" />
                  </Link>
                </div>
                <div className="flex p-5">
                  <p className="mb-3 font-normal text-gray-700 bg-gray-200 p-5 rounded-md">
                    {rec.summary.replace(/<[^>]*>/g, "")}
                  </p>
                </div>
                <button className="bg-gray-200 p-2 rounded-lg text-gray-700 hover:scale-110 hover:bg-gray-900 hover:text-white hover:font-bold duration-300 h-[70%] mt-7">More details</button>
              </div>
            ))
          : null}
      </div>
      <div className="flex justify-center py-10">
    <hr className="w-[80%]" />
    </div>
    </div>
  );
};

export default SecondRecipes;
