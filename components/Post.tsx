import React from "react";
import { PostHeader } from "../components/PostHeader";
import {
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
const Post = () => {
  return (
    <div className="shadow-lg pb-4">
      <PostHeader />
      <div className="flex ml-16">
        <div className="flex items-center cursor-pointer space-x-1 group">
          <ChatBubbleOvalLeftIcon className="w-[22px] h-[22px] text-[#869c83] transition group-hover:text-[#588157]" />
          <span className="text-[0.8rem] text-[#90a08e] transition group-hover:text-[#588157]">
            13k
          </span>
        </div>
        <div className="flex ml-16   items-center cursor-pointer space-x-1 group">
          <ChartBarIcon className="w-[22px] h-[22px] text-[#869c83] transition group-hover:text-[#588157]" />
          <span className="text-[0.8rem] text-[#90a08e] transition group-hover:text-[#588157]">
            25k
          </span>
        </div>
        <div className="flex ml-16   items-center cursor-pointer space-x-1 group">
          <HeartIcon className="w-[22px] h-[22px] text-[#869c83] transition group-hover:text-[#588157]" />
          <span className="text-[0.8rem] text-[#90a08e] transition group-hover:text-[#588157]">
            1k
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
