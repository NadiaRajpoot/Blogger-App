import { blog_data } from "../Assets/assets";

const Catagories = ({
  selectedCatagory,
  setfilterCatagory,
  setselectedCatagory,
  catagory,
}) => {
  return (
    <div className="  mt-4 mb-2 ">
      <div className=" md:w-10/12 md:m-auto w-full flex ml-4">
        <button
          onClick={() => {
            setfilterCatagory(blog_data);
            setselectedCatagory("all");
          }}
          className={`${
            selectedCatagory === "all"
              ? "mr-4  text-blue-600 text-sm md:text-base font-semibold px-6 "
              : "mr-4  text-[#687385] text-sm md:text-base font-semibold rounded-full px-6 "
          }`}
        >
          All
        </button>
        {catagory.map((c) => (
          <button
            key={c}
            onClick={() => {
              setselectedCatagory(c);
              const filteredList = blog_data.filter((blog) => {
                return blog.category === selectedCatagory;
              });
              setfilterCatagory(filteredList);
            }}
            className={`${
              c === selectedCatagory
                ? "mr-4  font-semibold md:text-base text-blue-600 text-sm rounded-full px-2   "
                : "mr-4  font-semibold md:text-base text-[#687385] text-sm rounded-full px-2 "
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
