import React from "react";

const Button = (props) => (
  <button id="new-quote" className="btn" onClick={props.onClick}>
    {props.displayName}
  </button>
);

export default Button;
