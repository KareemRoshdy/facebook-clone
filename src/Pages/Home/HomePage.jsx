import React from "react";
import FriendsReq from "../../Components/Home/FriendsReq/FriendsReq";
import Header from "../../Components/Home/Header/Header";
import HomeContent from "../../Components/Home/HomeContent/HomeContent";
import Sidebar from "../../Components/Home/Sidebar/Sidebar";

import "./Home.css";

const HomePage = () => {
  return (
    <div className="homePage">
      <Header />

      <div className="homeSections mt-1 d-flex ">
        <div className="sideCol col-md-2">
          <Sidebar />
        </div>
        <div className="homeContentCol col-lg-7 col-md-12">
          <HomeContent />
        </div>
        <div className="friendCol col-lg-3">
          <FriendsReq />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
