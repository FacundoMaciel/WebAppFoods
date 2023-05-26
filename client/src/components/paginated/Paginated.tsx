import { TheRecipe } from "../../Interfaces/Interfaces";

import { TbArrowBigRight } from 'react-icons/tb';
import { TbArrowBigLeft } from 'react-icons/tb';

interface Props {
  recipesPerPage: number;
  theRecipes: TheRecipe[];
  paginated: number;
  page: number;
  previousPage: (pageNumber: number) => void;
  nextPage: (pageNumber: number) => void
  thePaging: (pageNumber: number) => void
}

const Paginated = ({
  recipesPerPage,
  theRecipes,
  paginated,
  page,
  previousPage,
  thePaging,
  nextPage
}: Props): JSX.Element => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(theRecipes.length / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <button
        className="flex"
        disabled={page === 1}
        onClick={() => previousPage(page)}
      >
        <TbArrowBigLeft />
      </button>
      <h5>{paginated}</h5>
      <button
        className="flex"
        disabled={page === 10}
        onClick={() => nextPage(page)}
      >
        <TbArrowBigRight />
      </button>
    </div>
  );
};

export default Paginated;
