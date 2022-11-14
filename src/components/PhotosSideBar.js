import React from "react";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/photo7.jpg";
import photo8 from "../assets/photo8.jpg";
import photo9 from "../assets/photo9.jpg";

const PhotosSideBar = () => {
  return (
    <div className="photos-sidebar">
      <div className="top">
        <h4>Photos</h4>
      </div>
      <div className="side-photos">
        <div
          className="side-photo"
          style={{ backgroundImage: `url("${photo1}")` }}
        ></div>
        <div
          className="side-photo"
          style={{ backgroundImage: `url("${photo2}")` }}
        ></div>
        <div
          className="side-photo"
          style={{ backgroundImage: `url("${photo3}")` }}
        ></div>
        <div
          className="side-photo"
          style={{ backgroundImage: `url("${photo4}")` }}
        ></div>
        <div
          className="side-photo"
          style={{ backgroundImage: `url("${photo5}")` }}
        ></div>
        <div
          className="side-photo"
          style={{ backgroundImage: `url("${photo6}")` }}
        ></div>
        <div
          className="side-photo"
          style={{ backgroundImage: `url("${photo7}")` }}
        ></div>
        <div
          className="side-photo"
          style={{ backgroundImage: `url("${photo8}")` }}
        ></div>
        <div
          className="side-photo"
          style={{ backgroundImage: `url("${photo9}")` }}
        ></div>
      </div>
    </div>
  );
};

export default PhotosSideBar;
