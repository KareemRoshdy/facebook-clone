import React from "react";
import "./profileContent.css";
import Info from "./Info";
import Photo from "./Photo";
import TimeLine from "./TimeLine";
import About from "./About/About";
import Friends from "./Friends/Friends";
import Photos from "./Pohots/Photos";
const ProfileContent = () => {
  return (
    <div className="profileContent">
      <div className="row">
        <div className="col-md-4">
          <Info />
          <Photo />
        </div>
        <div className="profileComponents col-md-8">
          <TimeLine />
          <About />
          <Friends />
          <Photos />
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
