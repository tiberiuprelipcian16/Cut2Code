import React from "react";
import TextGradient from "./TextGradient";
import Button from "./Button";
import "../../style/blur.css";

const BlurElement = ({
  height,
  className,
  classNameCol1,
  classNameCol2,
  classNameCol3,
  classNameCol4,
  classNameCol5,
  link,
  altImg,
  name,
  username,
  price,
  textButton,
}) => {
  return (
    <div className={height}>
      <div className={"flex22 fR blur " + className}>
        <div className={classNameCol1}>
          <img src={link} alt={altImg} />
        </div>
        <div className={classNameCol2}>
          <img src={link} alt={altImg} />
        </div>
        <div className={classNameCol3}>
          <img src={link} alt={altImg} />
        </div>
        <div className={"flex22 fC " + classNameCol4}>
          <p className="name">{name}</p>
          <p className="username">{username}</p>
          <TextGradient text={price} className={"tredingtxtGrad"} />
        </div>
        <Button className={classNameCol5} onClick={""} text={textButton} />
      </div>
    </div>
  );
};

export default BlurElement;
