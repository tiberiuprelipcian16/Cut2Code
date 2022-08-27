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
  linkc1,
  linkc2,
  linkc3,
  altImgc1,
  altImgc2,
  altImgc3,
  name,
  username,
  price,
  textButton,
}) => {
  return (
    <div className={height}>
      <div className={"flex22 fR blur " + className}>
        <div className={classNameCol1}>
          <img src={linkc1} alt={altImgc1} />
        </div>
        <div className={classNameCol2}>
          <img src={linkc2} alt={altImgc2} />
        </div>
        <div className={classNameCol3}>
          <img src={linkc3} alt={altImgc3} />
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
