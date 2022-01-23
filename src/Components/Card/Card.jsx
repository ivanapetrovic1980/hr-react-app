import React, { useContext } from "react";
import { Dino } from "../../App";
import "./card.css";

function Card(props) {
  const x = useContext(Dino);

  return (
    <div className="singlecard">
      <div className="card-image-div">
        <img src={props.e.avatar} alt="candidate" />
      </div>
      <div className="card-name">{props.e.name}</div>
      <div className="card-email">{props.e.email.toLowerCase()}</div>
    </div>
  );
}

export default Card;
