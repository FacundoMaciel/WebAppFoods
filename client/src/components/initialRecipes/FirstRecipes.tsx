import React from "react";

const FirstRecipes = (): JSX.Element => {
  return (
      <div className="w-full max-w-sm bg-transparent rounded-2xl border border-gray-500">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src= "/src/assets/chicken.webp"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-large tracking-tight text-gray-900">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              5.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">
              $599
            </span>
            <a
              href="#"
              className="text-gray-900 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
  );
};

export default FirstRecipes;
