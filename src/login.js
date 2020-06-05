import React, { Component } from "react";

import users from "./Data/users.json";

class Login extends React.Component {
  render() {
    return users[0].username;
  }
}

export default Login;
