import Image from "next/image";
import React from "react";
import {
  PhotoIcon,
  FaceSmileIcon,
  ChartBarIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
const PostForm = () => {
  return (
    <div className="flex items-start p-4 space-x-4">
      <Image
        className=""
        src="/assets/Y-logo.svg"
        width={32}
        height={32}
        alt="profile picture"
      />
      <div className="w-full">
        <textarea
          className="w-full leading-tight pt-1 
         outline-none resize-none min-h-[50px] text-xl font-light  shadow-xl"
          placeholder="What's happening?"
        />

        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <PhotoIcon className="w-d[20px] h-[20px] text-[#415d43] "></PhotoIcon>
            <FaceSmileIcon className="w-d[20px] h-[20px]  text-[#415d43]"></FaceSmileIcon>
            <ChartBarIcon className="w-d[20px] h-[20px]  text-[#415d43]"></ChartBarIcon>
            <CalendarIcon className="w-d[20px] h-[20px]  text-[#415d43]"></CalendarIcon>
            <MapPinIcon className="w-d[20px] h-[20px]  text-[#415d43]"></MapPinIcon>
          </div>
          <button className=" bg-[#415d43] rounded-full py-2 px-5 text-white font-bold">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
