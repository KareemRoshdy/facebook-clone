import React from "react";
import user from "./image/friend-4.jpg";
const Post = () => {
  return (
    <div className="post">
      <div className="top d-flex align-items-center">
        <div className="icon">
          <i className="ri-edit-line"></i>
        </div>
        <div className="text">
          <p>Creating Post</p>
        </div>
      </div>

      <div className="postInput">
        <div className="img">
          <img className="img-fluid" src={user} alt="user" />
        </div>
        <textarea
          cols="30"
          rows="5"
          placeholder="What's on your mined?"
        ></textarea>
      </div>

      <div className="actions">
        <div className="created d-flex align-items-center">
          <div className="box">
            <div className="icon one">
              <i className="ri-vidicon-line"></i>
            </div>
            <div className="text">
              <p>Live Video</p>
            </div>
          </div>

          <div className="box">
            <div className="icon two">
              <i className="ri-image-line"></i>
            </div>
            <div className="text">
              <p>Photo/Video</p>
            </div>
          </div>

          <div className="box">
            <div className="icon three">
              <i className="ri-camera-line"></i>
            </div>
            <div className="text">
              <p>Feeling/Activity</p>
            </div>
          </div>
        </div>
        <div className="more">
          <i className="ri-more-line"></i>
        </div>
      </div>
    </div>
  );
};

export default Post;
