import React from "react";

const Button = ({ buttonImagebefore, buttonImagelater, buttonText }) => {
  return (
    <div>
      <span class="material-symbols-outlined">{buttonImagebefore}</span>
      {buttonText}
      <span class="material-symbols-outlined">{buttonImagelater}</span>
    </div>
  );
};

export default Button;
