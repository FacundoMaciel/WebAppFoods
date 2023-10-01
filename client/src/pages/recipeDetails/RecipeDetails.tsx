import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RecipesInterface, TheModalRecipe } from "../../Interfaces/Interfaces";

import { AppDispatch, RootState } from "../../store/store";
import { getRecipeByIdThunk } from "../../store/slices/recipes/thunk";

import image from "../../assets/food_gif.gif";
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
      <section className="bg-gray-200 pt-5 text-center">
        <h1 className="font-bold text-2xl text-gray-900 pb-20">
          {theRecipe.title}
        </h1>
      </section>
      <hr className="w-[85%] h-px my-8 border-0 rounded bg-gray-300" />
      <section className="flex m-4 justify-center w-[90%]">
        <figure className="md:w-[150em] md:h-[300px] w-full h-[h-40%] shadow-lg float-left mr-10">
          <img
            className="w-[100%] h-[100%]"
            src={theRecipe.image}
            alt="Reipe image"
            title={theRecipe.title}
          />
        </figure>
        <div className="text-center float-right">
          <h3 className="text-xl font-bold text-gray-900">Description</h3>
          <p className="p-5 pt-10">{theRecipe.summary?.replace(/<[^>]*>/g, "")}</p>
        </div>
      </section>
      <hr className="w-[85%] h-px my-8 border-0 rounded bg-gray-300" />
      <section className="flex justify-center items-center bg-gray-200 pt-10 w-[90%]">
        <div className="flex flex-row justify-center items-center mb-20">
          <ul className="w-[40%] h-[180px] shadow-md m-5 font-semibold p-4">Diets: 
            {theRecipe.diets?.map((el: string) => (
              <li className="font-light text-transform: capitalize">{el}</li>
            ))}
          </ul>
          <figure className="md:w-[65em] md:h-[400px] w-full h-[h-40%] float-right p-5">
          <img
            className="w-[100%] h-[100%] shadow-2xl"  
            src={image}
            alt=""
          />
          </figure>
          <ul className="w-[40%] h-[180px] shadow-md m-5 font-semibold p-4">Plates: 
            {theRecipe.dishTypes?.map((el: string) => (
              <li className="font-light text-transform: capitalize">{el}</li>
            ))}
          </ul>
        </div>
      </section>
          <div 
          onClick={handleOnClick} 
          className="bg-gray-500 w-full rounded-lg md:w-[20%] sm:w-[20%] shadow-xl mt-1 font-medium p-4 text-gray-200 hover:animate-pulse hover:text-gray-900 hover:bg-gray-200 hover:scale-105 transition duration-200 cursor-pointer">
              How to cook this plate ?
              <span className="text-xs ml-1">&#x279c;</span>
          </div>
          <hr className="w-[85%] h-px my-8 border-0 rounded bg-gray-300" />
          <br />
          <br />
    </div>
  );
};

export default RecipeDetails;
