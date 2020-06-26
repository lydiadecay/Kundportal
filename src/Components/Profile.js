import React from "react";
import users from "../Data/users.json";
import profilepic from "../Pictures/stockpic.jpg";
import { NavLink, useLocation } from "react-router-dom";

const userName = JSON.stringify(users.username);

const style = {
  content: {
    display: "flex",
    flexDirection: "column",
    marginRight: 20,
    borderRadius: 5,
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 10px",
    background: "#fff",
    flex: 1,
  },
  user: {
    alignItems: "center",
    padding: 20,
  },
};

const Profile = () => {
  return (
    <div style={style.content}>
      <div style={{ padding: 20, borderBottom: "1px solid #eee" }}>
        My Profile
        <NavLink
          style={{
            marginLeft: 300,
            padding: 20,
            backgroundColor: "#3C3C3B",
            color: "#FFFFFF",
            borderRadius: 5,
            textAlign: "center",
            border: "none",
            textDecoration: "none",
            display: "inline-block",
          }}
          to="/settings"
        >
          Edit
        </NavLink>
      </div>
      <div style={style.user}>
        <div
          style={{
            marginLeft: 20,
            color: "#333",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img
            src={profilepic}
            alt="profilepic"
            style={{
              width: 100,
              height: 100,
              borderRadius: 150,
            }}
          ></img>{" "}
          <div style={{ alignSelf: "center" }}>
            {userName}
            <div>
              <div style={{ color: "#A1A8C3", fontSize: 10 }}>
                Person Nr. / Organisation Nr.
              </div>
              <div>780817-5869</div>
            </div>
          </div>
        </div>

        <div style={{ color: "#A1A8C3", width: "100%", marginTop: "5%" }}>
          Preferred Industries
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginRight: "35%", marginTop: "3%" }}>Industry 1</div>
          <div style={{ marginTop: "3%" }}> Industry 2</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginRight: "35%", marginTop: "3%" }}>Industry 3</div>
          <div style={{ marginTop: "3%" }}> Industry 4</div>
        </div>

        <div style={{ color: "#A1A8C3", width: "100%", marginTop: "5%" }}>
          Contact information
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginRight: "5%", fontWeight: 500 }}>
            <div style={{ marginTop: "9%" }}>Phone number:</div>
            <div style={{ marginTop: "9%" }}>Mail:</div>
            <div style={{ marginTop: "9%" }}>Address:</div>
            <div style={{ marginTop: "9%" }}>Zipcode:</div>
            <div style={{ marginTop: "9%" }}>City:</div>
          </div>
          <div>
            <div style={{ marginTop: "9%" }}>0799465654</div>
            <div style={{ marginTop: "9%" }}>user@school.se</div>
            <div style={{ marginTop: "9%" }}>Lantmilsgatan 7</div>
            <div style={{ marginTop: "9%" }}>41501</div>
            <div style={{ marginTop: "9%" }}>Gothenburg</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
