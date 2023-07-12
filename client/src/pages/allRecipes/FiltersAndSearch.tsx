import { AlphabeticalSort } from "../../components/alphabeticalRecipes/AlphabeticalSort";
import SearchBar from "../../components/searchBar/searchBar";

const FiltersAndSearch = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center ml-4">
        
        <SearchBar />
        <AlphabeticalSort />
        
    </div>
  );
};

export default FiltersAndSearch