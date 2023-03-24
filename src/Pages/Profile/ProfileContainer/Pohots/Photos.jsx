import React from "react";
import PhotoComp from "./PhotoComp";
import "./Photos.css";

import img from "../../image/8.jpg";
import img2 from "../../image/9.jpg";
import img3 from "../../image/11.jpg";
import img4 from "../../image/12.jpg";
import img5 from "../../image/13.jpg";
import img6 from "../../image/friend-4.jpg";
import img7 from "../../image/14.jpg";
import img8 from "../../image/15.png";
import img9 from "../../image/16.jpg";
import img10 from "../../image/17.jpg";
import img11 from "../../image/18.jpg";
const Photos = () => {
  return (
    <div id="photos" className="hidden">
      <div className="row ms-1 me-1">
        <div className="col-sm-4 mb-3 p-1">
          <PhotoComp img={img} />
        </div>
        <div className="col-sm-4 mb-3 p-1">
          <PhotoComp img={img2} />
        </div>
        <div className="col-sm-4 mb-3 p-1">
          <PhotoComp img={img3} />
        </div>
        <div className="col-sm-4 mb-3 p-1">
          <PhotoComp img={img4} />
        </div>
        <div className="col-sm-4 mb-3 p-1">
          <PhotoComp img={img5} />
        </div>
        <div className="col-sm-4 mb-3 p-1">
          <PhotoComp img={img6} />
        </div>

        <div className="col-sm-4 mb-3 p-1">
          <PhotoComp img={img7} />
        </div>
        <div className="col-sm-4 mb-3 p-1">
          <PhotoComp img={img8} />
        </div>
        <div className="col-sm-4 mb-3 p-1">
          <PhotoComp img={img9} />
        </div>
        <div className="col-sm-4 mb-3 p-1">
          <PhotoComp img={img10} />
        </div>
        <div className="col-sm-4 mb-3 p-1">
          <PhotoComp img={img11} />
        </div>
        <div className="col-sm-4 mb-3 p-1">
          <PhotoComp img={img6} />
        </div>
      </div>
    </div>
  );
};

export default Photos;
