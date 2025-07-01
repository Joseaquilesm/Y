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
        <div className="flex  space-x-1">
          <span className="font-bold inline-block whitespace-nowrap overflow-hidden text-ellipsis max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px]">
            Username
          </span>
          <div className="flex text-[#90a08e] space-x-1">
            <span className="inline-block whitespace-nowrap overflow-hidden text-ellipsis max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px]">
              @userid
            </span>
            <span>·</span>
            <span>2 days ago</span>
          </div>
        </div>
        <span>hello</span>
      </div>
    </div>
  );
};
