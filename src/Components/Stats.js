import React from "react";

const style = {
  content: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 10px",
    background: "#fff",
    flex: 1,
  },
};

const Stats = () => {
  return (
    <div style={style.content}>
      <div style={{ padding: 20, borderBottom: "1px solid #eee" }}>
        My Tenancy
      </div>
    </div>
  );
};

export default Stats;
