import React, { useContext } from "react";
import "./cardcreate.css";
import { Dino } from "../../App";

function CardCreate(props) {
  const dino = useContext(Dino);

  return (
    <div
      className="card-create"
      onClick={() => {
        props.setNameCreate(props.name);
        props.setIDCreate(props.id);
      }}>
      <div className="card-create-image">
        <img className="card-create-img" alt="candidate" src={props.avatar}></img>
      </div>
      <div className="card-create-info">
        <h4>{props.name}</h4>
        <p>{props.email.toLowerCase()}</p>
      </div>
    </div>
  );
}

export default CardCreate;
