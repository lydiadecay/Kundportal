import React from "react";
import users from "../Data/users.json";

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
    display: "flex",
    alignItems: "center",
    padding: 20,
  },
};

const Profile = () => {
  return (
    <div style={style.content}>
      <div style={{ padding: 20, borderBottom: "1px solid #eee" }}>
        My Profile
      </div>
      <div style={style.user}>
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 100,
            background: "#333",
          }}
        ></div>
        <div style={{ marginLeft: 20, color: "#333" }}>{users.username}</div>
      </div>
    </div>
  );
};

export default Profile;
