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
      <div className="w-96">
        <img
          className="w-full rounded-lg"
          src={image}
          alt="NotFOund"
        />
        <div className="place-content-center ml-2 px-5 pb-5">
          <h3 className="text-white text-xl tracking-tight mt-3 flex flex-row justify-around">
            {title.slice(0, 23)}
          </h3>
          <p className="text-center font-semibold text-[#cb9c7d]"> Healthy Score </p> 
          <div className="flex items-center justify-center">
            <span className="text-[#cb9c7d] font-semibold text-lg w-[30%] rounded-lg px-1 py-1 text-center">
              {healthScore}
            </span>{" "}
          </div>
          <Link to={"/"}>
            <div className="flex items-center justify-center mt-3 mb-5">
              <button className="bg-transparent p-2 rounded-lg text-[#cb9c7d] hover:scale-105 hover:bg-[#464753] border hover:text-white hover:font-bold duration-300">
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
