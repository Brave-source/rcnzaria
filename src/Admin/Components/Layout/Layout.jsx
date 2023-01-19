import React, { useState } from "react";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

const initialNavbarState = window.innerWidth >= 640 ? true : false;
const Layout = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(initialNavbarState);
  return (
    <div className="grid grid-rows-layout sm:grid-cols-layout h-screen max-h-screen bg-slate-800 w-full font-[Poppins]">
      <Header showNavbar={showNavbar} toggleNavbar={setShowNavbar} />
      {showNavbar && <Navbar toggleNavbar={setShowNavbar} />}
      <main className="bg-white h-full relative overflow-auto pb-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
