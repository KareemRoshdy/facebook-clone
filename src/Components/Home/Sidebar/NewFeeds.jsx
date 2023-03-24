import React from "react";

const NewFeeds = () => {
  return (
    <div className="newFeeds">
      <p className="title">New Feeds</p>

      <div className="new  d-flex align-items-center gap-3">
        <div className="icon one">
          <i className="ri-tv-line"></i>
        </div>
        <p className="fs-6">NewsFeed</p>
      </div>

      <div className="new  d-flex align-items-center gap-3">
        <div className="icon two">
          <i className="ri-award-line"></i>
        </div>
        <p className="fs-6">Badges</p>
      </div>

      <div className="new  d-flex align-items-center gap-3">
        <div className="icon three">
          <i className="ri-global-line"></i>
        </div>
        <p className="fs-6">Explore Scores</p>
      </div>

      <div className="new  d-flex align-items-center gap-3">
        <div className="icon four">
          <i className="ri-flashlight-line"></i>
        </div>
        <p className="fs-6">Popular Groups</p>
      </div>

      <div className="new  d-flex align-items-center gap-3">
        <div className="icon six">
          <i className="ri-user-line"></i>
        </div>
        <p className="fs-6">Author Profile</p>
      </div>
    </div>
  );
};

export default NewFeeds;
