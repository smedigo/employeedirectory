import React from "react";
import "./style.css";

const directory = props => {
  return (
    <div
      className="directory text-center"
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      {props.children}
    </div>
  );
};

export default directory;