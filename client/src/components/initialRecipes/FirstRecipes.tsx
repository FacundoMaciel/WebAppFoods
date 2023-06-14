import { RecipesInterface } from "../../Interfaces/Interfaces";
// import { AiOutlineHeart } from "react-icons/ai";

const FirstRecipes = ({
  id,
  image,
  title,
  pricePerServing,
  dishTypes,
}: RecipesInterface): JSX.Element => {

  let dishes = dishTypes.slice(0,2)
  return (
    <div
      key={id}
      className="w-full max-w-sm bg-transparent text-white p-6 mx-4 justify-between items-center"
    >
      <div className="flex flex-col items-center pb-5 w-full px-3 text-center justify-center rounded-xl">
      <a className="z-40" href="#">
        <img
          className="w-52 h-52 border-4 mb-[-5%] border-white rounded-full hover:shadow-xl hover:shadow-gray-400 duration-300"
          src={image}
          alt="Recipe Image"
        />
      </a>
      <div className="bg-[#464753] rounded-md">
        <h5 className="text-xl mt-4 tracking-tight text-white">
          {title}
        </h5>
        <div className="w-full h-10 text-base font-extralight text-gray-400">
          <p>${pricePerServing}</p>
        </div>
        <ul className="text-transform: capitalize text-[#accc7b] pb-6">
          {dishes.map(el=>
            <li>{el}</li>
            )}
        </ul>

      </div>
      </div>
      
    </div>
  );
};

export default FirstRecipes;

{/* <div key={id} className="flex flex-col w-full bg-[#242424] border border-gray-200 rounded-lg shadow">
      <div className="flex justify-end px-4 pt-4">
       
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={image}
          alt="NotFoundImage"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {title.slice(0, 20)}...
        </h5>
        <span className="text-sm text-white">
          ${pricePerServing}
        </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <ul>
            {dishTypes.map(el => 
              <li>
                {el}
              </li>
              )}
          </ul>
        </div>
      </div>
    </div> */}