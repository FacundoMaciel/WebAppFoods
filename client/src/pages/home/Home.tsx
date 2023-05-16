// import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import FirstRecipes from '../../components/initialRecipes/FirstRecipes';
import SecondRecipes from '../../components/secondRecipes/SecondRecipes';

const Home = (): JSX.Element => {
  return (
    <div className="">
        <NavBar/>
    <div className="">
      <FirstRecipes/>
    </div>
    <div>
      <SecondRecipes/>
    </div>
    </div>
    
  )
}

export default Home