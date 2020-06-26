import React from "react";
import "../Styling/Settings.css";
import { NavLink } from "react-router-dom";

const Preferences = () => {
  return (
    <div>
      <div>
        <h1> Settings</h1>
        <NavLink to="/settings/myprofile" activeClassName="is-active">
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

      <p>Bygg</p>
      <input
        type="checkbox"
        checked={console.log("box 0 checked")}
        onChange={(e) => {
          console.log("box value changed");
        }}
      />
      <p>Bygg</p>
      <input type="checkbox" checked={console.log("box 1 checked")} />
      <br />

      <p>Bygg</p>
      <input type="checkbox" checked={console.log("box 2 checked")} />
      <p>Bygg</p>
      <input type="checkbox" checked={console.log("box 3 checked")} />

      <br />

      <p>Bygg</p>
      <input type="checkbox" checked={console.log("box 4 checked")} />
      <p>Bygg</p>
      <input type="checkbox" checked={console.log("box 5 checked")} />

      <br />

      <p>Bygg</p>
      <input type="checkbox" checked={console.log("box 6 checked")} />
      <p>Bygg</p>
      <input type="checkbox" checked={console.log("box 7 checked")} />
    </div>
  );
};

export default Preferences;
