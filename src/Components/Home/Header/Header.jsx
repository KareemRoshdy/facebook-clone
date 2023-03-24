import React from "react";
import Logo from "../../Utility/Logo";
import Actions from "./Actions";
import Settings from "./Settings";
import "./Header.css";
const Header = () => {
  return (
    <div className="header d-flex align-items-center justify-content-between">
      <Logo />
      <Actions />
      <Settings />
    </div>
  );
};

export default Header;
