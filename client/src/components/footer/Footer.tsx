import { SlSocialLinkedin } from 'react-icons/sl';
import { SlSocialGithub } from 'react-icons/sl';
import { SlFolder } from 'react-icons/sl';
import { SlSocialTwitter } from 'react-icons/sl';

import icon from "../../assets/logoHenry.png";
import secondIcon from "../../assets/goHenry.gif";


const Footer = () => {
  return (
   
<footer className="bg-gray-200">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="m-4 md:m-4 bg-gray-300 shadow-xl hover:shadow-[#feff00] hover:scale-105 cursor-pointer transition duration-500 ease-in-out p-5 rounded-sm ">
              <a href="https://www.talent.soyhenry.com/?hl=es" className="flex items-center">
                  <img src={icon} className="h-8   mr-3" alt="Logo" />
                  <img src={secondIcon} className="h-8" alt="Logo" />
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                  <ul className="text-gray-800 font-medium">
                      <li className="mb-4">
                          <a href="https://www.typescriptlang.org/docs/handbook/react.html" className="hover:text-gray-600">React TS</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:text-gray-600">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                  <ul className="text-gray-800 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/lvlaciel" className="hover:text-gray-600 ">Github</a>
                      </li>
                      <li>
                          <a href="https://www.soyhenry.com/" className="hover:text-gray-600">Soy Henry Academy</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-600 sm:text-center">© 2023  
          Facundo Maciel
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-900 dark:hover:text-gray-600">
                  <SlSocialLinkedin size={20}/>
              </a>
              <a href="#" className="text-gray-900 dark:hover:text-gray-600">
                  <SlSocialTwitter size={20}/>
              </a>
              <a href="#" className="text-gray-900 dark:hover:text-gray-600">
                  <SlSocialGithub size={20}/>
              </a>
              <a href="#" className="text-gray-900 dark:hover:text-gray-600">
                  <SlFolder size={20}/>
              </a>
          </div>
      </div>
    </div>
</footer>

  );
};

export default Footer;
