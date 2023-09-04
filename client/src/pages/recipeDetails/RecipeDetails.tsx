import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RecipesInterface, TheModalRecipe } from "../../Interfaces/Interfaces";

import { AppDispatch, RootState } from "../../store/store";
import { getRecipeByIdThunk } from "../../store/slices/recipes/thunk";

import image from "../../assets/imageHome4.webp";
import { useParams } from "react-router-dom";
import { clearDetails } from "../../store/slices/recipes/recipesSlice";
import Swal from "sweetalert2";

const RecipeDetails: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();
  
  const theRecipe: RecipesInterface = useSelector(
    (state: RootState) => state.recipes.recipeDetails
  );

  useEffect(() => {
    dispatch(getRecipeByIdThunk(id as string));

    return () => {
      dispatch(clearDetails());
    };
  }, []);

  const theAlert = ({ image, steps }: TheModalRecipe) => {
    Swal.fire({
      width: "100%",
      background: "rgb(229 231 235)",
      color: "rgb(17 24 39)",
      title: "Recipe",
      imageUrl: image,
      buttonsStyling: true,
      imageWidth: 400,
      imageHeight: 300,
      footer: "Lets Go Cook!",
      imageAlt: "Recipe Photo",
      showCloseButton: true,
      showConfirmButton: false,
      html: "<ul>" + steps + "</ul>",
      
    });
  };
  let handleOnClick = () => {
    let recipeSteps = theRecipe.analyzedInstructions;
    for (let i = 0; i < recipeSteps.length; i++) {
      let steps = recipeSteps[i].steps.map(
        (el: any) => `<li>${el.step}</li>`
      )
      theAlert({ image, steps });
    }
  };
  // console.log(theRecipe);
  
  return (
    <div key={id} className="flex flex-col justify-center items-center min-h-screen bg-gray-200 pt-20 text-center text-gray-900">
      <h1 className="font-bold text-lg">Recipe</h1>
      <div className="bg-gray-200 pt-10">
        <h1 className="font-bold text-3xl text-gray-900 pb-10">
          {theRecipe.title}
        </h1>
      </div>
      <img
        className="md:w-[45%] md:h-[45%] w-full h-[h-40%]  border-2 border-gray-700 shadow-md"
        src={theRecipe.image}
        alt=""
      />
      <div className="flex flex-col mt-4 justify-center text-center">
      <h2 className="text-2xl font-bold text-gray-900 mt-2">Description</h2>
      <p className="bg-gray-200 pt-10 px-10">{theRecipe.summary?.replace(/<[^>]*>/g, "")}</p>
      </div>
      <div className="flex justify-center items-center bg-gray-200 pt-10">
        <div className="flex flex-col justify-center items-center mb-20">
          <img
            className="md:w-[45%] md:h-[45%] w-full h-[h-40%] border-2 border-gray-700 shadow-md"
            src={image}
            alt=""
          />
          <ul className="border-2 border-gray-700  w-full md:w-[30%] sm:w-[30%] shadow-xl mt-10 font-semibold p-4">Diets: 
            {theRecipe.diets?.map((el: string) => (
              <li className="font-light">{el}</li>
            ))}
          </ul>
          <ul className="border-2 border-gray-700 w-full md:w-[30%] sm:w-[30%] shadow-xl mt-10 font-semibold p-4">Plates: 
            {theRecipe.dishTypes?.map((el: string) => (
              <li className="font-light">{el}</li>
            ))}
          </ul>
          {/* <ul>
            {theSteps.steps?.map((el:any)=>(
              <li>{el.step}</li>
            ))}
          </ul> */}
          <div onClick={handleOnClick} 
          className="bg-gray-500 w-full md:w-[20%] sm:w-[20%] shadow-xl mt-10 font-medium p-4 text-gray-200 hover:text-gray-900 hover:bg-gray-200 hover:scale-105 transition duration-200 cursor-pointer">
              How to cook this plate?
              <span className="text-xs ml-1">&#x279c;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
