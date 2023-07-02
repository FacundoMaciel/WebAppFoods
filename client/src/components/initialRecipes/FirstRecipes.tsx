import { RecipesInterface } from "../../Interfaces/Interfaces";


const FirstRecipes = ({
  id,
  image,
  title,
  pricePerServing,
  dishTypes,
  healthScore,
}: RecipesInterface): JSX.Element => {
  let dishes = dishTypes.slice(0, 2);
  return (
    <div key={id} className="">
      <div className="w-[100%]">
        <div className="rounded overflow-hidden mx-5">
          <a href="#"></a>
          <div className="relative hover:scale-105 transition duration-500 ease-in-out">
            <a href="#">
              <img title={title} className="w-full " src={image} alt="Recipe" />
            </a>
            <div className="absolute bottom-0 right-0 px-3 py-1 text-gray-900 text-sm bg-white bg-opacity-25">
              ${pricePerServing}
            </div>

            <div className="text-sm absolute top-0 right-0 px-4 text-gray-900 rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 border border-gray-700 bg-white bg-opacity-25">
              <span className="font-bold">{healthScore}</span>
              <small>Health Score</small>
            </div>
          </div>
          <div className="px-6 py-4">
            <span
              title={title}
              className="font-semibold hidden md:flex p-2 rounded-md m-1 text-lg text-gray-900 cursor-help"
            >
              {title.slice(0, 23)}...
            </span>
            <span
              title={title}
              className="font-semibold p-2 flex md:hidden rounded-md m-1 text-lg text-gray-900 cursor-help"
            >
              {title}
            </span>
            <ul className="text-gray-700 text-sm text-transform: capitalize">
              {dishes.map((el) => (
                <li key={el}>{el}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstRecipes;


