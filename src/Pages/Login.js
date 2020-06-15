import React, { useState } from "react";
import { Redirect } from "react-router";
import users from "../Data/users.json";
import "../Styling/App.css";

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

  const login = () => {
    if (users[0].username === username && users[0].password === password) {
      console.log("success");
      setRedirect(true);
    } else {
      console.log("error");
    }
  };

  if (redirect) {
    return <Redirect push to="/" />;
  }
  return (
    <div style={style.box}>
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
        <div
          style={{ ...style.input, cursor: "pointer" }}
          onClick={() => login()}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
