import React from "react";
import "./Settings.css";
import { NavLink } from "react-router-dom";

//fixa senare

const ChangePassword = () => {
  return (
    <div>
      <div>
        <h1> Settings</h1>
        <NavLink to="/settings/myprofile" activeClassName="is-active" id="link">
          {" "}
          myprofile{" "}
        </NavLink>
        <NavLink to="/settings/changepassword" activeClassName="is-active">
          {" "}
          changepassword{" "}
        </NavLink>
        <NavLink to="/settings/preferences" activeClassName="is-active">
          {" "}
          preferences{" "}
        </NavLink>
      </div>

      <p>Current password</p>
      <br />
      <input
        onChange={(e) => currentPassword(e.target.value)}
        placeholder="Current password"
      />
      <br />
      <p>New password</p>
      <br />
      <input
        onChange={(e) => newPassword(e.target.value)}
        placeholder="New password"
      />
      <br />
      <p>Confirm new password</p>
      <br />
      <input
        onChange={(e) => confirmPassword(e.target.value)}
        placeholder="Repeate new password"
      />
    </div>
  );
};

const currentPassword = (value) => {
  if (value === "password") {
    //&& (value2 == value3)
    console.log("working");
    //new password = password
  }
};

const newPassword = (value) => {
  console.log("newPasswordField = " + value);
};

const confirmPassword = (value) => {
  console.log("confirmPasswordField = " + value);
};

export default ChangePassword;
