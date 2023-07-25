import { useDispatch } from "react-redux";
import { pricePerServingOrder } from "../../../store/slices/recipes/recipesSlice";

export default function RecipesByPrice(): JSX.Element {
  const dispatch = useDispatch();

  function onHandleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(pricePerServingOrder(e.target.value));
  }

  return (
    <div className="flex justify-center items-center text-center text-sm">
      Filt by Price <br />
      <select
        className="focus:outline-none focus:ring-0 cursor-pointer rounded-md m-1 bg-gray-100"
        onChange={onHandleChange}
      >
        <option value="off">No select </option>
        <option value="asc"> Cheap </option>
        <option value="desc"> Expensive </option>
      </select>
    </div>
  );
}
