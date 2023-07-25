import { useDispatch } from "react-redux";
import { likesOrder } from "../../../store/slices/recipes/recipesSlice";

export default function RecipesByLikes(): JSX.Element {
  const dispatch = useDispatch();

  function onHandleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(likesOrder(e.target.value));
  }

  return (
    <div className="flex justify-center items-center text-center text-sm">
      Filt by Likes <br />
      <select
        className="focus:outline-none focus:ring-0 cursor-pointer rounded-md m-1 bg-gray-100"
        onChange={onHandleChange}
      >
        <option value="off">No select </option>
        <option value="asc"> Worst </option>
        <option value="desc"> Most </option>
      </select>
    </div>
  );
}