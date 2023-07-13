
import { useSelector } from "react-redux";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RootState } from "../../../../store/store";
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


const SimpleRecipesCarousel = (): JSX.Element => {
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

  const { allRecipes } = useSelector((state: RootState) => state.recipes);

  const simpleRecipes = allRecipes.filter((r) =>
    r.readyInMinutes ? r.readyInMinutes < 30 : r
  );
  

  return (
    <div>
      <h1 className="text-center text-xl text-gray-900 font-bold">∼ Are you hurry up ? ∼</h1>
      <hr  className="my-4"/>
      <h1 className="text-center text-2xl text-gray-900 font-bold bg-[#DCFF70] shadow-lg rounded-lg">
      Simple and quick cooking recipes 🍴 - 30 min❕
      </h1>
      <div className="flex items-center justify-center md:flex sm:flex lg:flex">
        <div className="w-full">
          <Slider {...settings}>
            {simpleRecipes?.map((element) => (
              <CarouselItems
                id={element.id}
                key={element.id}
                title={element.title}
                image={element.image}
                healthScore={element.healthScore}
                readyInMinutes={element.readyInMinutes}
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

export default SimpleRecipesCarousel;
