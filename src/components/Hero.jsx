import React from "react";
import "../style/hero.scss";
import imgHero from "../assets/imgHero.svg";
import TextGradient from "./general/TextGradient";
import Button from "./general/Button";
import BlurElement from "./general/BlurElement";
import Header from "./Header";
import Metamask from "../assets/metamask.svg";
import Binance from "../assets/binance.svg";
import Coinbase from "../assets/coinbase.svg";
const Hero = () => {
  return (
    <div className="flex12 fC" id="hero">
      <Header />
      <div className="flex22 fR content hero">
        <div className="flex21 fC left">
          <div className="txtTitle">
            <div>
              Discover & Collect <TextGradient text={"Super Rare"} /> Digital
              Artworks
            </div>
          </div>

          <p className="secondText">
            The largest NFT marketplace. Authentic and truly unique digital
            creation. Signed and issued by the creator, made possible by
            blockchain technology
          </p>

          <div className="flex22 fR buttons">
            <Button
              text={"Let’s Explore"}
              className={"bodyGradient headerButt hero1"}
            />
            <Button
              text={"Sell NFT"}
              className={"borderGradient headerButt hero2"}
            />
          </div>
        </div>
        <div className="right">
          <img className="heroImg" src={imgHero} alt="imgHero" />

          <BlurElement
            height={"divBlurHero"}
            className={"blurHero"}
            classNameCol1={"metamask"}
            classNameCol2={"coinbase"}
            classNameCol3={"binance"}
            classNameCol4={"none"}
            classNameCol5={"none"}
            classNameCol6={"none"}
            linkc1={Metamask}
            linkc2={Binance}
            linkc3={Coinbase}
            altImgc1={"metamask"}
            altImgc2={"binance"}
            altImgc3={"coinbase"}
            name={""}
            username={""}
            price={""}
            textButton={""}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
