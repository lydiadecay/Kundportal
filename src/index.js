import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Settings from "./Pages/Settings";
import Portfolio from "./Pages/Portfolio";
import Header from "./Components/Sidebar";
import MyProfile from "./Pages/SettingsSubPage/MyProfile";
import ChangePassword from "./Pages/SettingsSubPage/ChangePassword";
import Preferences from "./Pages/SettingsSubPage/Preferences";

const ErrorPage = () => (
  <div>
    Error - <Link to="/">Back to Dashboard</Link>
  </div>
);

const routes =
  (console.log("router working"),
  (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Header />
        <Switch>
          <Route path="/dashboard" component={Dashboard} exact={true} />
          <Route exact path="/settings" component={Settings} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/" component={Login} />

          <Route path="/SettingsSubPage/myprofile" component={MyProfile} />
          <Route
            path="/SettingsSubPage/changepassword"
            component={ChangePassword}
          />
          <Route path="/SettingsSubPage/preferences" component={Preferences} />
          <Route path="/settings/errorpage" component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>
  ));

ReactDOM.render(routes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
