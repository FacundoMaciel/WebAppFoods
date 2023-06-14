import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllRecipesThunk } from "../../store/slices/recipes/thunk";
import { AppDispatch, RootState } from "../../store/store";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItems from "./CarouselItems";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    initialSlide: 2,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        }
      ]
  };

  const dispatch: AppDispatch = useDispatch();
  const { recipes } = useSelector((state: RootState) => state.recipes);

  useEffect(() => {
    dispatch(getAllRecipesThunk());
  }, [dispatch]);

  const vegetarianRecipes = recipes.filter((r) => r.vegetarian == true);
  const filteredVegetarianRecipes = vegetarianRecipes.slice(5, 15);

  return (
    <div>
      <h1 className="text-center text-2xl text-white">
        Vegetarian Recipe Slider
      </h1>
      <div className="flex items-center justify-center">
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
