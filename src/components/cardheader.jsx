// CardHeader.jsx
import React from "react";
import "./CardHeader.css";
import threedot from "../assets/3 dot menu.svg";
import add from "../assets/add.svg";
const CardHeader = ({ title, icon, size }) => {
  return (
    <div className="card-header">
      <div className="title">
        <img src={icon} alt={`${title} icon`} className="icon" />
        <p className="title">{title}</p>
        <div className="size">
          <p>{size}</p>
        </div>
      </div>
      <div className="icons">
        <div id="control">
          <img src={add} alt="add" />
        </div>
        <div id="control">
          <img src={threedot} alt="threedot" />
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
