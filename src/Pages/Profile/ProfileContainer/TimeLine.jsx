import React from "react";
import PostContainer from "../../../Components/Home/HomeContent/Posts/PostContainer";
import user from "../image/friend-4.jpg";
import img1 from "../image/11.jpg";
import img2 from "../image/friend-4.jpg";
import img3 from "../image/friend-6.jpg";
import img4 from "../image/friend-3.jpg";

const TimeLine = () => {
  return (
    <div id="timeline">
      <div>
        <PostContainer
          userImg={user}
          userName="Kareem Roshdy"
          postContent="New Post"
          postImage1={user}
        />

        <PostContainer
          userImg={user}
          userName="Kareem Roshdy"
          postContent="Hello, With React Framework"
        />
        <PostContainer
          userImg={user}
          userName="Kareem Roshdy"
          postContent="<KemoCode/>"
          postImage1={img1}
        />
        <PostContainer
          userImg={user}
          userName="Kareem Roshdy"
          postContent="My Friends"
          postImage1={img2}
          postImage2={img3}
          postImage3={img4}
        />
      </div>
    </div>
  );
};

export default TimeLine;
