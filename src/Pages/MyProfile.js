import React from "react";
import "../Styling/Settings.css";
import { NavLink } from "react-router-dom";

const style = {
  content: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 20,
    background: "#F6FAFB",
  },
};

const MyProfile = () => {
  return (
    <div style={style.content}>
      <div>
        <h1 style={{ padding: 10 }}> Settings</h1>
        <NavLink to="/settings/myprofile" activeClassName="is-active">
          {" "}
          My Profile{" "}
        </NavLink>
        <NavLink to="/settings/changepassword" activeClassName="is-active">
          {" "}
          Change Password{" "}
        </NavLink>
        <NavLink to="/settings/preferences" activeClassName="is-active">
          {" "}
          Preferences{" "}
        </NavLink>
      </div>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/79/Johnny_Depp_Deauville_2019.jpg"
        alt="profilepic"
        width="100"
        height="150"
      ></img>
      <div></div>
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="Firstname"
      />
      <input
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Lastname"
      />
      <br />
      <input
        onChange={(e) => setSSN(e.target.value)}
        placeholder="Social security number"
      />
      <br />
      <input
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
      />
      <br />
      <input onChange={(e) => setCity(e.target.value)} placeholder="City" />
      <input
        onChange={(e) => setZIPcode(e.target.value)}
        placeholder="ZIP code"
      />
      <br />
      <input
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone number"
      />
      <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
    </div>
  );
};

const setName = (value) => {
  let userName = value;
};

const setLastName = (value) => {
  let userLastName = value;
};

const setSSN = (value) => {
  let SSN = value;
};

const setAddress = (value) => {
  let address = value;
};

const setCity = (value) => {
  let city = value;
};

const setZIPcode = (value) => {
  let ZIP = value;
};

const setPhoneNumber = (value) => {
  let phoneNumber = value;
};

const setEmail = (value) => {
  let Email = value;
};

export default MyProfile;
