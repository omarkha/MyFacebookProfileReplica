import React from "react";
import Header from "../components/Header";
import IntroSideBar from "../components/IntroSideBar";
import PhotosSideBar from "../components/PhotosSideBar";
import PostSection from "../components/PostSection";
import PostsSection from "../components/PostsSection";

const ProfilePage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="profile-body">
          <div className="side-content">
            <IntroSideBar />
            <PhotosSideBar />
          </div>

          <PostsSection />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
