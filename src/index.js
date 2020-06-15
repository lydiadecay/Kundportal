import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Settings from "./Pages/Settings";
import Portfolio from "./Pages/Portfolio";
import Header from "./Components/Sidebar";

const ErrorPage = () => <div>error</div>;

const routes =
  (console.log("router working"),
  (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Header />
        <Switch>
          <Route path="/" component={Dashboard} exact={true} />
          <Route path="/settings" component={Settings} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/login" component={Login} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>
  ));

ReactDOM.render(routes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
