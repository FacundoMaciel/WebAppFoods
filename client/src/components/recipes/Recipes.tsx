import { TheRecipe } from "../../types/recipes";
import Recipe from "../recipe/Recipe";

interface Props {
  showRecipe: TheRecipe[];
}

const Recipes = ({ showRecipe }: Props): JSX.Element => {
  return (
    <>
    {showRecipe.length ? (
      <div className="w-full grid grid-cols-5 sm:grid-cols-3 gap-8 text-center py-2 px-12 sm:px-0 ">
        {showRecipe.map((element) => (
              <Recipe
                id={element.id}
                key={element.id}
                title={element.title}
                image={element.image}
                healthScore={element.healthScore}
                dishTypes={element.dishTypes}
                diets={element.diets}
              />
            ))}
      </div>
      ) : ( 
        null
        )}
    </>
  );
};

export default Recipes;
