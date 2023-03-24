import React from "react";
import friend2 from "./image/friend-2.jpg";
import friend4 from "./image/friend-4.jpg";
import friend6 from "./image/friend-6.jpg";

const FriendsRequest = () => {
  return (
    <div className="friendsRequest">
      <div className="topTitle">
        <p className="title">Friends Requests</p>
        <a href="#">See all</a>
      </div>

      <div className="requestBox">
        <div className="user">
          <div className="img">
            <img className="img-fluid" src={friend2} alt="user" />
          </div>
          <div className="user-info">
            <h6 className="userName">Reem Mohammed</h6>
            <p className="mutualFriend">4 mutual friend</p>
          </div>
        </div>
        <div className="buttons">
          <button className="btn confirm">Confirm</button>
          <button className="btn delete">Delete</button>
        </div>
      </div>

      <div className="requestBox">
        <div className="user">
          <div className="img">
            <img className="img-fluid" src={friend6} alt="user" />
          </div>
          <div className="user-info">
            <h6 className="userName">Ahmed Zizo</h6>
            <p className="mutualFriend">12 mutual friend</p>
          </div>
        </div>
        <div className="buttons">
          <button className="btn confirm">Confirm</button>
          <button className="btn delete">Delete</button>
        </div>
      </div>

      <div className="requestBox">
        <div className="user">
          <div className="img">
            <img className="img-fluid" src={friend4} alt="user" />
          </div>
          <div className="user-info">
            <h6 className="userName">Kareem Roshdy</h6>
            <p className="mutualFriend">2 mutual friend</p>
          </div>
        </div>
        <div className="buttons">
          <button className="btn confirm">Confirm</button>
          <button className="btn delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default FriendsRequest;
