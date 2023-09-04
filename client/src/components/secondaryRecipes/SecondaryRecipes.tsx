import { useSelector } from "react-redux";

import { RootState } from "../../store/store";
import brussels from "../../assets/brussels.jpg";
import icon from "../../assets/PageIc.png";

import { Link } from "react-router-dom";

const SecondRecipes = (): JSX.Element => {
  const { recipes } = useSelector((state: RootState) => state.recipes);

  let principalRecipe = recipes.filter((el) => el.diets.length).slice(12, 13);


  return (
    <div className="text-center py-2">
      <div className="mb-5 text-center justify-center">
        <h1 className="text-2xl text-gray-900 font-bold">
          People's favorite Recipe
        </h1>
      </div>
      {principalRecipe
        ? principalRecipe.map((rec) => (
            <div
              key={rec.id}
              className="flex md:hidden flex-col justify-center items-center min-h-screen"
            >
              <div className="rounded-lg overflow-hidden max-w-lg w-full">
                <img
                  src={brussels}
                  alt="Mountain"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {rec.title}
                  </h2>
                  <h1 className="text-gray-900 leading-tight mb-4">
                    {rec.diets.length ? (
                      <ul className="text-transform: capitalize text-xl text-gray-600">
                        Diets
                        {rec.diets.map((diet) => (
                          <li key={diet} className="text-gray-900 text-base">
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
                      <span className="text-gray-600 font-semibold">
                        {rec.dishTypes}
                      </span>
                    </div>
                    <span className="text-gray-600">
                      Healthy Score: {rec.healthScore}
                    </span>
                  </div>
                  <Link to={`recipeDetails/${rec.id}`}>
                  <button
                    type="button"
                    className="bg-transparent p-2 rounded-lg text-gray-600 hover:scale-105 hover:bg-gray-600 border-2 hover:text-[#20222f] transition duration-500 ease-in-out hover:font-bold mt-16"
                  >
                    More details
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        : null}

      <div className="md:flex hidden">
        {principalRecipe
          ? principalRecipe.map((rec) => (
              <div key={rec.id} className="container mx-auto my-2">
                <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
                  <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
                    <div className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom">
                      <img className="h-full w-full" src={brussels} alt="" />
                    </div>
                    <svg
                      className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                  </div>
                  <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                    <div className="p-4 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                      <h3 className="hidden md:block font-bold text-2xl text-gray-700">
                        {rec.title}
                      </h3>
                      <p className="text-gray-600 text-justify text-sm md:hidden lg:flex">
                        {rec.summary.replace(/<[^>]*>/g, "")}
                      </p>
                      <p className="text-gray-600 text-justify text-sm md:flex sm:hidden lg:hidden">
                        {rec.summary.replace(/<[^>]*>/g, "").slice(0, 300)}...
                      </p>
                      <Link to={`recipeDetails/${rec.id}`}>
                        <button className="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900">
                          See more details
                          <span className="text-xs ml-1">&#x279c;</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default SecondRecipes;
