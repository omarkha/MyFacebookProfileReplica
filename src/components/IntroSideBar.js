import React from "react";
import { GiSuitcase } from "react-icons/gi";
import { BsHouseDoor } from "react-icons/bs";
import { RiMapPinFill } from "react-icons/ri";
import { HiSpeakerWave } from "react-icons/hi2";
import { AiFillClockCircle } from "react-icons/ai";

const IntroSideBar = () => {
  return (
    <aside>
      <h4>Intro</h4>
      <div className="bio">
        <p>
          Software Developer and Entrepreneur.
          <br />
          ENFJ 3w4
        </p>
        <button>Edit bio</button>
      </div>
      <div className="listed-info">
        <ul>
          <li>
            <GiSuitcase />{" "}
            <span className="listed-info-text">
              Software Engineer at <em>General Assembly</em>
            </span>
          </li>
          <li>
            <GiSuitcase />{" "}
            <span className="listed-info-text">Self-Employed</span>
          </li>
          <li>
            <BsHouseDoor />{" "}
            <span className="listed-info-text">
              Lives in <em>New Paltz, New York</em>
            </span>
          </li>
          <li>
            <RiMapPinFill />{" "}
            <span className="listed-info-text">
              From <em>New Paltz, New York</em>
            </span>
          </li>

          <li>
            <HiSpeakerWave />{" "}
            <span className="listed-info-text">
              Pronounces Name - OH-marr kah-LEEL
            </span>
          </li>
          <li>
            <AiFillClockCircle />{" "}
            <span className="listed-info-text">Joined 2012</span>
          </li>
        </ul>
      </div>
      <button>Edit details</button>
      <button>Edit hobbies</button>
    </aside>
  );
};

export default IntroSideBar;
