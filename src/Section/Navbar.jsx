import React, { useState } from "react";
import Button from "../Components/Button";
import "./Navbar.css";


const user = [
  {
    id: 1,
    name: "portfolio",
  },
  {
    id: 2,
    name: "About",
  },
  {
    id: 3,
    name: "Contact",
  },
];
const Navbar = () => {
  const [activeState, setactiveState] = useState(1);

  return (
    <div id="id" className="navContainer">
      <div className="navBar">
        <div className="navTitle">
          <a href="/">START BOOTSTRAP</a>
        </div>
        {/* <Button buttonText={"Menu"} /> */}
        <div className="navItems">
          {user.map((value) => {
            return (
              <Li
                name={value.name}
                state={activeState === value.id}
                id={value.id}
                setactiveState={setactiveState}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const Li = (props) => {
  return (
    <>
      <li
        onClick={() => {
          props.setactiveState(props.id);
        }}
        className={props.state ? "active" : null}
      >
        {props.name}
      </li>
    </>
  );
};
//first I am using foreach on nodelist but it is giving and error
//so I tried it with for loop that it works but than accessing classlist for each node is giving and error.
