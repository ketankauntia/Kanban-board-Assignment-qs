import React, { useState } from "react";
import "./Navbar.css";
import Dropdown from "./Dropdown"; // Import the Dropdown component

import display from "../assets/Display.svg";
import down from "../assets/down.svg";

function Navbar({ setGroupBy }) {
  const [selectedOption, setSelectedOption] = useState("Priority");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setGroupBy(option.toLowerCase()); // Pass the selected option to the parent component
  };

  return (
    <div className="header">
      <div className="header-option">
        <span>
          <img src={display} alt="Icon" width="20" height="20" />
        </span>
        <select
          value={selectedOption}
          onChange={(e) => handleOptionChange(e.target.value)}
        >
          <option value="Priority">Priority</option>
          <option value="User">User</option>
          <option value="Status">Status</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;
