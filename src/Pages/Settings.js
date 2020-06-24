import React from "react";
import {NavLink } from "react-router-dom";


const Settings = () => {
    return <div>
    
    <header>
          <h1> Settings</h1>
          <NavLink to="/settings/myprofile" activeClassName="is-active"> myprofile </NavLink>
          <NavLink to="/settings/changepassword" activeClassName="is-active"> changepassword </NavLink>
          <NavLink to="/settings/preferences" activeClassName="is-active"> preferences </NavLink>
    </header>
    </div>;
}

export default Settings