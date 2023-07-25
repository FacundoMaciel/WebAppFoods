
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItems from "./CarouselItems";


function NextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "rgb(17 24 39)", borderRadius:"55px"}}
      onClick={onClick}
    />
  );
}

function PrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "rgb(17 24 39)", borderRadius:"55px"}}
      onClick={onClick}
    />
  );
}


const Carousel = () => {
  const settings = {
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    initialSlide: 2,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  };

  const { recipes } = useSelector((state: RootState) => state.recipes);

  const vegetarianRecipes = recipes.filter((r) => r.vegetarian == true);
  const filteredVegetarianRecipes = vegetarianRecipes.slice(5, 15);

  return (
    <div>
      <div className="inline-flex items-center justify-center w-full">
    <hr className="w-[85%] h-px my-8 border-0 rounded bg-gray-300" />
    <div className="absolute px-4 -translate-x-1/2 rounded-xl bg-gray-100 border-2 border-dashed shadow-xl left-1/2">
      <h1 className="text-center text-gray-900 p-2 font-bold">
      🍥 Vegetarian Recipes 🍥
      </h1>
    </div>
      </div>
      <div className="flex items-center justify-center md:flex sm:flex lg:flex">
        <div className="w-full">
          <Slider {...settings}>
            {filteredVegetarianRecipes?.map((element) => (
              <CarouselItems
                id={element.id}
                key={element.id}
                title={element.title}
                image={element.image}
                healthScore={element.healthScore}
                dishTypes={element.dishTypes}
                diets={element.diets}
                summary={element.summary}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
