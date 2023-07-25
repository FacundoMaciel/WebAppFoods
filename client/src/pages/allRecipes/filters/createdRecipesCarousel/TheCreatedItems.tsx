
import { CreatedRecipeInterface } from "../../../../Interfaces/Interfaces";
import icon from "../../../../assets/PageIc.png";

const TheCreatedItems = ({
  id,
  image,
  name,
  score,
  healthScore,
}: CreatedRecipeInterface): JSX.Element => {
  return (
    <div key={id} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden">
        <a href="#">
          <img alt="NotFound" className="block rounded-3xl h-auto w-full hover:animate-pulse" src={image} />
        </a>

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
              {name}
            </a>
          </h1>
          <p className="text-grey-darker text-sm">Likes: {score}</p>
        </header>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a
            className="flex items-center no-underline hover:underline text-black"
            href="#"
          >
            <img
              alt="Placeholder"
              className="block rounded-full w-10"
              src={icon}
            />
            <p className="ml-2 text-sm">H. Score → {healthScore}</p>
          </a>
        </footer>
      </article>
    </div>
  );
};

export default TheCreatedItems;
