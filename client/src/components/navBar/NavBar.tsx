import { SiCodechef } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = (): JSX.Element => {
  return (
    <div className="flex w-full h-screen bg-[url('/src/assets/imageHome.jpg')] bg-cover bg-center bg-no-repeat">
      <Link to={'/'}>
      <p className="flex my-4 mx-4">
        <SiCodechef size={60} color="white" />
      </p>
      </Link>
      <ul className="flex w-full text-white justify-end h-10 mt-1 mr-20 text-base">
        <li className="flex mx-4 mt-2 hover:cursor-pointer hover:font-bold hover:text-gray-500">
          Home
        </li>
        <li className="flex mx-4 mt-2 hover:cursor-pointer hover:font-bold hover:text-gray-500">
          About
        </li>
        <li className="flex mx-4 mt-2 hover:cursor-pointer hover:font-bold hover:text-gray-500">
          Recetas
        </li>
        <li className="flex mx-4 mt-2 hover:cursor-pointer hover:font-bold hover:text-gray-500">
          Crea tu receta
        </li>
        <li className="flex mx-2 mt-2 hover:cursor-pointer hover:text-gray-300">
          <FaGithubSquare size={20} />
        </li>
        <li className="flex mx-2 mt-2 hover:cursor-pointer hover:text-gray-300">
          <FaLinkedin size={20} />
        </li>
        <li className="flex mx-2 mt-2 hover:cursor-pointer hover:text-gray-300">
          <FaFolderOpen size={20} />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
