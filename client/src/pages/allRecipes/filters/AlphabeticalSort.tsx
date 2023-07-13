import { useDispatch } from "react-redux";
import { alphabeticalOrder } from "../../../store/slices/recipes/recipesSlice";


export default function AlphabeticalSort(): JSX.Element {
  const dispatch = useDispatch();

  function onHandleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(alphabeticalOrder(e.target.value));
  }

  return (
    <div className="flex justify-center items-center text-center text-sm">
      Filt by Alphabet <br />
      <select className="focus:outline-none focus:ring-0 cursor-pointer rounded-md m-1" onChange={onHandleChange}>
        <option value="default">Default </option>
        <option value="asc"> A to Z </option>
        <option value="desc"> Z to A </option>
      </select>
    </div>
  );
};