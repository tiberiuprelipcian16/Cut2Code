import React from "react";
import Button from "./general/Button";
import "../style/header.scss";
import $ from "jquery";





$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var stk = $("header").offset().top;

  if (scroll >= stk) {
    $("header").addClass("sticky");
    $(".hero").addClass("margintop");
  } else {
    $("header").removeClass("sticky");
    
    console.log(stk);
  }
});

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
