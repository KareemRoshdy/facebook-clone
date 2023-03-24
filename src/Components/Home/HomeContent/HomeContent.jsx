import React from "react";
import Post from "./Post";
import UserPosts from "./Posts/UserPosts";
import Slider from "./Slider";

const HomeContent = () => {
  return (
    <div className="homeContent">
      <Slider />
      <Post />
      <UserPosts />
    </div>
  );
};

export default HomeContent;
