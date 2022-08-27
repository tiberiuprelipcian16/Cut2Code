import React from "react";
import "../style/hero.css";
import imgHero from "../assets/imgHero.svg";
import Metamask from "../assets/metamask.svg";
import Binance from "../assets/binance.svg";
import Coinbase from "../assets/coinbase.svg";
import TextGradient from "./general/TextGradient";
import Button from "./general/Button";

const Hero = () => {
  return (
    <div className="flex22 fR" id="hero">
      <div className="flex12 fC left">
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
          <Button text={"Let’s Explore"} className={"hero1"}/>
          <Button text={"Sell NFT"} className={"hero2"}/>
        </div>
      </div>
      <div className="right">
        <img src={imgHero} alt="imgHero" />
        <div className="borderBlur">
          <div className="flex22 fR blur">
            <div className="metamask">
              <img src={Metamask} alt="metamask" />
            </div>
            <div className="binance">
              <img src={Binance} alt="binance" />
            </div>
            <div className="coinbase">
              <img src={Coinbase} alt="coinbase" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
