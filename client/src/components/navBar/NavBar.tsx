import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/chefIcon.avif";

import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const NavBar = (): JSX.Element => {
  const [navBar, setNavBar] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const bgNavBarChange = () => {
    if (window.scrollY >= 650) {
      setNavBar(true);
    } else setNavBar(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", bgNavBarChange);
  }, []);

  return (
    <>
      {navBar ? (
        <nav className="flex bg-gray-200 transition duration-500 ease-in-out shadow-lg fixed w-full z-50 mb-10 justify-between">
          <Link to={"/"}>
            <p className="flex my-2 mx-2 text-gray-800 hover:scale-110 duration-300 rounded-md w-10 bg-gray-600">
              <img src={logo} alt="" className="w-full p-1" />
            </p>
          </Link>
          <ul className="hidden md:flex w-full text-gray-500 justify-end h-10 mt-1 mr-20 text-base">
            <Link to={"/"}>
              <li className="flex font-bold mx-4 mt-2 hover:text-gray-900 transition duration-500 ease-in-out hover:cursor-pointer ">
                Home
              </li>
            </Link>
            <Link to={"/about"}>
              <li className="flex font-bold mx-4 mt-2 hover:text-gray-900 transition duration-500 ease-in-out hover:cursor-pointer">
                About
              </li>
            </Link>
            <Link to={"/allRecipes"}>
              <li className="flex font-bold mx-4 mt-2 hover:text-gray-900 transition duration-500 ease-in-out hover:cursor-pointer ">
                Recipes
              </li>
            </Link>
            <Link to={"/createRecipe"}>
              <li className="flex font-bold mx-4 mt-2 hover:text-gray-900 transition duration-500 ease-in-out hover:cursor-pointer ">
                Create Recipe
              </li>
            </Link>
          </ul>
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="cursor-pointer pr-4 pt-2 z-10 md:hidden text-gray-900"
          >
            {openMenu ? (
              <FaTimes color="white" size={30} />
            ) : (
              <FaBars size={30} />
            )}
          </div>
          {openMenu && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-900 text-white">
              <Link to={"/"}>
                <li className="px-2 cursor-pointer capitalize py-3 text-xl">
                  Home
                </li>
              </Link>
              <Link to={"/about"}>
                <li className="px-2 cursor-pointer capitalize py-3 text-xl">
                  About
                </li>
              </Link>
              <Link to={"/allRecipes"}>
                <li className="px-2 cursor-pointer capitalize py-3 text-xl">
                  Recipes
                </li>
              </Link>
              <Link to={"/createRecipe"}>
                <li className="px-2 cursor-pointer capitalize py-3 text-xl">
                  Create Recipe
                </li>
              </Link>
            </ul>
          )}
        </nav>
      ) : (
        <nav className="flex bg-gray-900 transition duration-500 ease-in-out shadow-md shadow-gray-300 fixed w-full z-50 mb-10 justify-between">
          <Link to={"/"}>
            <p className="flex my-2 mx-2 text-gray-900 hover:scale-110 duration-300 rounded-md w-10 bg-gray-600">
              <img src={logo} alt="" className="w-full p-1" />
            </p>
          </Link>
          <ul className="hidden md:flex w-full text-gray-300 justify-end h-10 mt-1 mr-20 text-base">
            <Link to={"/"}>
              <li className="flex font-bold mx-4 mt-2 hover:text-white transition duration-500 ease-in-out hover:cursor-pointer ">
                Home
              </li>
            </Link>
            <Link to={"/about"}>
              <li className="flex font-bold mx-4 mt-2 hover:text-white transition duration-500 ease-in-out hover:cursor-pointer">
                About
              </li>
            </Link>
            <Link to={"/allRecipes"}>
              <li className="flex font-bold mx-4 mt-2 hover:text-white transition duration-500 ease-in-out hover:cursor-pointer ">
                Recipes
              </li>
            </Link>
            <Link to={"/createRecipe"}>
              <li className="flex font-bold mx-4 mt-2 hover:text-white transition duration-500 ease-in-out hover:cursor-pointer ">
                Create Recipe
              </li>
            </Link>
          </ul>
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="cursor-pointer pr-4 pt-2 z-10 md:hidden text-white"
          >
            {openMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          {openMenu && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-900 text-white">
              <Link to={"/"}>
                <li className="px-2 cursor-pointer capitalize py-3 text-xl">
                  Home
                </li>
              </Link>
              <Link to={"/about"}>
                <li className="px-2 cursor-pointer capitalize py-3 text-xl">
                  About
                </li>
              </Link>
              <Link to={"/allRecipes"}>
                <li className="px-2 cursor-pointer capitalize py-3 text-xl">
                  Recipes
                </li>
              </Link>
              <Link to={"/createRecipe"}>
                <li className="px-2 cursor-pointer capitalize py-3 text-xl">
                  Create Recipe
                </li>
              </Link>
            </ul>
          )}
        </nav>
      )}
    </>
  );
};

export default NavBar;
