import logo from "../../assets/chefHat.png"
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = (): JSX.Element => {
  return (
    <nav className="flex bg-gray-900 shadow-lg fixed w-full z-50 mb-10">
      <Link to={"/"}>
        <p className="flex my-2 mx-2 text-gray-800 hover:scale-110 duration-300 rounded-md w-14 bg-[#accc7b]">
        <img src={logo} alt="" className="w-full p-1"/>
        </p>
      </Link>
      <ul className="flex w-full text-white justify-end h-10 mt-1 mr-20 text-base">
        <li className="flex font-bold mx-4 mt-2 hover:text-[#accc7b] transition duration-500 ease-in-out hover:cursor-pointer ">
          Home
        </li>
        <li className="flex font-bold mx-4 mt-2 hover:text-[#accc7b] transition duration-500 ease-in-out hover:cursor-pointer">
          About
        </li>
        <Link to={"/allRecipes"}>
          <li className="flex font-bold mx-4 mt-2 hover:text-[#accc7b] transition duration-500 ease-in-out hover:cursor-pointer ">
            Recipes
          </li>
        </Link>
        <li className="flex font-bold mx-4 mt-2 hover:text-[#accc7b] transition duration-500 ease-in-out hover:cursor-pointer ">
          Create Recipe
        </li>
        <li className="flex mx-2 mt-2 hover:scale-110 hover:text-[#accc7b] transition duration-500 ease-in-out hover:cursor-pointer">
          <FaGithubSquare size={22} />
        </li>
        <li className="flex mx-2 mt-2 hover:scale-110 hover:text-[#accc7b] transition duration-500 ease-in-out hover:cursor-pointer">
          <FaLinkedin size={22} />
        </li>
        <li className="flex mx-2 mt-2 hover:scale-110 hover:text-[#accc7b] transition duration-500 ease-in-out hover:cursor-pointer">
          <FaFolderOpen size={22} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
