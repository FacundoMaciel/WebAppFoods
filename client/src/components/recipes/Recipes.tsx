import { RecipesInterface } from "../../Interfaces/Interfaces";
import Recipe from "../recipe/Recipe";

interface Props {
  recipes: RecipesInterface[];
}


const Recipes = ({ recipes }: Props): JSX.Element => {
  return (
    <div> 
        <h1 className="text-gray-700 text-center text-xl font-bold bg-gray-200 my-5">Recipes</h1>
    {recipes.length ? (
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-16 p-5 mb-20">
        {recipes.map((element) => (
              <Recipe
                id={element.id}
                key={element.id}
                title={element.title}
                image={element.image}
                healthScore={element.healthScore}
                dishTypes={element.dishTypes}
                diets={element.diets}
                summary={element.summary}
                aggregateLikes={element.aggregateLikes}
                readyInMinutes={element.readyInMinutes}
              />
              ))}
      </div>
      ) : ( 
        "Loading..."
        )}
    </div>
  );
};

export default Recipes;
