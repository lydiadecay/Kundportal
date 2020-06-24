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
      <div style={{ padding: 20 }}>
        <div
          style={{
            display: "flex",
            borderRadius: 5,
            overflow: "hidden",
            marginTop: 10,
          }}
        >
          <div style={{ height: 20, width: "20%", background: "blue" }}></div>
          <div style={{ height: 20, width: "40%", background: "green" }}></div>
          <div style={{ height: 20, width: "10%", background: "red" }}></div>
          <div style={{ height: 20, width: "30%", background: "purple" }}></div>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", padding: 20 }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 5,
                background: "blue",
                marginRight: 10,
              }}
            ></div>
            <div>
              <div style={{ fontWeight: "bold" }}>Title</div>
              <div style={{ fontSize: 12, color: "#333" }}>subTitle</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", padding: 20 }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 5,
                background: "blue",
                marginRight: 10,
              }}
            ></div>
            <div>
              <div style={{ fontWeight: "bold" }}>Title</div>
              <div style={{ fontSize: 12, color: "#333" }}>subTitle</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", padding: 20 }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 5,
                background: "blue",
                marginRight: 10,
              }}
            ></div>
            <div>
              <div style={{ fontWeight: "bold" }}>Title</div>
              <div style={{ fontSize: 12, color: "#333" }}>subTitle</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", padding: 20 }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 5,
                background: "blue",
                marginRight: 10,
              }}
            ></div>
            <div>
              <div style={{ fontWeight: "bold" }}>Title</div>
              <div style={{ fontSize: 12, color: "#333" }}>subTitle</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", padding: 20 }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 5,
                background: "blue",
                marginRight: 10,
              }}
            ></div>
            <div>
              <div style={{ fontWeight: "bold" }}>Title</div>
              <div style={{ fontSize: 12, color: "#333" }}>subTitle</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
