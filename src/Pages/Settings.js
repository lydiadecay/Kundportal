import React from "react";
import MyProfile from "../Components/MyProfile";
import ChangePassword from "../Components/ChangePassword";
import Preferences from "../Components/Preferences";

import Tabs from "../Components/Tabs";
require("../Styling/styles.css");

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

function Settings() {
  return (
    <div style={style.box}>
      <h1 style={{ fontSize: 22, marginBottom: 20, color: "#656565" }}>
        {" "}
        Settings
      </h1>
      <div style={style.content}>
        <div>
          <Tabs>
            <div label="My Profile">
              <MyProfile />
            </div>
            <div label="Change Password">
              <ChangePassword />
            </div>
            <div label="Preferences">
              <Preferences />
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

const container = document.createElement("div");
document.body.appendChild(container);

export default Settings;
