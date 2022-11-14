import React from "react";
import { RiVideoAddFill } from "react-icons/ri";
import { IoMdPhotos } from "react-icons/io";
import { IoMdFlag } from "react-icons/io";

const PostSection = () => {
  return (
    <section className="postsection">
      <div className="input-section">
        <div id="profilepic"></div>
        <input type="text" placeholder="What's On Your Mind?" />
      </div>
      <hr />
      <div className="bottom-nav">
        <a>
          <RiVideoAddFill id="video-icon" /> <em>Live video</em>
        </a>
        <a>
          <IoMdPhotos id="photos-icon" /> <em>Photo/video</em>
        </a>
        <a>
          <IoMdFlag id="flag-icon" /> <em>Life event</em>
        </a>
      </div>
    </section>
  );
};

export default PostSection;
