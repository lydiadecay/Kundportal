import React from "react";
import Profile from "../Components/Profile";
import Stats from "../Components/Stats";

const style = {
  content: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 20,
    background: "#F6FAFB",
  },
};

const Dashboard = () => {
  return (
    <div style={style.content}>
      <span style={{ fontSize: 20, marginBottom: 20 }}>Home</span>
      <div
        style={{
          backgroundColor: "#FFD98D",
          borderRadius: 5,
          padding: 10,
          marginBottom: 20,
        }}
      >
        Welcome <b>User</b>! Your tenancy was last updated <b>2020-06-26.</b>{" "}
        Take a look!
      </div>
      <div style={{ display: "flex", flex: 1 }}>
        <Profile />
        <Stats />
      </div>
    </div>
  );
};

export default Dashboard;
