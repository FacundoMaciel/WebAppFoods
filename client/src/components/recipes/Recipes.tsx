import { RecipesInterface } from "../../Interfaces/Interfaces";
import Recipe from "../recipe/Recipe";

interface Props {
  recipes: RecipesInterface[];
}


const Recipes = ({ recipes }: Props): JSX.Element => {
  return (
    <> 
    {recipes.length ? (
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-1 pt-20 pb-10 lg:pt-20 lg:pb-20">
        <h1 className="text-gray-700 text-center text-xl font-bold bg-[#A1D6E2] mt-15">All Recipes</h1>
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
              />
              ))}
      </div>
      ) : ( 
        "Loading..."
        )}
    </>
  );
};

export default Recipes;
