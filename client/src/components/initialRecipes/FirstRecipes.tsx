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
              <img className="w-full " src={image} alt="Recipe" />
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
              className="font-semibold p-2 rounded-md m-1 text-lg inline-block text-gray-900 transition duration-500 ease-in-out"
            >
              {title.slice(0,23)}...
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

{
  /* <div
      key={id}
      className="w-full md:flex hidden max-w-sm bg-transparent text-white p-6 mx-4 justify-between items-center"
    >
      <div className="flex flex-col items-center pb-5 w-full px-3 text-center justify-center rounded-xl">
      <a className="z-40" href="#">
        <img
          className="md:w-52 md:h-52 md:object-cover md:rounded-full 
          rounded-none w-62 h-auto border-4 mb-[-5%] border-white 
          hover:shadow-xl hover:shadow-gray-400 duration-300"
          src={image}
          alt="Recipe Image"
        />
      </a>
      <div className="bg-[#464753] rounded-md md:p-10">
        <h5 className="text-xl mt-4 tracking-tight text-white">
          {title.slice(0,25)}...
        </h5>
        <div className="w-full h-10 text-base font-extralight text-gray-400">
          <p>${pricePerServing}</p>
        </div>
        <ul className="text-transform: capitalize text-[#accc7b] pb-6">
          {dishes.map(el=>
            <li key={el}>{el}</li>
            )}
        </ul>
      </div>
      </div>
    </div> */
}
