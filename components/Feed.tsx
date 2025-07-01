import React from "react";
import PostForm from "../components/PostForm";
import Post from "../components/Post";

const Feed = () => {
  return (
    <div className="flex-grow max-w-xl border-2 border-black">
      <div className="py-5 px-5 text-lg sm:text-xl sticky top-0 font-bold shadow-sm">
        Feed
      </div>
      <PostForm />
      <Post />
    </div>
  );
};

export default Feed;
