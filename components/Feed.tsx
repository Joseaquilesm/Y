import React from "react";
import PostForm from "../components/PostForm";
import Post from "../components/Post";

const Feed = () => {
  return (
    <div className="flex-grow mx-3 max-w-xl border-x-2 border-[#fbfbfb]">
      <div className="py-5 px-5 text-lg sm:text-xl sticky top-0  backdrop-blur-md bg-white/60 font-bold shadow-sm">
        Feed
      </div>
      <PostForm />
      <Post />
    </div>
  );
};

export default Feed;
