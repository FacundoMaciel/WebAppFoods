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
      <div className="w-96 bg-white rounded-md">
        <img
          className="w-full rounded-t-lg"
          src={image}
          alt="NotFOund"
        />
        <div className="place-content-center ml-2 px-5 pb-5">
          <h3 className="text-gray-400 font-semibold text-xl tracking-tight mt-3 flex flex-row justify-around">
            {title.slice(0, 23)}
          </h3>
          <p className="text-center text-[#1995AD]"> Healthy Score </p> 
          <div className="flex items-center justify-center">
            <span className="text-[#1995AD] text-lg w-[30%] font-medium rounded-lg px-1 py-1 text-center">
              {healthScore}
            </span>{" "}
          </div>
          <Link to={"/"}>
            <div className="flex items-center justify-center mt-3 mb-5">
              <button className="bg-gray-300 p-1 w-[30%] hover:scale-110 duration-300 rounded-lg hover:bg-[#A1D6E2] hover:text-white text-gray-700">
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
