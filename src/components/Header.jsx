import React from "react";
import Button from "./general/Button";
import "../style/header.scss";

const Header = () => {
  return (
    <header>
      <div className="flex22 fR content">
      <ul className="flex22 fR">
        <li>Marketplace</li>
        <li>Creators</li>
        <li>Community</li>
      </ul>

      <p>NFTKING</p>

      <Button
        className={"flex22 bodyGradient headerButt"}
        text={"Conect Wallet"}
        onClick={() => ""}
      />
      </div>
    </header>
  );
};

export default Header;
