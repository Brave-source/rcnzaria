import React, { useState } from "react";

import {
  Bars3BottomRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/rcnlogo-3.png";

export function Logo({ className }) {
  return (
    <Link
      to="home"
      className={`logo hover:scale-105 w-24 block select-none ${className}`}
    >
      <img src={logo} alt="rcn-logo" className="w-full" />
    </Link>
  );
}

const Navbar = () => {
  const [navIsOpened, setNavIsOpened] = useState(false);

  const toggleNavbar = () => {
    setNavIsOpened((prevState) => !prevState);
  };

  const activeNavLink = ({ isActive }) => {
    return isActive
      ? " bg-transparent border-l-2 lg:border-b-2 lg:border-l-0 border-orange-600 font-bold "
      : "hover:bg-transparent hover:border-l-2 hover:lg:border-b-2 hover:lg:border-l-0 hover:border-orange-400";
  };

  return (
    <header className="bg-white drop-shadow-md w-full sticky top-0 z-[50]">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex p-4 lg:px-8 items-center justify-between">
          <Logo></Logo>
          <nav className="hidden lg:flex">
            <ul className="menu menu-horizontal sm:gap-1 xl:gap-4 sm:text-sm ">
              <li>
                <NavLink to="Home" className={activeNavLink}>
                  Home
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="Live" className={activeNavLink}>
                  Live Streaming
                </NavLink>
              </li> */}
              <li>
                <NavLink className={activeNavLink} to="sermons">
                  Sermons
                </NavLink>
              </li>
              <li>
                <NavLink to="ContactUs" className={activeNavLink}>
                  Contact us
                </NavLink>
              </li>
              <li>
                <NavLink to="Registration" className={activeNavLink}>
                  Partnership
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="flex ml-auto lg:m-0 gap-4">
            <button title="Search">
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-900" />
            </button>
            {/* <button>
              <ShoppingBagIcon className="w-6 h-6 text-gray-900" />
            </button> */}
          </div>

          {/* navbar for extra small screens to medium devices starts here */}
          <div className="flex lg:hidden">
            <nav>
              <button
                onClick={toggleNavbar}
                aria-label="toggle navigation"
                className=" flex ml-4 lg:hidden"
              >
                <Bars3BottomRightIcon className="w-6 h-6 text-gray-900" />
              </button>
              {navIsOpened && (
                <div className="fixed top-0 left-0 h-screen z-50 w-screen">
                  <div
                    onClick={toggleNavbar}
                    className=" w-full h-full bg-gray-900/70 z-[60]"
                  />
                  <div className=" fixed top-0 left-0 flex flex-col justify-start px-4 bg-white w-2/3 h-screen z-70 animate-[slide-in_250ms_linear]">
                    <Link className="py-6 px-4">
                      <img src={logo} alt="rcn-logo" />
                    </Link>
                    <ul className="menu bg-white">
                      <li>
                        <NavLink
                          onClick={() => setNavIsOpened(false)}
                          to="home"
                          className={activeNavLink}
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => setNavIsOpened(false)}
                          to="sermons"
                          className={activeNavLink}
                        >
                          Sermons
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => setNavIsOpened(false)}
                          to="ContactUs"
                          className={activeNavLink}
                        >
                          Contact us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => setNavIsOpened(false)}
                          to="Registration"
                          className={activeNavLink}
                        >
                          Partnership
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
