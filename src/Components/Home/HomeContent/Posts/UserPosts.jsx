import React from "react";
import PostContainer from "./PostContainer";
import "./UserPosts.css";
import user from "./image/friend-4.jpg";
import user2 from "./image/friend-3.jpg";
import user3 from "./image/12.jpg";
import img1 from "./image/friend-4.jpg";
import img2 from "./image/friend-2.jpg";
import img3 from "./image/friend-6.jpg";
import img4 from "./image/11.jpg";
import img5 from "./image/14.jpg";
import img6 from "./image/13.jpg";
const UserPosts = () => {
  return (
    <div className="userPosts">
      <PostContainer
        userImg={user}
        userName="Kareem Roshdy"
        postContent=" The Post Description Here The Post Description Here The Post
          Description Here The Post Description Here The Post Description Here
          The Post Description Here The Post Description Here "
        postImage1={img1}
        postImage2={img2}
        postImage3={img3}
      />

      <PostContainer
        userImg={user2}
        userName="Hamza Kareem"
        postContent="  "
        postImage1={img4}
      />
      <PostContainer
        userImg={user3}
        userName="Ahmed Roshdy"
        postContent="Mummy"
        postImage1={img5}
        postImage2={img6}
      />
    </div>
  );
};

export default UserPosts;
