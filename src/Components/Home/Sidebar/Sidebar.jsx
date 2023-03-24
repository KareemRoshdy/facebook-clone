import React from "react";
import Account from "./Account";
import MorePages from "./MorePages";
import NewFeeds from "./NewFeeds";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <NewFeeds />
      <MorePages />
      <Account />
    </div>
  );
};

export default Sidebar;
