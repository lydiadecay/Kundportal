import React from "react";
import { NavLink } from "react-router-dom";

const style = {
  box: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 20,
    background: "#F6FAFB",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 10px",
    background: "#fff",
    flex: 1,
  },
};

const Settings = () => {
  return (
    <div style={style.box}>
      <div style={style.content}>
        <header>
          <h1 style={{ fontSize: 22, marginBottom: 20, color: "#656565" }}>
            {" "}
            Settings
          </h1>

          <NavLink to="/settings/myprofile"> My Profile </NavLink>
          <NavLink to="/settings/changepassword" activeClassName="is-active">
            {" "}
            Change Password{" "}
          </NavLink>
          <NavLink to="/settings/preferences" activeClassName="is-active">
            {" "}
            Preferences{" "}
          </NavLink>
        </header>
      </div>
    </div>
  );
};

export default Settings;
