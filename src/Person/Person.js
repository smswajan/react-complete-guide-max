import React from "react";
const person = props => {
  return (
    <div className="person">
      <p onClick={props.click}>
        Hello! I'm <span className="bold-text"> {props.name} </span>
        {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
