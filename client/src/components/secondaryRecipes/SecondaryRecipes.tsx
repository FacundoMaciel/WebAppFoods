import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AppDispatch, RootState } from "../../store/store";
import { getAllRecipesThunk } from "../../store/slices/recipes/thunk";
import brussels from "../../assets/brussels.jpg";

import Swal from "sweetalert2";
import { TheModalRecipe } from "../../Interfaces/Interfaces";

const SecondRecipes = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const { recipes } = useSelector((state: RootState) => state.recipes);

  useEffect(() => {
    dispatch(getAllRecipesThunk());
  }, [dispatch]);

  let principalRecipe = recipes.filter((el) => el.diets.length).slice(12, 13);

  const theAlert = ({ healthScore, title, image, summary }: TheModalRecipe) => {
    Swal.fire({
      width: "80%",
      background: "#20222f",
      color: "white",
      title: title,
      text: summary,
      imageUrl: image,
      buttonsStyling: true,
      imageWidth: 300,
      imageHeight: 200,
      footer: healthScore + " " + " " + 
      " (Healthy Score)",
      imageAlt: "Recipe Photo",
      showCloseButton: true,
      showConfirmButton: false,
    });
  };
  let handleOnClick = () => {
    let favoriteRecipes = principalRecipe;
    for (let i = 0; i < favoriteRecipes.length; i++) {
      let healthScore = favoriteRecipes[i].healthScore;
      let title = favoriteRecipes[i].title;
      let image = favoriteRecipes[i].image;
      let summary = favoriteRecipes[i].summary.replace(/<[^>]*>/g, "");
      theAlert({ healthScore, title, image, summary });
    }
  };

  return (
    <div className="text-center py-10">
      <div className="flex mb-5 text-center justify-center">
        <h1 className="text-2xl text-white">People's favorite Recipe</h1>
      </div>
      <div className="flex">
        {principalRecipe
          ? principalRecipe.map((rec) => (
              <div key={rec.id} className="flex">
                <div className="w-[50%]">
                  <Link to={"/"}>
                    <img className="w-screen h-full" src={brussels} alt="" />
                  </Link>
                </div>
                <div className="p-5 w-[50%] h-full mb-3 font-normal text-[#accc7b] bg-[#464753]">
                  <h1 className="text-white text-2xl">{rec.title}</h1>
                  {rec.diets.length ? (
                    <ul className="text-transform: capitalize text-xl">
                      Diets
                      {rec.diets.map((diet) => (
                        <li key={diet} className="text-white text-base">
                          {diet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <hr />
                  <h3 className="text-transform: capitalize text-xl"> Dish Types
                    <h2 className="text-white text-base">{rec.dishTypes}</h2>
                  </h3>
                  <hr />
                  <h3 className="text-transform: capitalize text-xl"> Price per Serving
                   <h2 className="text-white text-base">${rec.pricePerServing}</h2>
                    </h3>
                <button
                  onClick={handleOnClick}
                  type="button"
                  className="bg-transparent p-2 rounded-lg text-[#accc7b] hover:scale-105 hover:bg-[#accc7b] border-2 hover:text-[#20222f] hover:font-bold duration-300 mt-16"
                >
                  More details
                </button>
                </div>
              </div>
            ))
          : null}
      </div>
      <div className="flex justify-center mt-8 pt-8">
        <hr className="w-[90%]" />
      </div>
    </div>
  );
};

export default SecondRecipes;
