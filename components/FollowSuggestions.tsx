import Image from "next/image";
import React from "react";

const FollowSuggestions = () => {
  return (
    <div className=" mt-4 p-5  rounded-2xl h-[3000px] bg-[#f3f9f1]">
      <h1 className="font-bold text-xl mb-5">Who to follow</h1>

      <div className="flex justify-between py-3">
        <div className="flex items-center space-x-3">
          <Image
            src="/assets/profile-pic.jpg"
            width="32"
            height="32"
            alt="profile picture"
            className="rounded-full w-11 h-11 "
          />
          <div className="flex flex-col">
            <span className="font-bold text-[15px]">username</span>
            <span className="text-sm text-[#90a08e]">@userId</span>
          </div>
        </div>
        <button className="bg-[#415d43] rounded-full h-10 px-4 text-white font-bold">
          Follow
        </button>
      </div>
      <div className="flex justify-between py-3">
        <div className="flex items-center space-x-3">
          <Image
            src="/assets/profile-pic.jpg"
            width="32"
            height="32"
            alt="profile picture"
            className="rounded-full w-11 h-11 "
          />
          <div className="flex flex-col">
            <span className="font-bold text-[15px]">username</span>
            <span className="text-sm text-[#90a08e]">@userId</span>
          </div>
        </div>
        <button className="bg-[#415d43] rounded-full h-10 px-4 text-white font-bold">
          Follow
        </button>
      </div>
      <div className="flex justify-between py-3">
        <div className="flex items-center space-x-3">
          <Image
            src="/assets/profile-pic.jpg"
            width="32"
            height="32"
            alt="profile picture"
            className="rounded-full w-11 h-11 "
          />
          <div className="flex flex-col">
            <span className="font-bold text-[15px]">username</span>
            <span className="text-sm text-[#90a08e]">@userId</span>
          </div>
        </div>
        <button className="bg-[#415d43] rounded-full h-10 px-4 text-white font-bold">
          Follow
        </button>
      </div>
    </div>
  );
};

export default FollowSuggestions;
