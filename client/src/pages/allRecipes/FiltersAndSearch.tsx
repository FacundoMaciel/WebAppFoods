import AlphabeticalSort from "./filters/AlphabeticalSort";
import SearchBar from "../../components/searchBar/searchBar";
import HealthyScore from "./filters/HealthyScore";
import RecipesByPrice from "./filters/RecipesByPrice";
import RecipesByLikes from "./filters/RecipesByLikes";
import { clearFilters } from "../../store/slices/recipes/recipesSlice";
import { useDispatch } from "react-redux";

const FiltersAndSearch = (): JSX.Element => {
  const dispatch = useDispatch();

  function handleOnChange() {
    dispatch(clearFilters());
  }

  return (
    <div className="flex justify-center items-center bg-gray-100 w-full">
      <div className="border-b-2 border-gray-100 pb-5 bg-gray-100">
        <div className="max-w-2xl mx-auto bg-gray-100">
          <span className="pt-1 mx-16 whitespace-nowrap text-xl md:text-3xl sm:text-xl italic font-light text-gray-500 hover:text-gray-900">
            <SearchBar />
          </span>
        </div>
        <nav className="flex justify-center ">
          <div className=" flex flex-col md:flex-row justify-center md:space-y-0 my-4 space-y-4  text-center text-gray-500">
            <span className="mx-8 hover:text-gray-900">
              <RecipesByPrice />
            </span>
            <span className="mx-8 hover:text-gray-900">
              <AlphabeticalSort />
            </span>
            <span className="mx-8 hover:text-gray-900">
              <HealthyScore />
            </span>
            <span className="mx-8 hover:text-gray-900">
              <RecipesByLikes />
            </span>
            <button
              onClick={handleOnChange}
              className="mx-8 text-xl hover:animate-pulse hover:text-gray-900 transition ease-in-out duration-300"
            >
              Clear Filters
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default FiltersAndSearch;

