import { RecipesInterface } from "../../Interfaces/Interfaces"


const Recipe = ({id, healthScore, title, image}: RecipesInterface): JSX.Element => {
    
  return (
    <div
			key={id}
			className="flex justify-start w-[1000px] p-2 border-b-4"
		>
			<div className="flex flex-col md:flex-row w-[1000px] md:max-w-6xl rounded-lg bg-white shadow-lg">
				<img
					className="bg-pink-700 w-20 h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
					src={image}
					alt=""
				/>
				<div className="p-6 flex flex-col justify-start ">
					<div className="flex ">
					</div>
					<div className="flex justify-between items-center">
						<p className="text-gray-600 text-xl font-bold">{healthScore}</p>
						<div className="mr-96"></div>
					</div>
           <h2 className="text-gray-700 font-bold text-xl md:text-2xl ">{title}</h2>
				</div>
        <div>
          
        </div>
			</div>
		</div>
  )
}

export default Recipe