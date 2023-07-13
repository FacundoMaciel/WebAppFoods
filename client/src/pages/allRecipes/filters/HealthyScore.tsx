import { useDispatch } from "react-redux";
import { healthyScoreOrder } from "../../../store/slices/recipes/recipesSlice";


export default function HealthyScore(): JSX.Element{
  const dispatch = useDispatch();

  function onHandleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(healthyScoreOrder(e.target.value));
  }

  return (
    <div className="flex justify-center items-center text-center text-sm">
      Filt by Health Score 
      <select
        className="focus:outline-none focus:ring-0 cursor-pointer rounded-md m-1"
        onChange={onHandleChange}
      >
        <option value="default">Default </option>
        <option value="desc"> Best </option>
        <option value="asc"> Worst </option>
      </select>
    </div>
  );
};