import React from "react";
import "../Styling/App.css";
import { Link, useLocation } from "react-router-dom";
import pic from "../Pictures/Image 2.png";

const style = {
  image2: {
    top: 20,
    left: 25,
    width: 158,
    height: 66,
    background:
      "transparent url('./Pictures/img/Image 2.png') 0% 0% no-repeat paddingBox",
    opacity: 1,
  },
};

const Sidebar = () => {
  let match = useLocation();
  console.log(match);
  return (
    <nav className="sidebar">
      <div className="logo">
        <img style={style.image2} src={pic} alt="logo" />
      </div>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/portfolio">
        My Portfolio
      </Link>
      <Link className="link" to="/settings">
        Settings
      </Link>
    </nav>
  );
};

export default Sidebar;
