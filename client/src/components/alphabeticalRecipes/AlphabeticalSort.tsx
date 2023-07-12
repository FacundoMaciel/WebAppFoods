import { useDispatch } from "react-redux";
import { alphabeticalOrder } from "../../store/slices/recipes/recipesSlice";


export function AlphabeticalSort(){
  const dispatch = useDispatch();

  function onHandleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(alphabeticalOrder(e.target.value));
  }

  return (
    <div className="flex">
      A to Z <br />
      <select className="" onChange={onHandleChange}>
        <option value="all">All </option>
        <option value="asc"> A-Z </option>
        <option value="desc"> Z-A </option>
      </select>
    </div>
  );
};