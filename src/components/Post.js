import React from "react";
import { BsThreeDots } from "react-icons/bs";

const Post = (props) => {
  return (
    <div className="post">
      <div className="top">
        <div className="topinfo">
          <div id="profilepic"></div>
          <div className="nameanddate">
            <h6>Omar Khalil</h6>
            <h6 className="date text-muted">November 8 at 2:33 AM</h6>
          </div>
        </div>

        <BsThreeDots id="topdots" />
      </div>
      <div className="content-text">
        Just finished coding my Portfolio Website. Check it Out and hmu for a
        FREE website! <br />
        <br />
        <a>https://omarkhalil34v.netlify.app</a>
      </div>
      <div className="content-media"></div>
      <hr />
      <div className="post-options">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
};

export default Post;
