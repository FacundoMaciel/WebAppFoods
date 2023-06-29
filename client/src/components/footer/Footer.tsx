import { SlSocialLinkedin } from 'react-icons/sl';
import { SlSocialGithub } from 'react-icons/sl';
import { SlFolder } from 'react-icons/sl';
import { SlSocialTwitter } from 'react-icons/sl';

import icon from "../../assets/logoHenry.png";


const Footer = () => {
  return (
   
<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://www.talent.soyhenry.com/?hl=es" className="flex items-center">
                  <img src={icon} className="h-8   mr-3" alt="Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Talent</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://www.typescriptlang.org/docs/handbook/react.html" className="hover:text-white">React TS</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:text-white">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/lvlaciel" className="hover:text-white ">Github</a>
                      </li>
                      <li>
                          <a href="https://www.soyhenry.com/" className="hover:text-white">Soy Henry Academy</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023  
          Facundo Maciel
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <SlSocialLinkedin size={20}/>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <SlSocialTwitter size={20}/>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <SlSocialGithub size={20}/>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <SlFolder size={20}/>
              </a>
          </div>
      </div>
    </div>
</footer>

  );
};

export default Footer;

{/* <footer className="bg-gray-800 text-center text-white justify-center items-center">
<div className="container w-full pt-9 justify-center items-center text-center ml-14">
  <div className="mb-9 flex justify-center items-center text-center">
    <a
      href="#!"
      className="mr-9 text-gray-400 hover:text-[#accc7b] hover:scale-105 duration-300"
    >
     <SlSocialLinkedin size={20}/>
    </a>
    <a
      href="#!"
      className="mr-9 text-gray-400 hover:text-[#accc7b] hover:scale-105 duration-300"
    >
      <SlSocialGithub size={20}/>
    </a>
    <a
      href="#!"
      className="mr-9 text-gray-400 hover:text-[#accc7b] hover:scale-105 duration-300"
    >
      <SlFolder size={20}/>
    </a>
    <a
      href="#!"
      className="mr-9 text-gray-400 hover:text-[#accc7b] hover:scale-105 duration-300"
    >
      <SlSocialTwitter size={20}/>
    </a>
  </div>
</div>
<div className="bg-gray-800 border-t p-4 text-center text-white">
  © 2023 Copyright:
  <a
    className="text-[#accc7b]"
    href="https://tailwind-elements.com/"
  >
  {''}  {''}  Facundo Maciel
  </a>
</div>
</footer> */}
