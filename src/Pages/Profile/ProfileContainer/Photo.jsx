/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import img1 from "../image/10.jpg";
import img2 from "../image/11.jpg";
import img5 from "../image/friend-4.jpg";
import img6 from "../image/friend-6.jpg";
const Photo = () => {
  return (
    <div className="photo">
      <div className="title">
        <div className="icon">
          <i className="ri-image-2-line"></i>
        </div>
        <div className="text">
          <p>Photos</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-4">
          <img className="img-fluid" src={img2} alt="photo" />
        </div>
        <div className="col-md-4 col-sm-4">
          <img className="img-fluid" src={img1} alt="photo" />
        </div>
        <div className="col-md-4 col-sm-4">
          <img className="img-fluid" src={img5} alt="photo" />
        </div>
        <div className="col-md-4 col-sm-4">
          <img className="img-fluid" src={img6} alt="photo" />
        </div>
      </div>
      <div className="viewAll">
        <a href="#">View All Photos</a>
      </div>
    </div>
  );
};

export default Photo;
