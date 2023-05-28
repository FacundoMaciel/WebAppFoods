import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getAllRecipesThunk } from "../../store/slices/recipes/thunk";
import { AppDispatch, RootState } from "../../store/store";
import CarouselRecipe from "./CarouselRecipe";

const RecipesCarousel = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const { recipes } = useSelector((state: RootState) => state.recipes);

  useEffect(() => {
    dispatch(getAllRecipesThunk());
  }, [dispatch]);

  const vegetarianRecipes = recipes.filter((r) => r.vegetarian == true);
  const filteredVegetarianRecipes = vegetarianRecipes.slice(5, 15);

  return (
    <div className=" mb-10 py-10">
      <h1 className="text-center text-2xl text-gray-400">Vegetarian Recipe Slider</h1>
      <div className="flex flex-col pt-4">
        <div className="flex flex-center items-center mb-5">
          <Swiper 
            slidesPerView={3}
            // spaceBetween={20}
            // loop={true}
            pagination={{ 
              type: 'bullets',
              clickable: true,
            }}
            // navigation={true}
            // modules={[Autoplay, Pagination, Navigation]}
          >
            {vegetarianRecipes.length !== 0
              ? vegetarianRecipes.map((element, i) => (
                  <SwiperSlide key={i}>
                    <CarouselRecipe
                      id={element.id}
                      key={element.id}
                      title={element.title}
                      image={element.image}
                      healthScore={element.healthScore}
                      dishTypes={element.dishTypes}
                      diets={element.diets}
                      summary={element.summary}
                    ></CarouselRecipe>
                  </SwiperSlide>
                ))
              : filteredVegetarianRecipes.map((element, i) => (
                  <SwiperSlide key={i}>
                    <CarouselRecipe
                      id={element.id}
                      key={element.id}
                      title={element.title}
                      image={element.image}
                      healthScore={element.healthScore}
                      dishTypes={element.dishTypes}
                      diets={element.diets}
                      summary={element.summary}
                    ></CarouselRecipe>
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RecipesCarousel;
