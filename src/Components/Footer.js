import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="px-8 pt-16 mx-auto  w-12/12 sm:max-w-xl md:max-w-full lg:maz-w-xl md:px-24 lg:px-10">
        <div className="grid mb-8 md:grid-cols-6">
          <div className="grid grid-cols-2  gp-4 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-medium tracking-wider text-gray-300">
                Catagory
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    Prefrences
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wider text-gray-300">
                Catagory
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    eCommerce
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    Buissness
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wider text-gray-300">cherry</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    Brochurs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    Non-Profit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wider text-gray-300">
                Buissness
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    Brochurs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    Non-Profit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
            <p className="font-medium tracking-wider text-gray-300">
              Subscription for updates
            </p>
            <form className="mt-4 flex flex-col md:flex-row">
              <input
                type="email"
                name="email"
                className="flex-grow w-full h-10 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex  border items-center justify-center h-10 px-6 fontmedium tracking-wide text-wide transition duration-200 rounded shadow-md hover:bg-blue-600 text-white focus:outline-none"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-5 text-sm text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              ducimus eligendi praesentium magnam animi voluptatibus, adipisci
              repellendus excepturi, ipsam sit velit. Rem ad soluta, fugiat
              exercitationem dicta officia ratione. Modi.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500">
            <span className="text-base">©</span>Copyright 2024 | All right
            reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="#"
              className="text-gray-500  transition-all duration-300 hover:text-blue-600"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-500  transition-all duration-300 hover:text-blue-600"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-500  transition-all duration-300 hover:text-blue-600"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
