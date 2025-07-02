import React from "react";
import Searchbar from "../components/Searchbar";
import FollowSuggestions from "../components/FollowSuggestions";

import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
const TrendingFeed = () => {
  return (
    <div className="hidden lg:block px-8">
      <Searchbar />
      <div className="flex flex-col mt-8 p-5  rounded-2xl h-[450px] bg-[#f3f9f1] w-[300px]">
        <h1 className="text-xl font-bold mb-5">Trending Topics</h1>

        <div className="flex justify-between items-center text-sm">
          <span className="text-[#90a08e]">Trending in Location</span>
          <EllipsisHorizontalIcon className="h-7 text-[#90a08e] " />
        </div>
        <span className="text-base font-bold mb-1">Donald Trump</span>
        <span className=" mb-4 text-sm text-[#90a08e]">300k likes</span>
        <div className="flex justify-between items-center text-sm">
          <span className="text-[#90a08e]">Trending in Location</span>
          <EllipsisHorizontalIcon className="h-7 text-[#90a08e] " />
        </div>
        <span className="text-base font-bold mb-1">Donald Trump</span>
        <span className=" mb-4 text-sm text-[#90a08e]">300k likes</span>
        <div className="flex justify-between items-center text-sm">
          <span className="text-[#90a08e]">Trending in Location</span>
          <EllipsisHorizontalIcon className="h-7 text-[#90a08e] " />
        </div>
        <span className="text-base font-bold mb-1 ">Donald Trump</span>
        <span className=" mb-4 text-sm text-[#90a08e]">300k likes</span>
        <div className="flex justify-between items-center text-sm">
          <span className="text-[#90a08e]">Trending in Location</span>
          <EllipsisHorizontalIcon className="h-7 text-[#90a08e] " />
        </div>
        <span className="text-base font-bold mb-1">Donald Trump</span>
        <span className=" mb-4 text-sm text-[#90a08e]">300k likes</span>
      </div>
      <FollowSuggestions />
    </div>
  );
};

export default TrendingFeed;
