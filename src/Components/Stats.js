import React from "react";
import { Router } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";

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

function portfolio() {
  console.log("Portfolio");
}

const Stats = () => {
  return (
    <div style={style.content}>
      <div style={{ padding: 20, borderBottom: "1px solid #eee" }}>
        My Tenancy
        <NavLink
          style={{
            marginLeft: 100,
            padding: 20,
            backgroundColor: "#3C3C3B",
            color: "#FFFFFF",
            borderRadius: 5,
            textAlign: "center",
            border: "none",
            textDecoration: "none",
            display: "inline-block",
          }}
          to="/portfolio"
        >
          My Portfolio
        </NavLink>
      </div>
      <div
        style={{
          display: "flex",
          color: "#3C4368",
          fontSize: 30,
          fontWeight: "bold",
          padding: 20,
        }}
      >
        827,300 SEK
        <div
          style={{
            color: "#A1A8C3",
            fontSize: 13,
            marginLeft: 200,
            fontWeight: "lighter",
          }}
        >
          Last updated 2020-06-26
        </div>
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
          <div
            style={{ height: 20, width: "20%", background: "#5B74FF" }}
          ></div>
          <div
            style={{ height: 20, width: "30%", background: "#34BFA3" }}
          ></div>
          <div style={{ height: 20, width: "5%", background: "#FD397A" }}></div>
          <div
            style={{ height: 20, width: "30%", background: "#3D4465" }}
          ></div>
          <div
            style={{ height: 20, width: "15%", background: "#EDEFF3" }}
          ></div>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", padding: 20 }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 5,
                background: "#5B74FF",
                marginRight: 10,
              }}
            ></div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <div style={{ fontWeight: "bold" }}>Construction</div>
                <div style={{ fontSize: 12, color: "#333" }}>
                  Company A, Company B
                </div>
              </div>

              <div style={{ padding: 10, marginLeft: "70%" }}>12345</div>
              <div style={{ padding: 10, color: "#A1A8C3" }}> SEK </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", padding: 20 }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 5,
                background: "#34BFA3",
                marginRight: 10,
              }}
            ></div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <div style={{ fontWeight: "bold" }}>Medtech</div>
                <div style={{ fontSize: 12, color: "#333" }}>
                  Company A, Company B
                </div>
              </div>

              <div style={{ padding: 10, marginLeft: "70%" }}>12345</div>
              <div style={{ padding: 10, color: "#A1A8C3" }}> SEK </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", padding: 20 }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 5,
                background: "#FD397A",
                marginRight: 10,
              }}
            ></div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <div style={{ fontWeight: "bold" }}>Fintech</div>
                <div style={{ fontSize: 12, color: "#333" }}>
                  Company A, Company B
                </div>
              </div>

              <div style={{ padding: 10, marginLeft: "70%" }}>12345</div>
              <div style={{ padding: 10, color: "#A1A8C3" }}> SEK </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", padding: 20 }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 5,
                background: "#3D4465",
                marginRight: 10,
              }}
            ></div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <div style={{ fontWeight: "bold" }}>Industry X</div>
                <div style={{ fontSize: 12, color: "#333" }}>
                  Company A, Company B
                </div>
              </div>

              <div style={{ padding: 10, marginLeft: "70%" }}>12345</div>
              <div style={{ padding: 10, color: "#A1A8C3" }}> SEK </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", padding: 20 }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 5,
                background: "#EDEFF3",
                marginRight: 10,
              }}
            ></div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <div style={{ fontWeight: "bold" }}>Miscellaneous</div>
                <div style={{ fontSize: 12, color: "#333" }}>
                  Company A, Company B
                </div>
              </div>

              <div style={{ padding: 10, marginLeft: "70%" }}>12345</div>
              <div style={{ padding: 10, color: "#A1A8C3" }}> SEK </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
