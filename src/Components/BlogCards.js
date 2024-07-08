import React from "react";

import { Link } from "react-router-dom";
const BlogCards = ({ filterCatagory }) => {
  const timestamp = Date.now();
  const date = new Date(timestamp);
  // Format the date and time components
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  // Combine the components into a readable format
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 place-items-center w-10/12 m-auto">
      {filterCatagory.map((blog) => (
        <Link key={blog.id} className="shadow-lg p-4 rounded cursor-pointer">
          <div className="p-4">
            <div>
              <img src={blog.image} alt="blog" className="w-full" />
            </div>
            <h1 className="mt-4 mb-2 text-[#212529] font-bold hover:text-blue-600 cursor-pointer">
              {blog.title}
            </h1>
            <div className="flex mb-2">
              <img className="w-8 mx-2" src={blog.author_img} alt="" />
              <span className=" text-gray-600  font-semibold content-center text-sm">
                {blog.author}
              </span>
            </div>
            <p className="text-sm text-gray-500">Published: {formattedDate}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCards;
