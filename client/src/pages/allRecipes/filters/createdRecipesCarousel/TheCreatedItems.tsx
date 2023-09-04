import Swal from "sweetalert2";
import { CreatedRecipeInterface, TheModalRecipe } from "../../../../Interfaces/Interfaces";


const TheCreatedItems = ({
  id,
  image,
  name,
  score,
  healthScore,
  steps
}: CreatedRecipeInterface): JSX.Element => {
  
  const theAlert = ({ image, steps }: TheModalRecipe) => {
    Swal.fire({
      width: "80%",
      background: "rgb(229 231 235)",
      color: "rgb(17 24 39)",
      title: name,
      text: steps,
      imageUrl: image,
      buttonsStyling: true,
      imageWidth: 500,
      imageHeight: 300,
      footer: score + " " + " " + " (LIKES)",
      imageAlt: "Recipe Photo",
      showCloseButton: true,
      showConfirmButton: false,
    });
  };
  
  const handleClick = () => {
    theAlert({image ,steps});
  }

  return (
    <div key={id} className="w-[100%] my-10">
      <div className="w-[100%]">
        <div className="rounded overflow-hidden mx-5">
          <div className="h-[70%] flex flex-col justify-center text-center items-center">
              <img className="w-full h-52" src={image} alt="Recipe" />
            <div className="text-sm px-4 text-gray-900 rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 border border-gray-700 bg-white bg-opacity-25">
              <span className="font-bold">{healthScore}</span>
              <small className="font-semibold">Health Score</small>
            </div>
          </div>
          <div className="px-6 py-4 text-center">
            <span className="font-semibold flex p-2 rounded-md m-1 text-lg text-gray-900">
              {name}
            </span>
            <div onClick={handleClick} className="flex cursor-pointer bg-gray-700 bg-opacity-25 justify-center text-center hover:bg-gray-200 hover:scale-105 transition ease-in-out duration-300">
            <button className="text-gray-700 font-semibold">More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheCreatedItems;