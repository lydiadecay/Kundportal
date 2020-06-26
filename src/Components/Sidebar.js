import React from "react";
import "../Styling/App.css";
import { NavLink, useLocation } from "react-router-dom";
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
      <NavLink
        className="link"
        activeStyle={{ background: "rgba(0,0,0,0.5)" }}
        style={style.link}
        to="/dashboard"
      >
        <img style={{ marginRight: 10 }} src={home} alt="home" />
        Home
      </NavLink>
      <NavLink
        className="link"
        activeStyle={{ background: "rgba(0,0,0,0.5)" }}
        style={style.link}
        to="/portfolio"
      >
        <img style={{ marginRight: 10 }} src={portfolio} alt="portfolio" />
        Portfolio
      </NavLink>
      <NavLink
        className="link"
        activeStyle={{ background: "rgba(0,0,0,0.5)" }}
        style={style.link}
        to="/settings"
      >
        <img style={{ marginRight: 10 }} src={cog} alt="cog" /> Settings
      </NavLink>
      <div className="logOut">
        <NavLink
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#c9b791",
            borderTop: "1px solid #c9b791",
          }}
          to="/login"
        >
          <img style={{ marginRight: 10 }} src={logout} alt="logout" /> Log out
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
