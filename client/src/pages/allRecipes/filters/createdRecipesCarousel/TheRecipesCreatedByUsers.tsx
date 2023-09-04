
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

import TheCreatedItems from "./TheCreatedItems";




const TheRecipesCreatedByUsers = (): JSX.Element => {
    
    const { DBrecipes } = useSelector((state: RootState) => state.recipes);


  return (
    <div className="bg-white"> 
    <div className="inline-flex items-center justify-center w-full">
    <hr className="w-[85%] h-px my-8 border-0 rounded bg-gray-300" />
    <div className="absolute px-4 -translate-x-1/2 rounded-xl bg-gray-100 border-2 border-dashed shadow-xl left-1/2">
      <h1 className="text-center text-gray-900 p-2 font-bold ">
      🍥 Recipes By Users 🍥
      </h1>
    </div>
      </div>
      <div className="flex justify-center items-center">
    {DBrecipes.length ? (
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-16">
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
