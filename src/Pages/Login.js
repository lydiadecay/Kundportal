import React, { useState } from "react";
import { Redirect } from "react-router";
import users from "../Data/users.json";
import "../Styling/App.css";
import Button from "../Components/Button";

const style = {
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
  },
  login: {
    display: "flex",
    flexDirection: "column",
    padding: 100,
    background: "white",
    borderRadius: 5,
  },
  input: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    border: "2px solid #ccc",
    borderRadius: 3,
    marginBottom: 10,
    width: 300,
  },
};

const Login = () => {
  const [redirect, setRedirect] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //login checks the entered info and forwards you if correct
  const login = () =>
    users.map((user) => {
      if (user.username === username && user.password === password) {
        console.log("success");
        setRedirect(true);
      }
    });

  //forgotPassword creates a account from the currently entered username & password
  //this account is deleted when the site is closed
  const createAccount = () => {
    users.push({ username: username, password: password });
  };

  //changePassword replaces the password of the account with the username entered
  //this account is reset when the site is closed
  const changePassword = () =>
    users.map((user) => {
      if (user.username === username) {
        user.password = password;
      }
    });

  if (redirect) {
    return <Redirect push to="/dashboard" />;
  }
  return (
    <div>
      <div style={style.login}>
        <input
          style={style.input}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          value={username}
        />
        <input
          style={style.input}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          value={password}
          type="password"
        />
        <Button
          style={{ ...style.input, cursor: "pointer" }}
          onClick={() => login()}
          text={"Login"}
        ></Button>
        <Button
          style={{ ...style.input, cursor: "pointer" }}
          onClick={() => createAccount()}
          text={"Create Account"}
        ></Button>
        <Button
          style={{ ...style.input, cursor: "pointer" }}
          onClick={() => changePassword()}
          text={"Forgot Your Password?"}
        ></Button>
      </div>
    </div>
  );
};

export default Login;
