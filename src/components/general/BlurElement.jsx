import React from "react";
import TextGradient from "./TextGradient";
import Button from "./Button";
import "../../style/blur.scss";
const BlurElement = ({
  height,
  className,
  classNameCol1,
  classNameCol2,
  classNameCol3,
  classNameCol4,
  classNameCol5,
  classNameCol6,
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

        <div className={"flex22 " + classNameCol6}>
          <div className="flex22 fC content">
            <div className="flex22 fC topFooter">
              <p className="title">Never miss a drop!</p>
              <p>
                Subscribe to super-exclusive drop list and be the first to know
                about upcoming drops
              </p>
            </div>

            <div className="flex22 fR subscribe">
              <input type="email" placeholder="Enter your email address" />
              <Button
                text="Subscribe"
                className={"bodyGradient footerButton"}
                link={""}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlurElement;
