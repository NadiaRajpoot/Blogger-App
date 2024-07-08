import React from "react";

const About = () => {
  return (
    <div className="md:flex mt-36 md:w-10/12 m-auto justify-between mb-8  ">
      <div className="md:w-6/12 my-2">
        <h1 className="md:text-3xl text-2xl md:text-left  content-center  text-[#212529] font-extrabold px-4 md:mx-0 mx-4">
          About Us
        </h1>
        <p className="text-[#687385] text-base font-bold p-4 content-center md:mx-0 mx-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eum, non
          ratione vero vitae corrupti nobis explicabo, quibusdam cupiditate
          deleniti sapiente maxime rem nostrum iusto omnis quos repudiandae
          voluptatum hic?
        </p>
      </div>

      <div className="flex justify-center ">
        <img
          className="w-8/12 object-cover"
          src="https://stories-nextjs-v3.vercel.app/assets/imgs/authors/featured.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
