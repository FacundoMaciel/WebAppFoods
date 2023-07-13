import { Link } from "react-router-dom";
import { RecipesInterface } from "../../Interfaces/Interfaces";

const Recipe = ({
  id,
  healthScore,
  title,
  image,
  aggregateLikes,
  readyInMinutes,
  pricePerServing
}: RecipesInterface): JSX.Element => {
  return (
    <div key={id} className="">
      <div className="w-[100%]">
        <div className="rounded overflow-hidden mx-5">
          <small className="p-1 bg-[#DCFF70] font-semibold">Health score: {healthScore}</small>
          <small className="p-1 bg-pink-300 font-semibold">$ {pricePerServing}</small>
          <div className="relative hover:scale-105 transition duration-500 ease-in-out">
            <Link to={`recipeDetails/${id}`}>
              <img className="w-full " src={image} alt="Recipe" />
            </Link>
            <div className="absolute bottom-0 font-bold right-0 px-3 py-1 text-gray-900 text-sm bg-white">
              Ready in {readyInMinutes} minutes
            </div>
            <div className="text-sm absolute top-0 right-0 px-4 text-gray-900 rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 border border-gray-700 bg-white">
              <span className="font-bold">{aggregateLikes}</span>
              <small className="font-bold">Likes</small>
            </div>
          </div>
          <div className="px-6 py-4">
            <span className="font-semibold hidden md:flex p-2 rounded-md m-1 text-base text-gray-900">
              {title}
            </span>
            <span className="font-semibold p-2 flex md:hidden rounded-md m-1 text-lg text-gray-900">
              {title}
            </span>
            {/* <ul className="text-gray-700 text-sm text-transform: capitalize">
            {dishes.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
