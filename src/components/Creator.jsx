import React from "react";
import "../style/creator.scss";
import Button from "./general/Button";
import Card from "./general/Card";
import Cover1 from "../assets/c1.svg";
import Cover2 from "../assets/c2.svg";
import Cover3 from "../assets/c3.svg";
import Cover4 from "../assets/c4.svg";
import User1 from "../assets/user1.svg";
import User2 from "../assets/user2.svg";
import User3 from "../assets/user3.svg";
import User4 from "../assets/user4.svg";
import $ from 'jquery';
//   react code here

$(".creator1").click(function(){
    $.get("demo_test.asp", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});

$(".creator2").click(function(){
  $.get("demo_test.asp", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
  });
});

const Creator = () => {
  return (
    <div className="flex12 fC" id="creator">
      <div className="flex12 fC top">
        <p className="titleCreator">Top List Creator</p>
        <div className="flex22 fR buttons">
          <Button
            className={"bodyGradient creator1"}
            link={""}
            text={"Popular"}
          />
          <Button
            className={"borderGradient creator2"}
            link={""}
            text={"Following"}
          />
        </div>
      </div>
      <div className="cards">
        <Card
          cover={Cover1}
          altCover={"cover1"}
          user={User1}
          altUser={"user1"}
          name={"Hibnastiar"}
          text={"27.3K"}
          textButton={"Followed"}
          className={"borderGradient creator3"}
          classGradient={"creator"}
        />

        <Card
          cover={Cover2}
          altCover={"cover1"}
          user={User2}
          altUser={"user1"}
          name={"Hibnastiar"}
          text={"21.6K"}
          textButton={"Follow"}
          className={"bodyGradient creator3"}
          classGradient={"creator"}
        />

        <Card
          cover={Cover3}
          altCover={"cover3"}
          user={User3}
          altUser={"user3"}
          name={"Hibnastiar"}
          text={"14.0K"}
          textButton={"Followed"}
          className={"borderGradient creator3"}
          classGradient={"creator"}
        />

        <Card
          cover={Cover4}
          altCover={"cover4"}
          user={User4}
          altUser={"user4"}
          name={"Hibnastiar"}
          text={"11.9K"}
          textButton={"Follow"}
          className={"bodyGradient creator3"}
          classGradient={"creator"}
        />
      </div>

      <div className="flex22 fR next">
        <Button className={"nextButt creatorButt4"}/>
        <Button className={"nextButt creatoractiveButt"}/>
        <Button className={"nextButt creatorButt4"}/>
        <Button className={"nextButt creatorButt4"}/>
      </div>
    </div>
  );
};

export default Creator;
