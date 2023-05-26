// import React from 'react';

import SecondaryRecipes from '../../components/secondaryRecipes/SecondaryRecipes';
import PrincipalRecipes from '../../components/initialRecipes/PrincipalRecipes';
import HeaderComponent from '../../components/headerComponent/HeaderComponent';
import RecipesCarousel from '../../components/recipesCarousel/RecipesCarousel';
import Footer from '../../components/footer/Footer';

const Home = (): JSX.Element => {
  return (
    <>
      <HeaderComponent />

      <PrincipalRecipes />

      <SecondaryRecipes />

      <RecipesCarousel />

      <Footer/>
    </>
  );
}

export default Home