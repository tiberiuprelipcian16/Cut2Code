import React from "react";
import "../../style/button.scss";

const Button = ({ className, text, link }) => {
  return (
    <div className="borderr">
      <button className={className} onClick={() => link}>
        {text}
      </button>
    </div>
  );
};

export default Button;
