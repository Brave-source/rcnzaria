import React, { useState } from "react";

import {
  Bars3BottomRightIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/rcnlogo-3.png";

const Navbar = () => {
  const [NavIsOpened, setNavIsOpened] = useState(false);
  const toggleNavbar = () => {
    setNavIsOpened((prevState) => !prevState);
  };
  const activeNavLink = ({ isActive }) => {
    return isActive
      ? " bg-transparent border-l-2 lg:border-b-2 lg:border-l-0 border-orange-600 font-bold "
      : "hover:bg-transparent hover:border-l-2 hover:lg:border-b-2 hover:lg:border-l-0 hover:border-orange-400";
  };
  return (
    <header className="bg-white drop-shadow-md sticky top-0 z-[50]">
      <div className="wrapper">
        <div className="flex p-4 items-center justify-between">
          <Link className="logo lg:mr-4 hover:scale-105 w-24 block select-none">
            <img src={logo} alt="rcn-logo" className="w-full" />
          </Link>
          <nav className="hidden lg:flex">
            <ul className="menu menu-horizontal sm:gap-1 xl:gap-4 sm:text-sm ">
              <li>
                <NavLink to="Home" className={activeNavLink}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={activeNavLink}>
                  Live Streaming
                </NavLink>
              </li>
              <li>
                <div>
                  Sermons <ChevronDownIcon className="w-4" />
                </div>
                <ul className="p-5 gap-3 bg-white rounded-lg shadow-md drop-shadow-lg ">
                  <NavLink to="/" className={activeNavLink}>
                    List Sermons (A-Z)
                  </NavLink>
                  <NavLink to="/" className={activeNavLink}>
                    List Sermons by Date
                  </NavLink>
                </ul>
              </li>
              <li>
                <NavLink to="/" className={activeNavLink}>
                  Contact us
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={activeNavLink}>
                  RKS Partnership
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={activeNavLink}>
                  E-Church Registration
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="flex ml-auto lg:m-0 gap-4">
            <button>
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-900" />
            </button>
            <button>
              <ShoppingBagIcon className="w-6 h-6 text-gray-900" />
            </button>
          </div>

          {/* navbar for extra small screens to medium devices starts here */}
          <div className="flex lg:hidden">
            <nav>
              <button
                onClick={toggleNavbar}
                aria-label="toggle"
                className=" flex ml-4 lg:hidden"
              >
                <Bars3BottomRightIcon className="w-6 h-6 text-gray-900" />
              </button>
              {NavIsOpened && (
                <div className="fixed lg:hidden top-0 left-0 h-screen w-full z-50">
                  <div
                    onClick={toggleNavbar}
                    className=" w-full h-full bg-slate-900/25 backdrop-blur-sm z-40"
                  ></div>
                  <div className=" flex flex-col justify-start absolute px-4 top-0 left-0 bg-white w-2/3 h-full z-[9999] animate-[slide-in_250ms_linear] ">
                    <Link className="py-6 px-4">
                      <img src={logo} alt="rcn-logo" />
                    </Link>
                    <ul className="menu">
                      <li>
                        <NavLink to="home" className={activeNavLink}>
                          Home
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/" className={activeNavLink}>
                          Live Streaming
                        </NavLink>
                      </li>
                      <li>
                        <div>
                          Sermons <ChevronDownIcon className="w-4" />
                        </div>
                        <ul className="p-5 gap-3 bg-white rounded-sm shadow-md">
                          <NavLink to="/" className={activeNavLink}>
                            List Sermons (A-Z)
                          </NavLink>
                          <NavLink to="/" className={activeNavLink}>
                            List Sermons by Date
                          </NavLink>
                        </ul>
                      </li>
                      <li>
                        <NavLink to="/" className={activeNavLink}>
                          Contact us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/" className={activeNavLink}>
                          RKS Partnership
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/" className={activeNavLink}>
                          E-Church Registration
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
