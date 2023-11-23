import React from "react";

function Card(props) {
  return (
    <div className="card">
      <span className="icon-span">{props.icon}</span>
      <dt className="emoji-namse">{props.iconName}</dt>
      <dd className="emoji-description">{props.iconDescription}</dd>
    </div>
  );
}

export default Card;
