import React, { memo, useCallback, useState } from "react";
import Carousel from "../UI/Carousel/Carousel";
import CarouselItem from "../UI/Carousel/CarouselItem";

const DUMMY_CAROUSEL_DATA = [
  {
    image:
      "https://rcnsermons.org/wp-content/uploads/2022/03/WELCOLME-scaled-1170x600.jpg",
  },
  {
    image:
      "https://rcnsermons.org/wp-content/uploads/2022/03/D2-b-1170x600.jpg",
  },
  {
    image:
      "https://rcnsermons.org/wp-content/uploads/2020/05/recovery-1-480x300.jpg",
  },
  {
    image:
      "	https://rcnsermons.org/wp-content/uploads/2020/05/photo_2020-05-11_15-52-46-480x300.jpg",
  },
  {
    image:
      "https://rcnsermons.org/wp-content/uploads/2020/05/photo_2020-02-06_14-35-48-480x300.jpg",
  },
  {
    image:
      "https://rcnsermons.org/wp-content/uploads/2022/03/D2-b-1170x600.jpg",
  },
];
const HeroSection = () => {
  const [carouselChildrenLength, setCarouselChildrenLength] = useState(0);

  const getChildrenLengthHandler = useCallback(
    (length) => {
      setCarouselChildrenLength(length);
    },
    [setCarouselChildrenLength]
  );

  return (
    <section className="w-full bg-orange-100">
      <main className="wrapper">
        <Carousel getChildrenLength={getChildrenLengthHandler}>
          {DUMMY_CAROUSEL_DATA.map((item, index) => {
            let next;
            let prev;
            if (index === carouselChildrenLength - 1) {
              next = 0;
            } else {
              next = index + 1;
            }
            if (index === 0) {
              prev = carouselChildrenLength - 1;
            } else {
              prev = index - 1;
            }

            return (
              <CarouselItem
                key={index}
                ImageSrc={item.image}
                id={index}
                prev={prev}
                next={next}
              />
            );
          })}
        </Carousel>
      </main>
    </section>
  );
};

export default memo(HeroSection);
