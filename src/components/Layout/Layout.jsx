import React, { useEffect, useState } from "react";
import Footer from "../Navigation/Footer";
import Navbar from "../Navigation/Navbar";
import GoUpButton from "../UI/Carousel/GoUpButton";

const Layout = ({ children }) => {
  const [goUpBtnIsShown, setGoUpBtnIsShown] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const pageTop = document.querySelector("html");
      if (pageTop.scrollTop > window.innerHeight) {
        setGoUpBtnIsShown(true);
      } else {
        setGoUpBtnIsShown(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col" id="layout">
      {goUpBtnIsShown && <GoUpButton />}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default Layout;
