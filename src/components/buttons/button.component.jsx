import React from "react";
import "./button.styles.scss";

const Button = ({ children }) => (
  <button className="btn btn-primary">{children}</button>
);

export default Button;
