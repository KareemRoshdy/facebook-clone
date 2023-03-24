import React from "react";
import Confirm from "./Confirm";
import "./FriendReq.css";
import FriendsRequest from "./FriendsRequest";
const FriendsReq = () => {
  return (
    <div className="friendsReq">
      <FriendsRequest />
      <Confirm />
    </div>
  );
};

export default FriendsReq;
