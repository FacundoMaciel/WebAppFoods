import { SiCodechef } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = (): JSX.Element => {
  return (
    <nav className="flex bg-gradient-to-t from-transparent to-gray-300 fixed w-full z-50 mb-10">
      <Link to={"/"}>
        <p className="flex my-4 mx-4 hover:-gray-600 hover:text-gray-400">
          <SiCodechef size={50}/>
        </p>
      </Link>
      <ul className="flex w-full text-gray-700 justify-end h-10 mt-1 mr-20 text-base">
        <li className="flex font-bold mx-4 mt-2 hover:scale-105 duration-200 hover:cursor-pointer hover:text-gray-400">
          Home
        </li>
        <li className="flex font-bold mx-4 mt-2 hover:scale-105 duration-200 hover:cursor-pointer hover:text-gray-400">
          About
        </li>
        <Link to={"/allRecipes"}>
          <li className="flex font-bold mx-4 mt-2 hover:scale-105 duration-200 hover:cursor-pointer hover:text-gray-400">
            Recipes
          </li>
        </Link>
        <li className="flex font-bold mx-4 mt-2 hover:scale-105 duration-200 hover:cursor-pointer hover:text-gray-400">
          Create Recipe
        </li>
        <li className="flex mx-2 mt-2 hover:scale-110 duration-200 hover:cursor-pointer hover:text-gray-500">
          <FaGithubSquare size={20} />
        </li>
        <li className="flex mx-2 mt-2 hover:scale-110 duration-200 hover:cursor-pointer hover:text-gray-500">
          <FaLinkedin size={20} />
        </li>
        <li className="flex mx-2 mt-2 hover:scale-110 duration-200 hover:cursor-pointer hover:text-gray-500">
          <FaFolderOpen size={20} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
