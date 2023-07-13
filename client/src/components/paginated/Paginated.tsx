import { TiChevronRight } from "react-icons/ti";
import { TiChevronLeft } from "react-icons/ti";
// import { RecipesInterface } from "../../Interfaces/Interfaces";

interface Props {
  recipesPerPage: number;
  recipes: number;
  currentPage: number;
  paginated: number;
  nextPage: () => void;
  previousPage: () => void;
  thePage: (pageNumber: number) => void;
}

export default function Paginated({
  recipesPerPage,
  recipes,
  paginated,
  nextPage,
  previousPage,
}: Props): JSX.Element {
  const thePages: number[] = [];

  for (let i = 1; i <= Math.ceil(recipes / recipesPerPage); i++) {
    thePages.push(i);
  }

  // const handleClick = (number)=>{
  //     thePaging(number)
  // }
  return (
    <div className="flex justify-center">
      { paginated === 1 
      ? <button className="mx-5 mb-4 p-2 cursor-not-allowed text-white"> 
      <TiChevronLeft size={25} />
      </button>
      : <button
        className="mx-5 mb-4 p-2 text-gray-700 hover:text-gray-900"
        disabled={paginated === 1}
        onClick={() => previousPage()}
      >
        <TiChevronLeft size={25} />Prev
      </button>
      }
      <h5 className="mb-4 p-2 text-xl font-bold">{paginated}</h5>
      { paginated === 7
      ? <button className="mx-5 mb-4 p-2 cursor-not-allowed text-white"> 
      <TiChevronRight size={25} />
      </button>
      : <button
        className="mx-5 mb-4 p-3 text-gray-700 hover:text-gray-900"
        disabled={paginated === 7}
        onClick={() => nextPage()}
      >
        <TiChevronRight size={25} />Next
      </button>
      }
    </div>
  );
}
