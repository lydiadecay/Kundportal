import React from "react";

const style = {
  button: {
    margin: 10,
    background: "#FDCC6B 0% 0% no-repeat padding-box",
    borderRadius: 4,
    opacity: 1,
    textAlign: "center",
    border: "none",
    textDecoration: "none",
    display: "inline-block",
    marginLeft: "auto",
    padding: 20,
    color: "#FFFFFF",
  },
};

const Button = ({ onClick, text, index }) => {
  return (
    <button style={style.button} onClick={(e) => onClick(index)}>
      {text}
    </button>
  );
};

export default Button;
