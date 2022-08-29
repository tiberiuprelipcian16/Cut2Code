import React from "react";
import BlurElement from "./BlurElement";
import "../../style/items.scss";

const Items = ({ height, link, altimg, name, username, price }) => {
  return (
    <div className="flex22 fC item">
      <img src={link} alt={altimg} />
      <BlurElement
        height={"divBlurTrending"}
        className={"blurTrending"}
        classNameCol1={"none"}
        classNameCol2={"none"}
        classNameCol3={"none"}
        classNameCol4={"itm"}
        classNameCol5={"bodyGradient trendingButt"}
        classNameCol6={"none"}
        link={""}
        altImg={""}
        name={name}
        username={username}
        price={price}
        textButton={"Collect Now"}
      ></BlurElement>

    </div>
  );
};

export default Items;
