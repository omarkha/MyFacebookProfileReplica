import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container-lg">
        <div className="header-image"></div>
        <section className="display-section">
          <div className="profile-page-main-pic"></div>
          <div className="main-info">
            <div className="main-info-text">
              <h3>Omar Khalil</h3>
              <h6>216 friends</h6>
            </div>

            <div className="friends-display">
              <div id="friend-1" className="profile-page-display-friend"></div>
              <div id="friend-2" className="profile-page-display-friend"></div>
              <div id="friend-3" className="profile-page-display-friend"></div>
              <div id="friend-4" className="profile-page-display-friend"></div>
              <div id="friend-5" className="profile-page-display-friend"></div>
              <div id="friend-6" className="profile-page-display-friend"></div>
              <div id="friend-7" className="profile-page-display-friend"></div>
              <div id="friend-8" className="profile-page-display-friend"></div>
            </div>
            <div className="main-display-buttons">
              <button className="bg-secondary text-dark">Edit Profile</button>
              <button className="bg-primary text-light">Add to Story</button>
            </div>
          </div>
        </section>
        <hr />
        <section className="profile-nav">
          <ul>
            <li>Posts</li>
            <li>About</li>
            <li>Friends</li>
            <li>Photos</li>
            <li>Videos</li>
            <li>Reels</li>
            <li>More</li>
          </ul>
        </section>
      </div>
    </header>
  );
};

export default Header;
