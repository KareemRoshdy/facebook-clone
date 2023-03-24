import React from "react";
import Header from "../../Components/Home/Header/Header";
import ProfileHeader from "./ProfileHeader";
import "./Profile.css";
import ProfileContent from "./ProfileContainer/ProfileContent";
const ProfilePage = () => {
  return (
    <div className="profilePage">
      <Header />
      <div className="container-md">
        <ProfileHeader />
        <ProfileContent />
      </div>
    </div>
  );
};

export default ProfilePage;
