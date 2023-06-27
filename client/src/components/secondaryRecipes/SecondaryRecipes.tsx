import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AppDispatch, RootState } from "../../store/store";
import { getAllRecipesThunk } from "../../store/slices/recipes/thunk";
import brussels from "../../assets/brussels.jpg";
import icon from "../../assets/PageIc.png";

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
      footer: healthScore + " " + " " + " (Healthy Score)",
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
      <div className="mb-5 text-center justify-center">
        <h1 className="text-2xl text-white">People's favorite Recipe</h1>
      </div>
      {principalRecipe
        ? principalRecipe.map((rec) => (
            <div key={rec.id} className="flex md:hidden flex-col justify-center items-center min-h-screen">
              <div className="rounded-lg overflow-hidden max-w-lg w-full">
                <img
                  src={brussels}
                  alt="Mountain"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {rec.title}
                  </h2>
                  <h1 className="text-white leading-tight mb-4">
                    {rec.diets.length ? (
                      <ul className="text-transform: capitalize text-xl text-[#accc7b]">
                        Diets
                        {rec.diets.map((diet) => (
                          <li key={diet} className="text-white text-base">
                            {diet}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <hr />
                  </h1>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src={icon}
                        alt="Avatar"
                        className="w-8 h-8 rounded-full mr-2 object-cover"
                      />
                      <span className="text-[#accc7b] font-semibold">
                        {rec.dishTypes}
                      </span>
                    </div>
                    <span className="text-[#accc7b]">
                      Healthy Score: {rec.healthScore}
                    </span>
                  </div>
                  <button
                    onClick={handleOnClick}
                    type="button"
                    className="bg-transparent p-2 rounded-lg text-[#accc7b] hover:scale-105 hover:bg-[#accc7b] border-2 hover:text-[#20222f] transition duration-500 ease-in-out hover:font-bold mt-16"
                  >
                    More details
                  </button>
                </div>
              </div>
            </div>
          ))
        : null}

      <div className="md:flex hidden">
        {principalRecipe
          ? principalRecipe.map((rec) => (
              <div key={rec.id} className="flex">
                <div className="w-[50%] md:shrink-0">
                  <Link to={"/"}>
                    <img
                      className="w-48 h-full md:h-full md:w-screen"
                      src={brussels}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="p-5 w-[50%] h-full mb-3 font-normal text-[#accc7b]">
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
                  <h3 className="text-transform: capitalize text-xl">
                    {" "}
                    Dish Types
                    <p className="text-white text-base">{rec.dishTypes}</p>
                  </h3>
                  <hr />
                  <h3 className="text-transform: capitalize text-xl">
                    {" "}
                    Price per Serving
                    <p className="text-white text-base">
                      ${rec.pricePerServing}
                    </p>
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
