import React from "react";
import contactus from "../Assets/contactus.jpg";
const Contact = () => {
  return (
    <div className="md:flex mt-36 md:w-10/12 m-auto justify-around mb-8  ">
      <div className=" my-2 lg:w-8/12 md:w-full mx-10">
        <h1 className="md:text-3xl text-2xl md:text-left  content-center  text-[#212529] font-extrabold  md:mx-0 mx-4">
          Contact Us
        </h1>
        <form className="my-8 flex flex-col">
          <label className="mx-2  font-semibold text-[#212529]">Name</label>
          <input
            className=" mx-2 mb-4 h-10 w-10/12 px-4 text-[#687385] shadow-sm aspect-auto md:mr-2  transition duration-200 bg-white border border-gray-300 focus:outline-none"
            type="text"
            required
          />
          <label className="mx-2  font-semibold text-[#212529]">Email</label>
          <input
            className=" mx-2 h-10 w-10/12 mb-6 px-4  text-[#687385] shadow-sm aspect-auto md:mr-2  transition duration-200 bg-white border border-gray-300 focus:outline-none"
            type="email"
            required
          />
          <label className="mx-2  font-semibold text-[#212529]">Message</label>
          <textarea
            name="text"
            className="mx-2 lg:h-32 md:h-24 w-10/12 mb-4 px-4  text-[#687385] shadow-sm aspect-auto md:mr-2  transition duration-200 bg-white border border-gray-300 focus:outline-none"
            required
          ></textarea>
          <div className="flex items-center justify-center w-10/12">
            <button
              type="submit"
              className="bg-blue-600  font-semibold rounded-full  px-8 py-2  text-white  hover:bg-gray-300 hover:text-black  transition-all duration-150 ease-in "
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="md:flex md:justify-end  md:items-center md:w-full hidden ">
        <img
          className="lg:w-10/12 md:w-full md:h-60 lg:h-full object-cover"
          src={contactus}
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
