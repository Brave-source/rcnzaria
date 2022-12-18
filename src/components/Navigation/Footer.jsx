import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "./Navbar";

const Footer = () => {
  const year = new Date().getFullYear();
  const activeLinkClass = ({ isActive }) => {
    return isActive
      ? " pl-4 border-l-2 border-orange-500 font-bold"
      : " pl-4 hover:border-l-2 hover:border-orange-400";
  };
  return (
    <footer className="px-4 pt-8 pb-2 bg-orange-100 mt-auto">
      <div className="wrapper">
        <div className="flex flex-col gap-6 sm:grid sm:grid-cols-5 max-w-3xl mx-auto">
          <div className="w-fit mx-auto col-span-1">
            <Logo />
          </div>
          <div className="text-center sm:col-span-2 sm:text-left">
            <h1 className="font-bold tracking-wider text-xl uppercase ">
              Navigation Links
            </h1>
            <ul className="flex flex-col gap-2 mt-3">
              <NavLink to="home" className={activeLinkClass}>
                Home
              </NavLink>
              <NavLink to="/" className={activeLinkClass}>
                Live Streaming
              </NavLink>
              <NavLink to="/" className={activeLinkClass}>
                Sermons
              </NavLink>
              <NavLink to="/" className={activeLinkClass}>
                Contact Us
              </NavLink>
              <NavLink to="/" className={activeLinkClass}>
                RKS Partnership
              </NavLink>
              <NavLink to="/" className={activeLinkClass}>
                E-Church Registration
              </NavLink>
            </ul>
          </div>
          <div className="text-center sm:text-left sm:col-span-2">
            <h1 className="font-bold tracking-wider text-xl uppercase">
              Contact Us
            </h1>
            <ul className="flex flex-col gap-2">
              <li className="flex gap-2 items-center justify-center mt-3 sm:justify-start">
                <span>
                  <EnvelopeIcon className="w-6 text-orange-500" />
                </span>
                contact@rcnsermons.org
              </li>
              <li className="flex gap-2 items-center justify-center sm:justify-start">
                <span>
                  <PhoneIcon className="w-6 text-orange-500" />
                </span>
                +2348060508888
              </li>
              <li className="flex gap-2 items-center justify-center sm:justify-start">
                <span>
                  <PhoneIcon className="w-6 text-orange-500" />
                </span>
                +2348139073081
              </li>
              <li className="flex gap-2 items-center justify-center sm:justify-start">
                <span>
                  <PhoneIcon className="w-6 text-orange-500" />
                </span>
                +2348036635894
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-xs">
          <p>Copyright © {year}. RCN Sermons </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
