import React from "react";
import { NavLink } from "react-router-dom";

const Actions = () => {
  const openSearch = () => {
    const menu = document.querySelector(".newSettings");
    const search = document.querySelector(".search");
    search.classList.toggle("active");
    menu.classList.remove("active");
  };

  const links = document.querySelectorAll(".icons a");
  links.forEach((a) => {
    a.addEventListener("click", (e) => {
      links.forEach((link) => {
        link.classList.remove("active");
        e.classList.add("active");
      });
    });
  });

  return (
    <div className="actions d-flex align-items-center gap-3" id="actions">
      <div className="search d-flex align-items-center">
        <i className="ri-search-line"></i>
        <input
          type="search"
          id="searchInput"
          placeholder="Search"
          aria-label="Search"
          className="bg-transparent border-0"
        />
      </div>

      <div className="searchIconTwo">
        <i className="ri-search-line" id="searchIcon" onClick={openSearch}></i>
      </div>

      <div className="icons d-flex align-items-center gap-3">
        <NavLink to="/home" className="text-decoration-none">
          <i className="ri-home-line"></i>
        </NavLink>

        <NavLink to="/news" className="text-decoration-none">
          <i className="ri-flashlight-line"></i>
        </NavLink>

        <NavLink to="/videos" className="text-decoration-none">
          <i className="ri-vidicon-line"></i>
        </NavLink>

        <NavLink to="/profile" className="text-decoration-none">
          <i className="ri-user-line"></i>
        </NavLink>

        <NavLink to="/store" className="text-decoration-none">
          <i className="ri-store-line"></i>
        </NavLink>
      </div>
    </div>
  );
};

export default Actions;
