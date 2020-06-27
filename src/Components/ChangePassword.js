import React from "react";
import "../Styling/Settings.css";
import Button from "../Components/Button";

//fixa senare

const style = {
  label: {
    padding: 10,
    letterSpacing: -0.01,
    color: "#A1A8C3",
    opacity: 1,
  },
  input: {
    border: "1px solid #EBEDF2",
    borderRadius: 4,
    opacity: 1,
    height: 20,
    letterSpacing: -0.01,
    color: "#A1A8C3",
    opacity: 1,
    marginLeft: 10,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    marginBottom: 10,
  },
  formBorder: {
    borderBottom: "1px solid #eee",
    margin: 10,
  },
};

function handleClick() {
  console.log("save button was clicked");
}

const ChangePassword = () => {
  return (
    <div>
      <div style={style.formBorder}>
        <div style={style.form}>
          <label style={style.label}>Current password</label>
          <input
            style={style.input}
            onChange={(e) => currentPassword(e.target.value)}
            placeholder="Current password"
          />

          <label style={style.label}>New password</label>

          <input
            style={style.input}
            onChange={(e) => newPassword(e.target.value)}
            placeholder="New password"
          />

          <label style={style.label}>Confirm new password</label>

          <input
            style={style.input}
            onChange={(e) => confirmPassword(e.target.value)}
            placeholder="Repeate new password"
          />
        </div>
      </div>
      <div style={{ ...style.formBorder, display: "flex" }}>
        <Button onClick={handleClick} text={"Save"} />
      </div>
    </div>
  );
};

const currentPassword = (value) => {
  if (value === "password") {
    //&& (value2 == value3)
    console.log("working");
    //new password = password
  }
};

const newPassword = (value) => {
  console.log("newPasswordField = " + value);
};

const confirmPassword = (value) => {
  console.log("confirmPasswordField = " + value);
};

export default ChangePassword;
