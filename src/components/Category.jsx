import React from "react";
import { categorys } from "../constants";

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <div data-aos="zoom-out-left" data-aos-duration="1700" className="flex flex-row overflow-x-scroll overflow-auto">
      {categorys.map((item) => (
        <button
          className={`primary-btn flex items-center font-medium 
                    py-2 px-3 gap-1 transition-all rounded-md 
                    ${selectedCategory === item.name && "category-btn"}
                    ${selectedCategory === item.name && "text-white"}`}
          onClick={() => selectedCategoryHandler(item.name)}
          key={item.name}
        >
          <span>{item.icon}</span>
          <span className="text-xs w-[max-content]">{item.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Category;
