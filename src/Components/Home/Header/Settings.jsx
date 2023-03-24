import React from "react";
import { Link } from "react-router-dom";
import user from "./user.svg";
const Settings = () => {
  const openMenu = () => {
    const menu = document.querySelector(".newSettings");
    const search = document.querySelector(".search");
    menu.classList.toggle("active");
    search.classList.remove("active");
  };

  return (
    <div className="settings d-flex align-items-center gap-3">
      <div className="settingsIcons d-flex align-items-center gap-3">
        <i className="ri-notification-2-line"></i>
        <i className="ri-chat-4-line"></i>
        <i className="ri-settings-3-line"></i>
        <Link to="/profile" className="user text-decoration-none">
          <img className="img-fluid" src={user} alt="user" />
        </Link>
      </div>
      <i className="ri-menu-3-line menu" id="menuBtn" onClick={openMenu}></i>

      <div className="newSettings">
        <Link to="/profile" className="user text-decoration-none">
          <img className="img-fluid" src={user} alt="user" />
          <p>Your Profile</p>
        </Link>
        <div className="links">
          <div className="link">
            <i className="ri-notification-2-line icon"></i>
            <p className="text">Notifications</p>
          </div>
          <div className="link">
            <i className="ri-chat-4-line icon"></i>
            <p className="text">Massages</p>
          </div>
          <div className="link">
            <i className="ri-user-add-line"></i>
            <p className="text">Friends Requests</p>
          </div>
          <div className="link">
            <i className="ri-settings-3-line icon"></i>
            <p className="text">Settings</p>
          </div>
          <div className="link">
            <i className="ri-logout-circle-line icon"></i>
            <p className="text">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
