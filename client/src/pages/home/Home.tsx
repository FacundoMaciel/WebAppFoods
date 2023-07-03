// import React from 'react';

import SecondaryRecipes from "../../components/secondaryRecipes/SecondaryRecipes";
import PrincipalRecipes from "../../components/initialRecipes/PrincipalRecipes";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import Carousel from "../../components/carousel/Carousel";

const Home = (): JSX.Element => {
  return (
    <>
      <HeaderComponent />
      <PrincipalRecipes />
      <div className="inline-flex items-center justify-center w-full mt-10">
        <hr className="w-[85%] h-px my-8 border-0 rounded bg-gray-300" />
      </div>
      <SecondaryRecipes />
      <div className="inline-flex items-center justify-center w-full mt-10">
        <hr className="w-[85%] h-px my-8 border-0 rounded bg-gray-300" />
      </div>
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
