import React from "react";
import "../style/footer.scss";
import Button from "./general/Button";

const Footer = () => {
  return (
    
    <footer className="flex22 fC">
      <div className="flex22 fC topContent">

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

      <div className="flex22 bottomContent">
        <p>© 2018 - 2022 NFTKING, Inc</p>
      </div>
    </footer>
  );
};

export default Footer;
