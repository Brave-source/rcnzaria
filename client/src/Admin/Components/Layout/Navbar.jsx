import {
  ArrowPathIcon,
  ArrowUpOnSquareStackIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { NavLink } from "react-router-dom";

const mobileScreen = window.innerWidth < 640;
export const Navbar = ({ toggleNavbar }) => {
  const toggleNavbarHandler = () => {
    toggleNavbar((oldState) => !oldState);
  };
  const activeClassHandler = ({ isActive }) => {
    return isActive
      ? "flex items-center gap-[10px] pl-2 lg:pl-6 border-l-4 border-white bg-[#4B5768]"
      : "flex items-center gap-[10px] lg:pl-6 pl-2";
  };
  return (
    <nav className="fixed top-0 left-0 z-50 h-screen w-[80%] sm:h-full sm:w-full sm:relative bg-[#14171F] sm:border-t border-white pt-10 text-white">
      <ul className="grid gap-3 font-semibold text-sm tracking-wide">
        <li onClick={mobileScreen ? toggleNavbarHandler : null}>
          <NavLink className={activeClassHandler} to="upload-sermons">
            <span
              aria-hidden
              className="flex items-center justify-center h-[36px] w-[36px]"
            >
              <ArrowUpOnSquareStackIcon className="w-6 h-6" />
            </span>
            Upload Sermons
          </NavLink>
        </li>
        <li onClick={mobileScreen ? toggleNavbarHandler : null}>
          <NavLink className={activeClassHandler} to="update-heroImg">
            <span
              aria-hidden
              className="flex items-center justify-center h-[36px] w-[36px]"
            >
              <ArrowPathIcon className="w-6 h-6" />
            </span>
            Update Hero Images
          </NavLink>
        </li>
        <li onClick={mobileScreen ? toggleNavbarHandler : null}>
          <NavLink className={activeClassHandler} to="sermons">
            <span
              aria-hidden
              className="flex items-center justify-center h-[36px] w-[36px]"
            >
              <BookOpenIcon className="w-6 h-6" />
            </span>
            Sermons
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
