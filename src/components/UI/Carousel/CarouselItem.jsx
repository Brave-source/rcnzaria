import React from "react";

const CarouselItem = ({ ImageSrc, id, next, prev }) => {
  return (
    <>
      <div
        id={`hero${id}`}
        className="carousel-item relative w-full sm:aspect-auto aspect-square "
      >
        <img src={ImageSrc} className="w-full object-fill" alt="/" />
        <div className="absolute flex justify-center gap-8 w-full  bottom-8 sm:bottom-28 md:justify-end px-12 ">
          <a
            href={`#hero${prev}`}
            role="button"
            className="btn btn-circle btn-sm bg-transparent border-1 border-white/75 md:btn-lg shadow-lg shadow-red-900 hover:bg-orange-600 delay-150 hover:scale-105"
          >
            ❮
          </a>
          <a
            href={`#hero${next}`}
            className="btn btn-circle btn-sm bg-transparent border-1 border-white/75 md:btn-lg shadow-lg shadow-red-900  hover:bg-orange-600 delay-150 hover:scale-105"
          >
            ❯
          </a>
        </div>
      </div>
    </>
  );
};

export default CarouselItem;
