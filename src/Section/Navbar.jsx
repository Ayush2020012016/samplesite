import React, { useState } from "react";
import Button from "../Components/Button";
import "./Navbar.css";

const Navbar = () => {
  const [activeState, setactiveState] = useState([0, 0, 0]);
  const handleClick = (e) => {
    const target = e.target.tagName;
    let targetValue = "";
    if (target == "LI") {
      targetValue = e.target.value;
    }
    if (target == "A") {
      console.log(e.target.parentNode);
      targetValue = e.target.parentNode.value;
    }

    const updatedArray = activeState.map((current, index) => {
      console.log(current, index);
      if (index === targetValue) {
        return !current;
      }
      return 0;
    });

    setactiveState(updatedArray);
  };

  return (
    <div id="id" className="navContainer">
      <div className="navBar">
        <div className="navTitle">
          <a href="/">START BOOTSTRAP</a>
        </div>
        {/* <Button buttonText={"Menu"} /> */}
        <div className="navItems">
          <li
            value={0}
            className={activeState[0] ? "active" : ""}
            onClick={(e) => handleClick(e)}
          >
            <a value={0} href="#firstsection">
              Portfolio
            </a>
          </li>
          <li
            value={1}
            className={activeState[1] ? "active" : ""}
            onClick={(e) => handleClick(e)}
          >
            <a value={1} href="#secondsection">
              About
            </a>
          </li>
          <li
            value={2}
            className={activeState[2] ? "active" : ""}
            onClick={(e) => handleClick(e)}
          >
            <a value={2} href="#thirdsection">
              Contact
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

//first I am using foreach on nodelist but it is giving and error
//so I tried it with for loop that it works but than accessing classlist for each node is giving and error.
