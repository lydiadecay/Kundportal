import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import StartPage from "./Pages/StartPage";
import LoginPage from "./Pages/Login";
import SettingsPage from "./Pages/Settings";
import ErrorPage from "./Pages/ErrorPage";

const Header = () => (
  <header>
    <h1> Kundportalen</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Start</NavLink>
    <br/>
    <NavLink to="/Login" activeClassName="is-active">Login</NavLink>
    <br/>
    <NavLink to="/Settings" activeClassName="is-active">Settings</NavLink>
    <br/>
    <NavLink to="/Error" activeClassName="is-active">Error</NavLink>
  </header>
)

const routes = (
  console.log("router working"),
  <BrowserRouter>
  <div>
  <Header/>
  <Switch>
    <Route path="/" component={StartPage} exact={true}/>
    <Route path="/Settings" component={SettingsPage}/>
    <Route path="/Login" component={LoginPage}/>
    <Route component={ErrorPage}/>
  </Switch>
  </div>
  </BrowserRouter>
)

ReactDOM.render(
  routes,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
