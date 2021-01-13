import React from "react";
import "./style.css";
import Card from "../card/index";

import Poesias from "../../poesias.json";

export default function Index() {

  return (
    <div className="main">
      {Poesias.map(item => {
        return (
          <Card 
            key={item.id}
            value={item.poesia}
          />
        );
      })}
    </div>
  );
}
