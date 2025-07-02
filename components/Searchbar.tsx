import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const Searchbar = () => {
  return (
    <div className=" sticky top-0  py-2 bg-white">
      <div className="flex  border-2 rounded-full border-[#415d43] p-2 pr-3 mt-2 space-x-1 bg-white">
        <MagnifyingGlassIcon className="h-6 text-[#415d43]" />
        <input
          type="text"
          placeholder="Search"
          className=" outline-none"
        ></input>
      </div>
    </div>
  );
};

export default Searchbar;
