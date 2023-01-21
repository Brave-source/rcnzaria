import { memo, useState, useEffect } from "react";
import axios from 'axios';
import TestCarousel from "../UI/Carousel/Carousel";

// export const DUMMY_CAROUSEL_DATA = [
//   {
//     image:
//       "https://rcnsermons.org/wp-content/uploads/2022/03/WELCOLME-scaled-1170x600.jpg",
//   },
//   {
//     image:
//       "https://rcnsermons.org/wp-content/uploads/2022/03/D2-b-1170x600.jpg",
//   },
//   {
//     image:
//       "https://rcnsermons.org/wp-content/uploads/2020/05/recovery-1-480x300.jpg",
//   },
//   {
//     image:
//       "	https://rcnsermons.org/wp-content/uploads/2020/05/photo_2020-05-11_15-52-46-480x300.jpg",
//   },
//   {
//     image:
//       "https://rcnsermons.org/wp-content/uploads/2020/05/photo_2020-02-06_14-35-48-480x300.jpg",
//   },
//   {
//     image:
//       "https://rcnsermons.org/wp-content/uploads/2022/03/D2-b-1170x600.jpg",
//   },
// ];
const HeroSection = () => {
  const [heros, setHeros] = useState([]);

  useEffect(() => {
    const getHeros = async() => {
      try {
        const res = await axios.get('/heros');
        setHeros(res.data);
      }catch(err) {
        console.log(err);
      }
    }
    getHeros();
  },[])

  return (
    <section className="w-full bg-orange-100">
      <main className="wrapper">
        <TestCarousel slides={heros} />
      </main>
    </section>
  );
};

export default memo(HeroSection);
