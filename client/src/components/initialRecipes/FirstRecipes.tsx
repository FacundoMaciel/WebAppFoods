import { RecipesInterface } from "../../Interfaces/Interfaces";
// import { AiOutlineHeart } from "react-icons/ai";

const FirstRecipes = ({
  id,
  image,
  title,
  summary,
}: RecipesInterface): JSX.Element => {
  return (
    <div
      key={id}
      className="w-full max-w-sm bg-transparent text-black p-6 mx-4 justify-between items-center"
    >
      <a href="#" className="hover:opacity-90">
        <img
          className="w-full h-auto shadow-2xl"
          src={image}
          alt="product image"
        />
      </a>
      <div className=" pb-5 pt-5 text-center justify-center items-center">
        <h5 className="text-xl  tracking-tight text-gray-700">
          {title.slice(0, 23)}
        </h5>
        <div className="text-lg font-extralight text-gray-700">
          <p>{summary?.replace(/<[^>]*>/g, "").slice(0, 250)}...</p>
        </div>
      </div>
    </div>
  );
};

export default FirstRecipes;
