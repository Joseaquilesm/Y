import React from "react";
import Image from "next/image";

export const PostHeader = () => {
  return (
    <div className="flex p-3 space-x-3">
      <Image
        src="/assets/profile-pic.jpg"
        width="32"
        height="32"
        alt="profile picture"
        className="rounded-full w-11 h-11 "
      />
      <div className="">
        <div className="flex items-center space-x-1">
          <span className="font-bold">Username</span>
          <div className="text-[#a3b18a] space-x-1">
            <span className="">@userid</span>
            <span>·</span>
            <span>date and time</span>
          </div>
        </div>
        <span>hello</span>
      </div>
    </div>
  );
};
