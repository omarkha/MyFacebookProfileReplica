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
            <h6 className="date text-muted">{props.dateandtime}</h6>
          </div>
        </div>

        <BsThreeDots id="topdots" />
      </div>
      <div className="content-text">{props.textContent}</div>
      <div
        className="content-media"
        style={{ backgroundImage: `url("${props.img}")` }}
      ></div>
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
