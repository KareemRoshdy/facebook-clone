import React, { useEffect } from "react";
import user from "./image/friend-4.jpg";

const ProfileHeader = () => {
  const showComp = ({ target }) => {
    const allProfileComp = document.querySelectorAll(
      ".profileComponents > div"
    );
    allProfileComp.forEach((c) => {
      c.classList.add("hidden");
      if (c.id === target.textContent.toLowerCase()) {
        c.classList.remove("hidden");
      }
    });
  };
  useEffect(() => {
    const allLinksComp = document.querySelectorAll(".compLinks li");
    allLinksComp.forEach((li) => {
      li.addEventListener("click", () => {
        allLinksComp.forEach((e) => {
          e.classList.remove("active");
          li.classList.add("active");
        });
      });
    });
  }, []);

  return (
    <>
      <div className="profileHeader">
        <div className="user">
          <div className="img">
            <div className="content">
              <img className="img-fluid" src={user} alt="user" />
              <div className="edit">
                <i className="ri-image-edit-line"></i>
              </div>
            </div>
          </div>
          <div className="userInfo">
            <h3 className="userName">Kareem Roshdy</h3>
            <p className="nekName">(KemoCode)</p>
          </div>
        </div>
      </div>
      <div className="linksBar">
        <ul className="compLinks">
          <li onClick={showComp} className="active">
            TimeLine
          </li>
          <li onClick={showComp}>About</li>
          <li onClick={showComp}>Friends</li>
          <li onClick={showComp}>Photos</li>
          <li className="more">
            <div>
              More
              <i className="ri-arrow-down-s-fill"></i>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileHeader;
