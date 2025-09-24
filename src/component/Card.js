import React from "react";

const Card = (props) => {
  return (
    <div className="card" onClick={props.onClick} >
      <div className="card-div-icon">{props.icon}</div>
      <div className="card-content">
        <h3 className="card-title">{props.title}</h3>
        <p className="value">{props.value}</p>
      </div>
      <span className="growth">{props.growth}</span>
    </div>
  );
};

export default Card;
