import { Link } from "react-router-dom";

import hat from "../../assets/PageIc.png";

const HeaderComponent = () => {
  return (
    <div>
      <div
        className="flex text-end justify-end items-start w-full h-screen 
    bg-[url('src/assets/LogoHealthy.png')] bg-cover bg-center bg-no-repeat overflow-hidden"
      >
        <div className="hidden md:flex w-[35%] h-[70%] justify-start text-start items-end ">
          <h1 className="text-3xl p-4 mt-10 text-gray-900 md:text-4xl lg:text-7xl">
            Soy Henry Food Page
            <p className="flex text-base text-gray-900 mt-5 md:text-xl">
              This is your favorite foods page for search an amazing plate or
              Create Your Unique Recipe!
            </p>
            <Link to={"/allRecipes"}>
            <button className="text-base mt-4 p-2 shadow-2xl shadow-black bg-gray-900 text-white rounded-md hover:bg-white hover:text-gray-900 hover:scale-105 trasition duration-300 ease-in-out
            md:text-xl
            ">
              View All Recipes
            </button>
            </Link>
          </h1>
        </div>
        <div className="md:hidden flex w-[35%] h-[150%] justify-start text-start items-center p-2">
          <h1 className="text-xl mt-10 text-gray-900">
            Soy Henry Food Page
            <Link to={"/allRecipes"}>
            <button type="button" className="text-sm p-2 shadow-2xl shadow-black bg-gray-900 text-white rounded-md hover:bg-white hover:text-gray-900 hover:scale-105 trasition duration-300 ease-in-out">
              View All Recipes
            </button>
            </Link>
          </h1>
        </div>
      </div>
      <div className="inline-flex items-center justify-center w-full mt-10">
        <hr className="w-[85%] h-px my-8 border-0 rounded bg-black" />
        <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2">
          <img src={hat} className="w-6 h-6"></img>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
