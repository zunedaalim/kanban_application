import React, { useState } from "react";
import "./Dropdown.css";
import down from "../assets/down.svg";
const Dropdown = ({ options, onSelect, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleoptionclick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        <p>{label}</p>
        <div className="down">
          <img src={down} alt="down" />
        </div>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleoptionclick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
