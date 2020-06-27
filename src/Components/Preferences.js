import React from "react";
import "../Styling/Settings.css";
import Checkbox from "../Components/Checkbox";
import Button from "../Components/Button";

const style = {
  master: {
    padding: 10,
  },
  form: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    paddingBottom: 15,
  },

  textPreferences: {
    textAlign: "left",
    letterSpacing: -0.01,
    color: "#A1A8C3",
    opacity: 1,
  },
  checkbox: {
    textALigh: "left",
    letterSpacing: -0.01,
    color: "#3D4465",
    opacity: 1,
  },
  textTips: {
    paddingTop: 15,
    paddingBottom: 10,
    textAlign: "left",
    letterSpacing: -0.01,
    color: "#3D4465",
    opacity: 1,
  },
  linkIntegration: {
    textAlign: "left",
    textDecoration: "underline",
    letterSpacing: 0.2,
    color: "#FDCC6B",
    opacity: 1,
  },
  textFurther: {
    textAlign: "left",
    letterSpacing: -0.01,
    color: "#A1A8C3",
    opacity: 1,
  },
  formBorder: {
    borderBottom: "1px solid #eee",
    margin: 10,
  },
};

function handleCheckboxChange() {
  console.log("Congrats! You can click a box.");
}

function handleClick() {
  console.log("Save Button has been clicked.");
}

const Preferences = () => {
  return (
    <div style={style.master}>
      <div style={style.textPreferences}>
        My investment industry preferences are:{" "}
      </div>
      <div style={style.form}>
        <div>
          <Checkbox
            style={style.checkbox}
            label={"Construction"}
            onCheckboxChange={handleCheckboxChange}
          />
          <Checkbox
            style={style.checkbox}
            label={"Construction"}
            onCheckboxChange={handleCheckboxChange}
          />
          <Checkbox
            style={style.checkbox}
            label={"Construction"}
            onCheckboxChange={handleCheckboxChange}
          />
          <Checkbox
            style={style.checkbox}
            label={"Construction"}
            onCheckboxChange={handleCheckboxChange}
          />
        </div>
        <div>
          <Checkbox
            style={style.checkbox}
            label={"Construction"}
            onCheckboxChange={handleCheckboxChange}
          />
          <Checkbox
            style={style.checkbox}
            label={"Construction"}
            onCheckboxChange={handleCheckboxChange}
          />
          <Checkbox
            style={style.checkbox}
            label={"Construction"}
            onCheckboxChange={handleCheckboxChange}
          />
          <Checkbox
            style={style.checkbox}
            label={"Construction"}
            onCheckboxChange={handleCheckboxChange}
          />
        </div>
      </div>
      <div style={style.textTips}>
        Here's a tip! if you connect your bank we can tailor your investments to
        you budget and preferences.
      </div>

      <div>
        <a href="http://www.handelsbanken.se" style={style.linkIntegration}>
          Connect my bank
        </a>
      </div>
      <div style={style.textFurther}>
        {" "}
        (This link will take you to the Handels Bank website.)
      </div>
      <div style={style.formBorder}></div>
      <div style={{ display: "flex" }}>
        <Button onClick={handleClick} text={"Save"} />
      </div>
    </div>
  );
};

export default Preferences;
