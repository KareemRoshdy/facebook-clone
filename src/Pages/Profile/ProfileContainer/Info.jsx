import React from "react";

const Info = () => {
  return (
    <>
      <div className="info">
        <div className="title">
          <div className="icon">
            <i className="ri-earth-line"></i>
          </div>
          <div className="text">
            <p>Intro</p>
          </div>
        </div>
        <div className="infoDescription">
          <p>Frontend Web Developer, HTML, CSS, JS And ReactJS </p>
        </div>
        <hr />
        <ul className="infoAbout">
          <li>
            <i className="ri-briefcase-4-fill"></i>
            <p>
              Group Member at <span>JS USA</span>
            </p>
          </li>

          <li>
            <i className="ri-briefcase-4-fill"></i>
            <p>
              Web Developer at <span>Freelancer</span>
            </p>
          </li>

          <li>
            <i className="ri-building-line"></i>
            <p>
              Studied at <span>Internet</span>
            </p>
          </li>
          <li>
            <i class="ri-rss-line"></i>
            <p>
              Followed by <span>22,564 People</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Info;
