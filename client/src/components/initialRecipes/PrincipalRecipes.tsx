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
    <div className="text-center mt-10 text-gray-700">
      <div className="flex justify-center py-10">
        <hr className="w-[80%]" />
      </div>
      <div className="flex ml-20">
        <h1 className="text-2xl">Most chosen Recipes</h1>
      </div>
      <div className="flex flex-row justify-center items-center">
        {filteredRecipes.length ? (
          <div className="flex flex-row justify-center">
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
              />
            ))}
          </div>
        ) : (
          "CARGANDO..."
        )}
      </div>
      <div className="flex justify-center py-10">
        <hr className="w-[80%]" />
      </div>
    </div>
  );
};

export default PrincipalRecipes;
