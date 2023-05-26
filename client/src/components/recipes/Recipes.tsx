import { RecipesInterface } from "../../Interfaces/Interfaces";
import Recipe from "../recipe/Recipe";

interface Props {
  recipes: RecipesInterface[];
}


const Recipes = ({ recipes }: Props): JSX.Element => {
  return (
    <div > 
    {recipes.length ? (
      <div>
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
        "CARGANDO"
        )}
    </div>
  );
};

export default Recipes;
