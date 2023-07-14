import { RecipesInterface } from "../../Interfaces/Interfaces";
import Recipe from "../recipe/Recipe";

interface Props {
  recipes: RecipesInterface[];
}


const Recipes = ({ recipes }: Props): JSX.Element => {
  return (
    <div className="bg-gray-100"> 
        <div className="inline-flex items-center justify-center w-full mt-10">
        <hr className="w-[85%] h-px my-8 border-0 rounded bg-gray-900" />
        <div className="absolute px-4 -translate-x-1/2 bg-pink-300 rounded-xl shadow-xl left-1/2">
          <h1 className="font-bold text-gray-900">∼ Recipes ∼</h1>
        </div>
      </div>
    {recipes.length ? (
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-16 p-5 mb-20">
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
                pricePerServing={element.pricePerServing}
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
