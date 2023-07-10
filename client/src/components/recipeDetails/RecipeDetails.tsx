import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RecipesInterface } from "../../Interfaces/Interfaces";

import { AppDispatch, RootState } from "../../store/store";
import { getRecipeByIdThunk } from "../../store/slices/recipes/thunk";

import image from "../../assets/imageHome4.webp";
import { useParams } from "react-router-dom";
import { clearDetails } from "../../store/slices/recipes/recipesSlice";

const RecipeDetails: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();
  //   const theRecipe: RecipesInterface = useSelector(
  //     (state: RootState) => state.recipes.recipeDetails
  // )
  const theRecipe: RecipesInterface = useSelector(
    (state: RootState) => state.recipes.recipeDetails
  );

  useEffect(() => {
    dispatch(getRecipeByIdThunk(id as string));

    return () => {
      dispatch(clearDetails());
    };
  }, []);

  console.log(theRecipe);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-200 pt-20 text-center text-gray-900">
      <h1 className="font-bold text-lg">Recipe</h1>
      <div className="bg-gray-200 pt-10">
        <h1 className="font-bold text-3xl text-gray-900 pb-10">
          {theRecipe.title}
        </h1>
      </div>
      <img
        className="md:w-[60%] md:h-[75%] w-full h-[h-40%]"
        src={theRecipe.image}
        alt=""
      />
      <h2 className="text-2xl font-bold text-gray-900 mt-2">Description</h2>
      <p className="bg-gray-200 pt-10 px-2">{theRecipe.summary?.replace(/<[^>]*>/g, "")}</p>

      <div className="flex justify-center items-center bg-gray-200 pt-10">
        <div className="flex flex-col justify-center items-center ">
          <img
            className="md:w-[45%] md:h-[45%] w-full h-[h-40%]"
            src={image}
            alt=""
          />
          <h1 className="font-bold text-xl py-4">{theRecipe.title}</h1>
          <ul className="border-2 border-white w-[90%] shadow-xl">
            {theRecipe.diets?.map((el: string) => (
              <li>{el}</li>
            ))}
          </ul>
          <ul className="border-2 border-white w-[90%] shadow-xl">
            {theRecipe.dishTypes?.map((el: string) => (
              <li>{el}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;

{
  /* <div className="pt-20 text-center text-gray-900">
        <h1 className="font-bold text-lg">Recipe</h1>
        <div className="bg-gray-200 pt-20">
          <h1 className="font-bold text-3xl text-gray-900">
            Brussel Sprouts with Roasted Red Peppers and Cider Vine
          </h1>
        </div>
        <div
          key=""
          className="flex flex-col justify-center items-center min-h-screen bg-gray-200"
        >
          <div className="rounded-lg overflow-hidden max-w-lg w-full">
            <img
              src={brussels}
              alt="RecipeImg"
              className="w-full h-90 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Description
              </h2>
              <p>
                You may have noticed some changes around here. Most noticeably,
                where is Appetite for China and why is it now called Cinnamon
                Society? When I first started this blog in 2007, I had recently
                moved from New York to Beijing and was exploring China for the
                first time as a temporary resident. I wanted a blog to record my
                travels around the country and my experiments in the kitchen to
                reverse engineer all the new dishes I was trying. Because of
                Appetite for China, I made a bunch of new friends in the food
                world, started teaching cooking classes, and eventually started
                writing cookbooks. But this need to change the blog’s name has
                been 12 years in the making. When I moved back to the US in
                2009, I knew I wanted to write about more than just Chinese
                food. (And I had already been doing that for newspapers and
                magazines.) But my partner at the time, who is now still a good
                a friend, kept telling me that changing the site name would hurt
                my SEO and to just leave it.
              </p>
              <h1 className="text-gray-900 leading-tight mb-4">
                <ul className="text-transform: capitalize text-xl text-gray-600">
                  Diets
                  <li key="" className="text-gray-900 text-base">
                    as
                  </li>
                </ul>
                <hr />
              </h1>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src="{icon}"
                    alt="Avatar"
                    className="w-8 h-8 rounded-full mr-2 object-cover"
                  />
                  <span className="text-gray-600 font-semibold">""</span>
                </div>
                <span className="text-gray-600">Healthy Score:</span>
              </div>
            </div>
          </div>
        </div>
      </div> */
}
