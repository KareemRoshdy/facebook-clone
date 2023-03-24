import React from "react";
const PhotoComp = (props) => {
  return (
    <div className="photoComp">
      <div className="img">
        <img className="img-fluid" src={props.img} alt="img" />
      </div>
      <div className="photo-icons">
        <i className="ri-thumb-up-line"></i>
        <div className="more">
          <i className="ri-share-forward-line"></i>
          <i className="ri-more-2-line"></i>
        </div>
      </div>
    </div>
  );
};

export default PhotoComp;
