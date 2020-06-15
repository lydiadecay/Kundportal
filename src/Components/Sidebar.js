import React from "react";
import "../Styling/App.css";
import { Link, useLocation } from "react-router-dom";
import pic from "../Pictures/Image 2@2x.png";

const Siderbar = () => {
  let match = useLocation();
  console.log(match);
  return (
    <nav className="sidebar">
      <div className="logo">
        <img style={{ width: 50 }} src={pic} alt="logo" />
      </div>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/portfolio">
        Portfolio
      </Link>
      <Link className="link" to="/settings">
        Settings
      </Link>
    </nav>
  );
};

export default Siderbar;
