import React from "react";
import "../Styling/App.css";
import { Link, useLocation } from "react-router-dom";
import pic from "../Pictures/Image 2.png";
import home from "../Pictures/home.png";
import cog from "../Pictures/cog.png";
import portfolio from "../Pictures/portfolio.png";
import logout from "../Pictures/logout.png";

const style = {
  image2: {
    top: 20,
    left: 25,
    width: 158,
    height: 66,
    background:
      "transparent url('./Pictures/img/Image 2.png') 0% 0% no-repeat paddingBox",
    opacity: 1,
    padding: 20,
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
        <img style={{ marginRight: 10 }} src={home} alt="home" /> Home
      </Link>
      <Link className="link" to="/portfolio">
        <img style={{ marginRight: 10 }} src={portfolio} alt="portfolio" /> My
        Portfolio
      </Link>
      <Link className="link" to="/settings">
        <img style={{ marginRight: 10 }} src={cog} alt="cog" /> Settings
      </Link>
      <div className="logOut">
        <Link to="/login">
          <img style={{ marginRight: 10 }} src={logout} alt="logout" /> Log out
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
