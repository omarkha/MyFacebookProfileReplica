import React from "react";
import fblogo from "../assets/fblogo.png";
import { BsHouseDoor } from "react-icons/bs";
import { CgScreen } from "react-icons/cg";
import { AiOutlineShop } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { IoGameControllerOutline } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import { SiMessenger } from "react-icons/si";
import { BsBellFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <div id="fblogo"></div>
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <input
                type="text"
                id="nav-search"
                placeholder="Search Facebook"
              />
            </li>
          </ul>
          <ul id="nav-middle" className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <BsHouseDoor className="nav-icon" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <CgScreen className="nav-icon" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <AiOutlineShop className="nav-icon" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <HiUserGroup className="nav-icon" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <IoGameControllerOutline className="nav-icon" />
              </a>
            </li>
          </ul>
          <ul id="nav-right" className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <CgMenuGridR className="right-icons" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <SiMessenger className="right-icons" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <BsBellFill className="right-icons" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <div id="profilepic"></div>
              </a>
            </li>
          </ul>
        </div>{" "}
      </div>
    </nav>
  );
};

export default NavBar;
