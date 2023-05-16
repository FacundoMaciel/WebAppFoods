import { TheRecipe } from '../../types/recipes'

const Recipe = ({id, healthScore, title, image}: TheRecipe): JSX.Element => {
    
  return (
    <div className="w-full max-w-sm bg-transparent rounded-2xl border border-gray-500">
        <a href="#">
          <img className="p-8 rounded-t-lg"
            src= {image}
            alt="Not Found"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-large tracking-tight text-gray-900">
              {title}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            PONER ALGO
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">
              {healthScore}
            </span>
            <a
              href="#"
              className="text-gray-900 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Ver Mas
            </a>
          </div>
        </div>
      </div>
  )
}

export default Recipe