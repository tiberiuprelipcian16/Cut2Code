import React from "react";
import "../../style/button.css";

const Button = ({ className, text, link }) => {
  return (
    <button className={className} onClick={() => link}>
      {text}
    </button>
  );
};

export default Button;
