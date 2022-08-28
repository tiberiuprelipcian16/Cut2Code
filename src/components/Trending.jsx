import React from "react";
import "../style/trending.scss";
import Item from "./general/Items";
import Item1 from "../assets/item1.svg";
import Item2 from "../assets/item2.svg";
import Item3 from "../assets/item3.svg";
import Item4 from "../assets/item4.svg";

const Trending = () => {
  const specifications = [
    {
      link: Item1,
      altimg: "item1",
      name: "Miles Grogosters",
      username: "@hibnastiar",
      price: "3.27 ETH",
    },

    {
      link: Item2,
      altimg: "item2",
      name: "Reox Fancxy",
      username: "@rominolegs",
      price: "4.20 ETH",
    },

    {
      link: Item3,
      altimg: "item3",
      name: "Miles Grogosters",
      username: "@senjadisini",
      price: "4.99 ETH",
    },

    {
      link: Item4,
      altimg: "item4",
      name: "Tuinz Rey",
      username: "@albertov",
      price: "2.99 ETH",
    },
  ];

  return (
    <div id="trending">
      <div className="components">
        <p className="title">Trending This Week</p>
        <p className="description">
          Various kinds of Artwork categories that are trending this week. The
          trend will be reset every week. Don’t miss out on the best artworks
          every week
        </p>
        <Item
          link={specifications[0].link}
          altimg={specifications[0].altimg}
          name={specifications[0].name}
          username={specifications[0].username}
          price={specifications[0].price}
        />

        <Item
          link={specifications[1].link}
          altimg={specifications[1].altimg}
          name={specifications[1].name}
          username={specifications[1].username}
          price={specifications[1].price}
        />

        <Item
          link={specifications[2].link}
          altimg={specifications[2].altimg}
          name={specifications[2].name}
          username={specifications[2].username}
          price={specifications[2].price}
        />

        <Item
          link={specifications[3].link}
          altimg={specifications[3].altimg}
          name={specifications[3].name}
          username={specifications[3].username}
          price={specifications[3].price}
        />
      </div>
    </div>
  );
};

export default Trending;
