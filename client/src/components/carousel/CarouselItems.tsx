import { Link } from "react-router-dom";
import { RecipesInterface } from "../../Interfaces/Interfaces";

const CarouselItems = ({
  id,
  image,
  title,
  healthScore,
}: RecipesInterface): JSX.Element => {
  return (
    <div key={id} className="flex justify-center p-4 mb-5 m-5">
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
          <p className="text-center text-[#accc7b]"> Healthy Score </p> 
          <div className="flex items-center justify-center">
            <span className="text-white text-lg w-[30%] rounded-lg px-1 py-1 text-center">
              {healthScore}
            </span>{" "}
          </div>
          <Link to={"/"}>
            <div className="flex items-center justify-center mt-3 mb-5">
              <button className="bg-transparent p-2 rounded-lg text-white hover:scale-110 hover:bg-[#accc7b] border-2 hover:text-[#20222f] hover:font-bold duration-300">
                More Info
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselItems;
