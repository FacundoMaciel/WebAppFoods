import { SlSocialLinkedin } from 'react-icons/sl';
import { SlSocialGithub } from 'react-icons/sl';
import { SlFolder } from 'react-icons/sl';
import { SlSocialTwitter } from 'react-icons/sl';


const Footer = () => {
  return (
    <footer className="bg-[#A1D6E2] text-center text-white justify-center items-center">
      <div className="container pt-9 justify-center items-center text-center ml-14">
        <div className="mb-9 flex justify-center items-center text-center">
          <a
            href="#!"
            className="mr-9 text-gray-600 hover:text-black hover:scale-105 duration-300"
          >
           <SlSocialLinkedin size={25}/>
          </a>
          <a
            href="#!"
            className="mr-9 text-gray-600 hover:text-black hover:scale-105 duration-300"
          >
            <SlSocialGithub size={25}/>
          </a>
          <a
            href="#!"
            className="mr-9 text-gray-600 hover:text-black hover:scale-105 duration-300"
          >
            <SlFolder size={25}/>
          </a>
          <a
            href="#!"
            className="mr-9 text-gray-600 hover:text-black hover:scale-105 duration-300"
          >
            <SlSocialTwitter size={25}/>
          </a>
        </div>
      </div>
      <div className="bg-gray-400 p-4 text-center text-gray-600">
        © 2523 Copyright:
        <a
          className="text-gray-700"
          href="https://tailwind-elements.com/"
        >
        {''}  {''}  Facundo Maciel
        </a>
      </div>
    </footer>
  );
};

export default Footer;
