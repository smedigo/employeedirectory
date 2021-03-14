import React from "react";

const directorycard = props => {
  return (
    <div className="card" style={props.style}>
      {props.children}
    </div>
  );
};

export default directorycard;