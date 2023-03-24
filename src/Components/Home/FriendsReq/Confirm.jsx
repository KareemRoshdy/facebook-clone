import React from "react";
import friend1 from "./image/friend-1.jpg";
import friend3 from "./image/friend-3.jpg";
import friend5 from "./image/friend-5.jpg";
const Confirm = () => {
  return (
    <div className="confirm">
      <div className="topTitle">
        <p className="title">Confirm Friend</p>
        <a href="#">See all</a>
      </div>

      <div className="confirmBox d-flex align-items-center justify-content-between">
        <div className="user d-flex align-items-center gap-3">
          <div className="img">
            <img className="img-fluid" src={friend5} alt="user" />
          </div>
          <div className="userInfo">
            <h6 className="userName fw-bold">Mohammed Khaled</h6>
            <p className="mutualFriend">4 mutual friend</p>
          </div>
        </div>
        <div className="icon">
          <i className="ri-arrow-right-s-line"></i>
        </div>
      </div>

      <div className="confirmBox d-flex align-items-center justify-content-between">
        <div className="user d-flex align-items-center gap-3">
          <div className="img">
            <img className="img-fluid" src={friend1} alt="user" />
          </div>
          <div className="userInfo">
            <h6 className="userName fw-bold">Minna Ali</h6>
            <p className="mutualFriend">22 mutual friend</p>
          </div>
        </div>
        <div className="icon">
          <i className="ri-add-line"></i>
        </div>
      </div>

      <div className="confirmBox d-flex align-items-center justify-content-between">
        <div className="user d-flex align-items-center gap-3">
          <div className="img">
            <img className="img-fluid" src={friend3} alt="user" />
          </div>
          <div className="userInfo">
            <h6 className="userName fw-bold">Hamza Kareem</h6>
            <p className="mutualFriend">13 mutual friend</p>
          </div>
        </div>
        <div className="icon">
          <i className="ri-subtract-line"></i>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
