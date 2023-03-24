import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link to="/" className="logo text-decoration-none">
        <i className="ri-flashlight-line"></i>
        <span>KemoCode.</span>
      </Link>
    </>
  );
};

export default Logo;
