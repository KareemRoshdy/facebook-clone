import React from "react";

const MorePages = () => {
  return (
    <div className="morePages">
      <p className="title">Media Pages</p>

      <div className="more  d-flex align-items-center gap-3">
        <div className="icon one">
          <i className="ri-inbox-line"></i>
        </div>
        <p className="fs-6">Email Box</p>
      </div>

      <div className="more  d-flex align-items-center gap-3">
        <div className="icon two">
          <i className="ri-home-5-line"></i>
        </div>
        <p className="fs-6">Near Hotel</p>
      </div>

      <div className="more  d-flex align-items-center gap-3">
        <div className="icon two">
          <i className="ri-map-pin-line"></i>
        </div>
        <p className="fs-6">Latest Event</p>
      </div>

      <div className="more  d-flex align-items-center gap-3">
        <div className="icon two">
          <i className="ri-youtube-line"></i>
        </div>
        <p className="fs-6">Live Stream</p>
      </div>
    </div>
  );
};

export default MorePages;
