import React from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={(e) => onClick}>{text}</button>;
};

export default Button;
