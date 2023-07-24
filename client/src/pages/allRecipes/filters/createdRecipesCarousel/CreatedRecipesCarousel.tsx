
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


const CreatedRecipesCarousel = (): JSX.Element => {
  const settings = {
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    initialSlide: 1,
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

  const { DBrecipes } = useSelector((state: RootState) => state.recipes);

  return (
    <div>
      <hr  className="my-4"/>
      <h1 className="text-center text-2xl text-gray-900 font-bold bg-gray-100 shadow-lg rounded-lg">
      Users Recipes
      </h1>
      <div className="flex items-center justify-center p-20 md:flex sm:flex lg:flex">
        <div className="w-full">
          <Slider {...settings}>
            {DBrecipes?.map((element) => (
              <CarouselItems
              id={element.id}
              key={element.id}
              name={element.name}
              image={element.image}
              healthScore={element.healthScore}
              diets={element.diets}
              summary={element.summary}
              steps={element.steps}
              score={element.score}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CreatedRecipesCarousel;
