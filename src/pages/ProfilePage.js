import React from "react";
import Header from "../components/Header";
import IntroSideBar from "../components/IntroSideBar";
import PostSection from "../components/PostSection";
import PostsSection from "../components/PostsSection";

const ProfilePage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="profile-body">
          <IntroSideBar />
          <PostsSection />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
