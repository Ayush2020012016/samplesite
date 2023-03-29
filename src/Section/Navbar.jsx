import React, { useState } from "react";
import Button from "../Components/Button";
import "./Navbar.css";

const Navbar = () => {
  const handleClick = (e) => {
    const target = e.target;
    const nodelist = target.parentNode.children;
    // nodelist.forEach((current, index) => {
    //   current.classList.remove("active");
    // });

    //why the fuck it is not working.
    for (let i = 0; i < nodelist.length; i++) {
      console.log(nodelist[i].classList.remove("active"));
    }
    target.classList.add("active");
  };

  return (
    <div id="id" className="navContainer">
      <div className="navBar">
        <div className="navTitle">
          <a href="/">START BOO T STRAP</a>
        </div>
        {/* <Button buttonText={"Menu"} /> */}
        <div className="navItems">
          <li onClick={(e) => handleClick(e)}>
            <a href="/">Portfolio</a>
          </li>
          <li onClick={(e) => handleClick(e)}>
            <a href="/">About</a>
          </li>
          <li onClick={(e) => handleClick(e)}>
            <a href="/">Contact</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

//first I am using foreach on nodelist but it is giving and error
//so I tried it with for loop that it works but than accessing classlist for each node is giving and error.
