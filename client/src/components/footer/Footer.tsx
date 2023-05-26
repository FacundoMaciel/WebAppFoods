import { SlSocialLinkedin } from 'react-icons/sl';
import { SlSocialGithub } from 'react-icons/sl';
import { SlFolder } from 'react-icons/sl';
import { SlSocialTwitter } from 'react-icons/sl';


const Footer = () => {
  return (
    <footer className="bg-neutral-200 text-center text-white dark:bg-neutral-600">
      <div className="container pt-9">
        <div className="mb-9 flex justify-center items-center">
          <a
            href="#!"
            className="mr-9 text-neutral-800 dark:text-neutral-200"
          >
           <SlSocialLinkedin size={20}/>
          </a>
          <a
            href="#!"
            className="mr-9 text-neutral-800 dark:text-neutral-200"
          >
            <SlSocialGithub size={20}/>
          </a>
          <a
            href="#!"
            className="mr-9 text-neutral-800 dark:text-neutral-200"
          >
            <SlFolder size={20}/>
          </a>
          <a
            href="#!"
            className="mr-9 text-neutral-800 dark:text-neutral-200"
          >
            <SlSocialTwitter size={20}/>
          </a>
        </div>
      </div>
      <div className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href="https://tailwind-elements.com/"
        >
        {''}  {''}  Facundo Maciel
        </a>
      </div>
    </footer>
  );
};

export default Footer;
