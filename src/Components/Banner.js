import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#f9fafe] w-screen h-screen flex items-center px-4 ">
      <div className="text-center w-10/12 lg:w-8/12  m-auto">
        <h1 className="text-2xl text-[#212529] lg:text-5xl font-extrabold leading-snug mb-6">
          Where developer Blogs meet Community Power!
        </h1>
        <p class="text-center text-[#687385] text-sm font-semibold md:text-base">
          Effortlessly create and grow developer blogs, newsletter, and team
          engineering blog with
          <span class="hidden md:inline">
            <br />
          </span>
          blogger. Enhance your writing with AI-powered features. Level up your
          content creation game!
        </p>
        <div className="flex justify-center items-center mt-8 mb-4 ">
          <button className="bg-white  text-[#212529] font-semibold rounded-full px-8 py-2 text-sm mr-4 shadow-lg  hover:bg-gray-300 hover:text-black  transition-all duration-200 ease-in">
            Log in
          </button>
          <button className="bg-blue-600 font-semibold rounded-full px-4 py-2 text-sm text-white  hover:bg-gray-300 hover:text-black  transition-all duration-150 ease-in ">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
