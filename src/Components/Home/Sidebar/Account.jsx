import React from "react";

const Account = () => {
  return (
    <div className="account">
      <p className="title">Account</p>

      <div className="acc  d-flex align-items-center gap-3">
        <div className="icon one">
          <i className="ri-settings-3-line"></i>
        </div>
        <p className="fs-6">Settings</p>
      </div>

      <div className="acc  d-flex align-items-center gap-3">
        <div className="icon one">
          <i className="ri-store-line"></i>
        </div>
        <p className="fs-6">Store</p>
      </div>

      <div className="acc  d-flex align-items-center gap-3">
        <div className="icon one">
          <i className="ri-vidicon-line"></i>
        </div>
        <p className="fs-6">Videos</p>
      </div>
    </div>
  );
};

export default Account;
