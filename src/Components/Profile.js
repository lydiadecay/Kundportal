import React from "react";
import users from "../Data/users.json";
import profilepic from "../Pictures/stockpic.jpg";

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
        <button
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
        >
          Edit
        </button>
      </div>
      <div style={style.user}>
        <img
          src={profilepic}
          alt="profilepic"
          style={{
            width: 100,
            height: 100,
            borderRadius: 150,
          }}
        ></img>
        <div style={{ marginLeft: 20, color: "#333" }}>{users.username}</div>
        <div style={{ color: "#A1A8C3" }}>Preferred Industries</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          Industry 1 Industry 2
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          Industry 3 Industry 4
        </div>
      </div>
    </div>
  );
};

export default Profile;
