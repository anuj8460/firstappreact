import React from "react";
import "./card-;ist.styles.css";
import { Card } from "../card/card.component";
export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card
        key={monster.id}
        name={monster.name}
        id={monster.id}
        email={monster.email}
      />
    ))}
  </div>
);
