import { useEffect } from "react";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipesThunk } from "../../store/slices/recipes/thunk";
import FirstRecipes from "./FirstRecipes";

const PrincipalRecipes = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const { recipes } = useSelector((state: RootState) => state.recipes);

  useEffect(() => {
    dispatch(getAllRecipesThunk());
  }, [dispatch]);

  let filteredRecipes = recipes.slice(0, 3);
  // console.log(filteredRecipes);

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 text-center justify-center mt-10 text-white">
      <div className="flex mb-5 text-center justify-center">
        <h1 className="text-2xl">Most Popular Recipes</h1>
      </div>
      <div className="flex justify-center items-center">
        {filteredRecipes.length ? (
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
            {filteredRecipes.map((element) => (
              <FirstRecipes
                id={element.id}
                key={element.id}
                title={element.title}
                image={element.image}
                healthScore={element.healthScore}
                dishTypes={element.dishTypes}
                diets={element.diets}
                summary={element.summary}
                pricePerServing={element.pricePerServing}
              />
            ))}
          </div>
        ) : (
          "Loading..."
        )}
      </div>
      <div className="flex justify-center py-10">
        <hr className="w-[90%]" />
      </div>
    </div>
  );
};

export default PrincipalRecipes;
