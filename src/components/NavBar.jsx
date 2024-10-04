import React, { useEffect, useState } from "react";
import "./navbar.css";
import control from "../assets/Display.svg";
import down from "../assets/down.svg";
import DropDown from "./DropDown";

const NavBar = ({ state, onToggleModelState, setgroup, setorder }) => {
  const [selectedOption1, setSelectedOption1] = useState(
    () => localStorage.getItem("groupby") || "Status"
  );
  const [selectedOption2, setSelectedOption2] = useState(
    () => localStorage.getItem("orderby") || "Priority"
  );
  // const callMe = () => {
  //   const davedData = localStorage.getItem("groupby") || "Status";
  //   console.log(davedData);
  // };

  const options1 = ["Status", "User", "Priority"];
  const options2 = ["Priority", "Title"];

  const toggleDropdown = (e) => {
    e.stopPropagation();
    onToggleModelState();
  };
  useEffect(() => {
    setgroup(selectedOption1);
  }, [selectedOption1, setgroup]);

  useEffect(() => {
    setorder(selectedOption2);
  }, [selectedOption2, setorder]);
  return (
    <nav className="navbar">
      <div className="menu-btn" onClick={toggleDropdown}>
        <div id="control">
          <img src={control} alt="controls" />
        </div>
        <div className="text">Display</div>
        <div id="control">
          <img src={down} alt="dropdown" />
        </div>

        {state && (
          <div className="dropdown" onClick={(e) => e.stopPropagation()}>
            <div className="grouping">
              <p>Grouping</p>
              <DropDown
                options={options1}
                onSelect={setSelectedOption1}
                label={selectedOption1}
              />
            </div>
            <div className="grouping">
              <p>Ordering</p>
              <DropDown
                options={options2}
                onSelect={setSelectedOption2}
                label={selectedOption2}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
