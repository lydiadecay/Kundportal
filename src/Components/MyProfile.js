import React from "react";
import "../Styling/Settings.css";
import stockpic from "../Pictures/stockpic.jpg";
import users from "../Data/users.json";
import Button from "../Components/Button";

const JSONUserData = JSON.stringify(users);
const userData = JSON.parse(JSONUserData);

const style = {
  content: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 20,
  },

  formBorder: {
    borderBottom: "1px solid #eee",
    margin: 10,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },

  sideBySide: {
    display: "flex",
    flexDirection: "row",
  },
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
  placeholder: {
    letterSpacing: -0.01,
    color: "#A1A8C3",
    opacity: 1,
  },
};

function handleClick() {
  console.log("save button was clicked");
}

const MyProfile = () => {
  return (
    <div>
      <img
        src={stockpic}
        alt="profilepic"
        style={{
          width: 100,
          height: 100,
          borderRadius: 150,
        }}
      ></img>
      <form style={style.content}>
        <div style={style.form}>
          <div style={style.sideBySide}>
            <label>
              <div style={style.label}>First Name:</div>
              <input
                style={style.input}
                onChange={(e) => setName(e.target.value)}
                placeholder={userData.firstname}
              />
            </label>
            <label>
              <div style={style.label}>Last Name:</div>
              <input
                style={style.input}
                onChange={(e) => setLastName(e.target.value)}
                placeholder={userData.lastname}
              />{" "}
            </label>
          </div>
          <label style={style.label}>Person Nr./Organization Nr.: </label>

          <input
            style={style.input}
            onChange={(e) => setSSN(e.target.value)}
            placeholder={userData.personnum}
          />

          <label style={style.label}>Address: </label>

          <input
            style={style.input}
            onChange={(e) => setAddress(e.target.value)}
            placeholder={userData.address}
          />

          <div style={{ display: "flex", flexDirection: "row" }}>
            <label>
              <div style={style.label}>City:</div>{" "}
              <input
                style={style.input}
                onChange={(e) => setCity(e.target.value)}
                placeholder={userData.city}
              />
            </label>
            <label>
              <div style={style.label}>ZIP Code:</div>
              <input
                style={style.input}
                onChange={(e) => setZIPcode(e.target.value)}
                placeholder={userData.zipcode}
              />
            </label>
          </div>
          <label style={style.label}>Phone Number: </label>

          <input
            style={style.input}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder={userData.phone}
          />
          <label style={style.label}>Email: </label>

          <input
            style={style.input}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={userData.email}
          />
        </div>
      </form>
      <div style={style.formBorder}></div>
      <div style={{ display: "flex" }}>
        <Button onClick={handleClick} text={"Save"} />
      </div>
    </div>
  );
};

const setName = (value) => {
  let userName = value;
};

const setLastName = (value) => {
  let userLastName = value;
};

const setSSN = (value) => {
  let SSN = value;
};

const setAddress = (value) => {
  let address = value;
};

const setCity = (value) => {
  let city = value;
};

const setZIPcode = (value) => {
  let ZIP = value;
};

const setPhoneNumber = (value) => {
  let phoneNumber = value;
};

const setEmail = (value) => {
  let Email = value;
};

export default MyProfile;
