import React, { useEffect } from "react";
import AboutUsSection from "../components/Sections/AboutUsSection";
import AllSermonsSection from "../components/Sections/AllSermonsSection";
import HeroSection from "../components/Sections/HeroSection";
import SermonSection from "../components/Sections/SermonSection";

const Home = () => {
  useEffect(() => {
    document.querySelector("html").scrollTop = 0;
    document.title = "RCN Sermons| Home";
  }, []);

  return (
    <>
      <HeroSection />
      <SermonSection />
      <AboutUsSection />
      <AllSermonsSection />
    </>
  );
};

export default Home;
