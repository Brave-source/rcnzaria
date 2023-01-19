import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import Logo from "../../../assets/rcnlogo-3.png";
import { Avatar } from "../../../components/UI/Avatar";

export const Header = ({ toggleNavbar, showNavbar }) => {
  const toggleNavbarHandler = () => {
    toggleNavbar((oldSate) => !oldSate);
  };

  return (
    <header className="col-span-full h-full  bg-[#e8e9db] shadow-lg px-4  py-[10px] sm:px-[32px] flex flex-row-reverse sm:flex-row justify-between items-center z-20">
      <button onClick={toggleNavbarHandler} className="sm:hidden">
        {showNavbar ? (
          <XMarkIcon className="w-8 h-8" />
        ) : (
          <Bars3Icon className="w-8 h-8" />
        )}
      </button>
      <h1 className="text-gray-900 text-2xl tracking-wide">Admin Panel</h1>
      <div className="w-fit">
        <Avatar image={Logo} />
      </div>
    </header>
  );
};
