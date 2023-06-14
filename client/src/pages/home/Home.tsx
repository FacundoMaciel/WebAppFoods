// import React from 'react';

import SecondaryRecipes from "../../components/secondaryRecipes/SecondaryRecipes";
import PrincipalRecipes from "../../components/initialRecipes/PrincipalRecipes";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
// import RecipesCarousel from "../../components/recipesCarousel/RecipesCarousel";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";

const Home = (): JSX.Element => {
  return (
    <>
      <HeaderComponent />

      <PrincipalRecipes />

      <SecondaryRecipes />

      <div className="container mx-auto p-10">
        <Carousel />
      </div>

      <Footer />
    </>
  );
};

export default Home;
