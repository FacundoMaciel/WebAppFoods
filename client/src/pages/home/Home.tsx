// import React from 'react';
import { useEffect } from "react";
import { getAllRecipesThunk } from "../../store/slices/recipes/thunk";
import SecondaryRecipes from "../../components/secondaryRecipes/SecondaryRecipes";
import PrincipalRecipes from "../../components/initialRecipes/PrincipalRecipes";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import Carousel from "../../components/carousel/Carousel";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";

const Home = (): JSX.Element => {

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecipesThunk());
  }, []);

  return (
    <>
      <HeaderComponent />
      <PrincipalRecipes />
      <div className="inline-flex items-center justify-center w-full mt-2">
        <hr className="w-[85%] h-px mb-8 border-0 rounded bg-gray-300" />
      </div>
      <SecondaryRecipes />
      <div className="container mx-auto p-10">
        <Carousel />
      </div>
      <div className="inline-flex items-center justify-center w-full mt-10">
        <hr className="w-[85%] h-px my-8 border-0 rounded bg-gray-300" />
      </div>
    </>
  );
};

export default Home;
