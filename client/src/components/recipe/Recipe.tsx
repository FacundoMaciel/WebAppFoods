import { Link } from "react-router-dom";
import { RecipesInterface } from "../../Interfaces/Interfaces"


const Recipe = ({id, healthScore, title, image}: RecipesInterface): JSX.Element => {
    
  return (
    <div>
      <Link to="#">
      <div
        key={id}
        
        className="flex flex-col items-center bg-white md:flex-row md:max-w-xl hover:bg-gray-300 focus:bg-[#A1D6E2]"
      >
        <img
          className="object-cover w-full p-2 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image}
          alt="Not Found"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-700">
            {title.slice(0, 22)}...
          </h5>
          <p className="mb-3 font-normal text-[#1995AD] text-base">
            Health Score ({healthScore})
          </p>
        </div>
      </div>
      </Link>
      <hr />
    </div>
  );
}

export default Recipe