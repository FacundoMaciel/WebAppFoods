import { SlSocialLinkedin } from 'react-icons/sl';
import { SlSocialGithub } from 'react-icons/sl';
import { SlFolder } from 'react-icons/sl';
import { SlSocialTwitter } from 'react-icons/sl';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-center text-white justify-center items-center">
      <div className="container pt-9 justify-center items-center text-center ml-14">
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
    </footer>
  );
};

export default Footer;
