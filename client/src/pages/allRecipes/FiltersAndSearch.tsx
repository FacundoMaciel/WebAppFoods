import AlphabeticalSort from "./filters/AlphabeticalSort";
import SearchBar from "../../components/searchBar/searchBar";
import HealthyScore from "./filters/HealthyScore";
import RecipesByPrice from "./filters/RecipesByPrice";
import RecipesByLikes from "./filters/RecipesByLikes";


const FiltersAndSearch = (): JSX.Element => {
  return (
    <div className="flex items-center justify-between w-full">
      <ul className="flex items-center ">
        <li className="p-4 justify-center items-center text-center">
          <RecipesByPrice />
        </li>
        <li className="p-4 justify-center items-center text-center">
          <AlphabeticalSort />
        </li>
        <li className="p-4 justify-center items-center text-center">
          <HealthyScore />
        </li>
        <li className="p-4 justify-center items-center text-center">
          <RecipesByLikes />
        </li>
      </ul>
      <div className="border border-gray-900 rounded-md p-3 justify-center items-center text-center">
          <SearchBar />
        </div>
    </div>
  );
};

export default FiltersAndSearch;
