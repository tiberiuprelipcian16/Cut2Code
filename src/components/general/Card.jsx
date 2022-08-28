import React from "react";
import Button from "./Button";
import TextGradient from "./TextGradient";
import "../../style/card.scss";

const Card = ({
    c,
  cover,
  altCover,
  user,
  altUser,
  name,
  text,
  textButton,
  className,
  classGradient,
}) => {
  return (
    <div className="flex12 back">
      <img className="backImage" src={cover} alt="altCover" />
      <div className="flex12 fC card">
        <img className="cover" src={cover} alt={altCover} />
        <img className="user" src={user} alt={altUser} />       
        <p className="name">{name}</p>
        <div className="flex22 fR txtGradient">
          <TextGradient text={text} className={classGradient} />
          <p className="seco">Artwork</p>
        </div>
        <Button text={textButton} className={className} />
      </div>
    </div>
  );
};

export default Card;
