import React from "react";
import "./PostContainer.css";
const PostContainer = (props) => {
  return (
    <div className="postContainer">
      <div className="postTop">
        <div className="user">
          <div className="img">
            <img className="img-fluid" src={props.userImg} alt="user img" />
          </div>
          <div className="userInfo">
            <h6 className="userName">{props.userName}</h6>
            <p className="hours">12 hours ago</p>
          </div>
        </div>
        <div className="more">
          <i className="ri-more-fill"></i>
        </div>
      </div>
      <div className="postContent">
        <p className="postDescription">{props.postContent}</p>
      </div>
      <div className="postImages">
        {props.postImage1 && (
          <div className="img">
            <img className="img-fluid" src={props.postImage1} alt="" />
          </div>
        )}
        {props.postImage2 && (
          <div className="img">
            <img className="img-fluid" src={props.postImage2} alt="" />
          </div>
        )}
        {props.postImage3 && (
          <div className="img last">
            <img className="img-fluid" src={props.postImage3} alt="" />
          </div>
        )}
      </div>
      <div className="postControl">
        <div className="reacts">
          <div className="min-like">
            <i className="ri-thumb-up-line"></i>

            <div className="react-icons">
              <div className="icon like">
                <i className="ri-thumb-up-line"></i>
              </div>

              <div className="icon love">
                <i className="ri-heart-line"></i>
              </div>

              <div className="icon laugh">
                <i className="ri-emotion-laugh-line"></i>
              </div>

              <div className="icon sad">
                <i className="ri-emotion-sad-line"></i>
              </div>

              <div className="icon unhappy">
                <i className="ri-emotion-unhappy-line"></i>
              </div>
            </div>
          </div>
          <div className="likeCount">2.8K</div>
          <div className="comments">
            <div className="icon">
              <i className="ri-chat-3-line"></i>
            </div>
            <div className="commentsCount">
              <p>22</p>
            </div>
          </div>
        </div>
        <div className="share">
          <i className="ri-share-line"></i>
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
