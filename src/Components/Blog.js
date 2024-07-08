import React, { useState } from "react";
import BlogCards from "./BlogCards";
import Catagories from "./Catagories";
import { blog_data } from "../Assets/assets";
const Blog = () => {
  const [selectedCatagory, setselectedCatagory] = useState("all");
  const [filterCatagory, setfilterCatagory] = useState(blog_data);

  const catagory = ["Startup", "Lifestyle", "Technology"];

  return (
    <div className="bg-[#f9fafe] md:py-32 py-24 px-4  ">
      <div className="text-center md:p-10 w-10/12 lg:w-8/12 py-6  m-auto">
        <h1 className="text-xl text-[#212529] lg:text-5xl font-extrabold leading-snug mb-6">
          Our Blogs: Elevate Your Development Skills with Blogger
        </h1>
      </div>
      <hr />
      <Catagories
        setfilterCatagory={setfilterCatagory}
        setselectedCatagory={setselectedCatagory}
        selectedCatagory={selectedCatagory}
        catagory={catagory}
      />
      <div>
        <hr />
        <BlogCards filterCatagory={filterCatagory} />
      </div>
    </div>
  );
};

export default Blog;
