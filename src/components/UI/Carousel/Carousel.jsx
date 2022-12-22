import React, { useCallback, useEffect, useState } from "react";

const styles = {
  carousel: "w-full relative aspect-square sm:aspect-video",
  carousel__inner: "w-full h-full relative overflow-hidden",
  slide:
    "w-full h-full opacity-0  duration-500 ease-in-out delay-500 absolute top-0 left-0",
  active__slide:
    "w-full h-full opacity-1 duration-500 ease-in-out absolute top-0 left-0",
  carousel_actions:
    "absolute top-1/2 flex w-full items-center justify-between z-20",
  carousel_button:
    "btn btn-circle btn-sm sm:btn-lg  bg-transparent border-1 border-white/75 md:btn-lg shadow-lg shadow-red-900  hover:bg-orange-600 delay-150 hover:scale-105 mx-4",
  carousel_indicators:
    "flex space-x-6 z-10 absolute bottom-6 sm:bottom-8 md:bottom-12 w-full justify-center",
  indicator:
    "border-gray-100/20 delay-400 btn btn-xs sm:btn-sm btn-outline btn-circle text-white/75",
  active__indicator:
    "text-white  border-1 border-white btn btn-xs sm:btn-sm btn-outline btn-circle text-white",
};

const Carousel = ({ slides }) => {
  const { prevHandler, nextHandler, imageSliders, sliderIndictors } =
    useCarousel(slides);

  return (
    <div className={styles.carousel}>
      <ul className={styles.carousel__inner}>{imageSliders}</ul>

      <div className={styles.carousel_actions}>
        <button
          aria-hidden="true"
          onClick={prevHandler}
          className={styles.carousel_button}
        >
          <span className="sr-only">Previous</span>
          <span aria-hidden>❮</span>
        </button>

        <button
          aria-hidden="true"
          onClick={nextHandler}
          className={styles.carousel_button}
        >
          <span className="sr-only">Next</span>
          <span aria-hidden>❯</span>
        </button>
      </div>

      {sliderIndictors}
    </div>
  );
};

const useCarousel = (slides) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayingSlider, setIsPlayingSlider] = useState(true);

  const mouseOverHandler = () => {
    setIsPlayingSlider((oldState) => !oldState);
  };

  const nextHandler = useCallback(() => {
    setCurrentIndex((oldState) => {
      return currentIndex === slides.length - 1 ? 0 : oldState + 1;
    });
  }, [slides.length, currentIndex]);

  const prevHandler = () => {
    setCurrentIndex((oldState) => {
      return oldState === 0 ? slides.length - 1 : oldState - 1;
    });
  };

  useEffect(() => {
    const sliderTimer = isPlayingSlider ? setInterval(nextHandler, 5000) : null;
    return () => {
      clearInterval(sliderTimer);
    };
  }, [nextHandler, isPlayingSlider]);

  const imageSliders = slides.map((slide, slideIndex) => {
    const imgClass =
      currentIndex === slideIndex ? styles.active__slide : styles.slide;
    return (
      <li>
        <img
          key={slideIndex}
          onMouseDownCapture={mouseOverHandler}
          onMouseUpCapture={mouseOverHandler}
          src={slide.image}
          alt="Welcome to your church"
          className={imgClass}
        />
      </li>
    );
  });
  const sliderIndictors = (
    <div className={styles.carousel_indicators}>
      {slides.map((slide, slideIndex) => {
        const activeTab =
          currentIndex === slideIndex
            ? styles.active__indicator
            : styles.indicator;
        return (
          <button
            key={slideIndex}
            aria-label={`slide ${slideIndex + 1}`}
            className={activeTab}
            onClick={() => setCurrentIndex(slideIndex)}
          >
            <span aria-hidden>•</span>
          </button>
        );
      })}
    </div>
  );

  return {
    mouseOverHandler,
    nextHandler,
    prevHandler,
    currentIndex,
    setCurrentIndex,
    imageSliders,
    sliderIndictors,
  };
};

export default Carousel;
