import React from "react";
import Profile from "../Components/Profile";
import Stats from "../Components/Stats";

const style = {
  content: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 20,
  },
};

const Dashboard = () => {
  return (
    <div style={style.content}>
      <span style={{ fontSize: 20, marginBottom: 20 }}>Home</span>
      <div style={{ display: "flex", flex: 1 }}>
        <Profile />
        <Stats />
      </div>
    </div>
  );
};

export default Dashboard;
