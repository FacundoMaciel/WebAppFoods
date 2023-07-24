import { Link } from "react-router-dom";
import { CreatedRecipeInterface } from "../../../../Interfaces/Interfaces";


const CarouselItems = ({
  id,
  image,
  name,
  score,
  healthScore,
}: CreatedRecipeInterface): JSX.Element => {
  return (
    <div key={id} className="flex justify-center p-4 mb-5 m-5">
      <div className="w-96">
        <img
          className="w-full rounded-lg"
          src={image}
          alt="NotFOund"
        />
        <div className="place-content-center text-center ml-2 px-5 pb-5">
          <h3 className="text-gray-900 text-xl hidden md:flex tracking-tight mt-3 flex-row justify-around">
            {name}
          </h3>
          <p className="text-center text-gray-600"> {healthScore} </p> 
          <div className="flex items-center justify-center">
            <span className="text-gray-900 text-lg w-[30%] rounded-lg px-1 py-1 text-center">
              {score}
            </span>{" "}
          </div>
          <Link to={"/"}>
            <div className="flex items-center justify-center mt-3 mb-5">
              <button className="bg-[#DCFF70] p-2 border-gray-700 rounded-lg text-gray-900 hover:scale-95 hover:bg-transparent border-2 hover:text-gray-900 font-bold duration-300">
                Details 
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselItems;
