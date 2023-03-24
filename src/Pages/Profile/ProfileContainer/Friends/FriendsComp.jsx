import React from "react";

const FriendsComp = (props) => {
  return (
    <div className="friendsComp">
      <div className="user">
        <div className="bgImg">
          <img src={props.bg} alt="bg" className="img-fluid" />
        </div>
        <div className="userInfo">
          <div className="userImg">
            <img src={props.userImg} alt="user" className="img-fluid" />
          </div>
          <div className="userName">
            <h5>{props.userName}</h5>
          </div>
          <div className="nikName">
            {props.nikName && <p>({props.nikName})</p>}
          </div>
        </div>
      </div>
      <div className="next">
        <div className="numbers">
          <div className="postsNum">
            <h6>456</h6>
            <p>Posts</p>
          </div>
          <div className="followersNum">
            <h6>2.1k</h6>
            <p>Followers</p>
          </div>
          <div className="followNum">
            <h6>32k</h6>
            <p>Follow</p>
          </div>
        </div>
        <div className="controls">
          <div className="addBtn">
            <button>UNFRIEND</button>
          </div>

          <div className="msgIcon">
            <i className="ri-messenger-line"></i>
          </div>
          <div className="moreIcon">
            <i className="ri-more-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsComp;
