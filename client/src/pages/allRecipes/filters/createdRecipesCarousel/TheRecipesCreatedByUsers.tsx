
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

import TheCreatedItems from "./TheCreatedItems";




const TheRecipesCreatedByUsers = (): JSX.Element => {
    
    const { DBrecipes } = useSelector((state: RootState) => state.recipes);


  return (
    <div className="bg-gray-100"> 
      <h1 className="text-center text-2xl text-gray-900 font-bold shadow-lg rounded-lg mb-5">
      Recipes By Users
      </h1>
      <div className="container my-12 mx-auto px-4 md:px-12">
    {DBrecipes.length ? (
      <div className="flex flex-wrap mx-1 lg:-mx-4">
        {DBrecipes?.map((element) => (
              <TheCreatedItems
              id={element.id}
              key={element.id}
              name={element.name}
              image={element.image}
              healthScore={element.healthScore}
              diets={element.diets}
              summary={element.summary}
              steps={element.steps}
              score={element.score}
              />
              ))}
      </div>
      
      ) : ( 
        "Loading..."
        )}
        </div>
    </div>
  );
};

export default TheRecipesCreatedByUsers;
