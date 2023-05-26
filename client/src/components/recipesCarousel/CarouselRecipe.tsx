import { Link } from "react-router-dom";
import { RecipesInterface } from "../../Interfaces/Interfaces";

const CarouselRecipe = ({
  id,
  image,
  title,
  healthScore,
}: RecipesInterface): JSX.Element => {
  return (
    <div key={id} className="flex flex-wrap justify-center p-7 mb-5 m-5">
      <div className="shadow-xl w-96 bg-white rounded-md">
        <img
          className="w-full rounded-t-lg shadow-2xl "
          src={image}
          alt="NotFOund"
        />
        <div className="place-content-center ml-2 px-5 pb-5">
          <h3 className="text-black font-semibold text-xl tracking-tight mt-3 flex flex-row justify-around">
            {title.slice(0, 23)}
          </h3>
          <p className="text-center text-green-700"> HealtScore </p> 
          <div className="flex items-center justify-center">
            <span className="text-gray-700 bg-gray-300 w-[30%] shadow-xl font-medium rounded-lg text-sm px-1 py-1 mt-3 text-center hover:bg-gradient-to-br from-gray-400 to-green-800">
              {healthScore}
            </span>{" "}
          </div>
          <Link to={"/"}>
            <div className="flex items-center justify-center mt-3 mb-5">
              <button className="bg-gray-300 p-3 w-[50%] hover:scale-110 duration-300 rounded-lg hover:bg-gradient-to-br from-gray-400 to-gray-700 text-gray-700">
                More Info
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselRecipe;
