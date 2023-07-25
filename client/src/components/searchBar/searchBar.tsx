import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Swal from "sweetalert2";

import { getRecipeByNameThunk } from "../../store/slices/recipes/thunk";
import { AppDispatch } from "../../store/store";

import { ImSearch } from "react-icons/im";

const searchBar = (): JSX.Element => {
  const [input, setInput] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();

  const theAlert = () => {
    Swal.fire({
      title: "Error!",
      text: "Incorrect search",
      icon: "error",
      imageUrl: "https://i.ytimg.com/vi/l4FH6NoMkE4/maxresdefault.jpg",
      imageWidth: 400,
      imageHeight: 200,
      confirmButtonText: "OK",
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input === "") theAlert();

    if (Number(input)) theAlert();

    dispatch(getRecipeByNameThunk(input));

    setInput("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form className="flex items-center" onSubmit={onSubmit}>
        <input
          className="focus:outline-none focus:ring-0 focus:bg-transparent bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
          name="search"
          placeholder="Search recipe..."
          type="text"
          value={input}
          onChange={onChange}
        />
        <button
          className="p-2.5 ml-2 text-sm font-medium text-white bg-gray-300 rounded-lg border border-white hover:bg-gray-900 hover:scale-110 transition ease-in-out duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300"
          type="submit"
        >
          <ImSearch />
        </button>
      </form>
    </div>
  );
};

export default searchBar;
