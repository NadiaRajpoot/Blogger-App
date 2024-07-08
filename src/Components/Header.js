import React from "react";

import { Link, useLocation } from "react-router-dom";

import {
  FaFacebook,
  FaDribbble,
  FaTwitter,
  FaBars,
  FaXmark,
  FaBloggerB,
} from "react-icons/fa6";
import { useState } from "react";
import "../App.css";
const Header = () => {
  const [menuOpen, setmenuOpen] = useState(true);

  const location = useLocation();
  const toggleMenu = () => {
    setmenuOpen(!menuOpen);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About Us" },
    { path: "/contact", link: "Contact" },
    { path: "/blog", link: "Blog" },
  ];

  return (
    <header
      className={`${
        menuOpen ? "shadow-lg ring-1 ring-gray-300" : ""
      } z-10 fixed top-0 left-0 right-0 ring-1 ring-gray-300 bg-white`}
    >
      <nav className="px-4 py-4  max-w-7xl m-auto flex justify-between">
        <div className="flex">
          <span>
            <FaBloggerB className="text-blue-600 text-4xl" />
          </span>
          <span className="text-2xl font-bold content-center font-primary p-1">
            blogger
          </span>
        </div>
        <ul className=" md:flex text-base gap-12 hidden items-center  ">
          {navItems.map(({ path, link }) => (
            <li className=" font-semibold first-line:">
              <Link
                className={
                  location.pathname === path
                    ? "  text-blue-600 "
                    : "text-[#687385]"
                }
                key={path}
                to={path}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-blue-600 lg:flex items-center gap-4  hidden">
          <Link>
            <FaFacebook />
          </Link>
          <Link>
            <FaDribbble />
          </Link>

          <Link>
            <FaTwitter />
          </Link>
          <button className="bg-blue-600 font-semibold text-white px-6 py-2  rounded-full cursor-pointer hover:bg-gray-300 hover:text-black  transition-all duration-200 ease-in">
            Log in
          </button>
        </div>

        {/*  mobile menu */}

        <div className="md:hidden text-blue-600 flex items-center">
          <button onClick={toggleMenu} className="cursor-pointer">
            {menuOpen ? (
              <FaXmark className="w-5 h-5 " />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
      <div>
        <ul
          className={`md:hidden text-base  gap-12 block spacing-x-4  py-6 mt-14 bg-white shadow-lg ${
            menuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
              : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li
              className={
                location.pathname === path
                  ? " px-4 py-2 text-blue-600 border-y-2 my-2 border-gray-200 font-semibold "
                  : "text-[#212529] font-semibold my-2 px-4 font-semibol"
              }
            >
              <Link onClick={toggleMenu} key={path} to={path}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
