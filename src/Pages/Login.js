import React from "react";
import users from "../Data/users.json";

const Login = (props) => {
    return(
        <div>
        <form>
          <label>First name:</label>
            <input type="text" id="username" name="fname"/><br/>
            <label>Last name:</label>
            <input type="text" id="password" name="fname"/><br/>
        </form>
    
        <button onClick={check}> login </button>
        </div>
    )
}

const check = () => {
  
    const usernameC = document.getElementById("username").value;
    const passwordC = document.getElementById("password").value;
  
    if (usernameC === users[0].username && passwordC === users[0].password){
      console.log("working as intended");
    }
  }

export default Login
