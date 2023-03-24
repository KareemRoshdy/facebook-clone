import React from "react";
import FriendsComp from "./FriendsComp";
import "./Friends.css";
import bg from "../../image/11.jpg";
import user from "../../image/friend-5.jpg";
import bg2 from "../../image/12.jpg";
import user2 from "../../image/friend-1.jpg";
import bg3 from "../../image/13.jpg";
import user3 from "../../image/friend-2.jpg";
import bg4 from "../../image/9.jpg";
import user4 from "../../image/friend-3.jpg";
import bg5 from "../../image/10.jpg";
import user5 from "../../image/friend-4.jpg";
import bg6 from "../../image/14.jpg";
import user6 from "../../image/friend-6.jpg";

const Friends = () => {
  return (
    <div id="friends" className="hidden">
      <div className="row ms-1 me-1">
        <div className="col-lg-4 p-2 col-md-6 col-sm-6">
          <FriendsComp
            bg={bg}
            userImg={user}
            userName="Hamza Kareem"
            nikName="DevOps"
          />
        </div>

        <div className="col-lg-4 p-2 col-md-6 col-sm-6">
          <FriendsComp
            bg={bg2}
            userImg={user2}
            userName="Minna Khaled"
            nikName="Frontend Developer"
          />
        </div>

        <div className="col-lg-4 p-2 col-md-6 col-sm-6">
          <FriendsComp
            bg={bg3}
            userImg={user3}
            userName="Nour Mustafa"
            nikName="Backend Developer"
          />
        </div>

        <div className="col-lg-4 p-2 col-md-6 col-sm-6">
          <FriendsComp
            bg={bg4}
            userImg={user4}
            userName="Zizo"
            nikName="UI/UX Designer"
          />
        </div>

        <div className="col-lg-4 p-2 col-md-6 col-sm-6">
          <FriendsComp
            bg={bg5}
            userImg={user5}
            userName="Mohammed"
            nikName=".NET Developer"
          />
        </div>

        <div className="col-lg-4 p-2 col-md-6 col-sm-6">
          <FriendsComp
            bg={bg6}
            userImg={user6}
            userName="Ahmed"
            nikName="ReactJS"
          />
        </div>
      </div>
    </div>
  );
};

export default Friends;
