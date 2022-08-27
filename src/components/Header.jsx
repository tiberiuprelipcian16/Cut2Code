import React from "react";
import Button from "./general/Button";
import "../style/header.css";

const Header = () => {
  return (
    <header className="flex22 fR">
      <ul className="flex22 fR">
        <li>Marketplace</li>
        <li>Creators</li>
        <li>Community</li>
      </ul>

      <p>NFTKING</p>

      <Button
        className={"flex22 fR headerButton"}
        text={"Conect Wallet"}
        onClick={() => ""}
      />
    </header>
  );
};

export default Header;
