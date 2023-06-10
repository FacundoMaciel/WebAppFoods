import logo from "../../assets/LogoFoodsApp.png"
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = (): JSX.Element => {
  return (
    <nav className="flex bg-white shadow-xl fixed w-full z-50 mb-10">
      <Link to={"/"}>
        <p className="flex my-2 mx-2 text-gray-800 hover:scale-105 w-12">
        <img src={logo} alt="" className="w-full"/>
        </p>
      </Link>
      <ul className="flex w-full text-gray-700 justify-end h-10 mt-1 mr-20 text-base">
        <li className="flex font-bold mx-4 mt-2 hover:scale-105 duration-200 hover:cursor-pointer hover:text-[#A1D6E2]">
          Home
        </li>
        <li className="flex font-bold mx-4 mt-2 hover:scale-105 duration-200 hover:cursor-pointer hover:text-[#A1D6E2]">
          About
        </li>
        <Link to={"/allRecipes"}>
          <li className="flex font-bold mx-4 mt-2 hover:scale-105 duration-200 hover:cursor-pointer hover:text-[#A1D6E2]">
            Recipes
          </li>
        </Link>
        <li className="flex font-bold mx-4 mt-2 hover:scale-105 duration-200 hover:cursor-pointer hover:text-[#A1D6E2]">
          Create Recipe
        </li>
        <li className="flex mx-2 mt-2 hover:scale-110 duration-200 hover:cursor-pointer hover:text-[#A1D6E2]">
          <FaGithubSquare size={20} />
        </li>
        <li className="flex mx-2 mt-2 hover:scale-110 duration-200 hover:cursor-pointer hover:text-[#A1D6E2]">
          <FaLinkedin size={20} />
        </li>
        <li className="flex mx-2 mt-2 hover:scale-110 duration-200 hover:cursor-pointer hover:text-[#A1D6E2]">
          <FaFolderOpen size={20} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
