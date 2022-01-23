import React, { useContext, useEffect, useState } from "react";
import CardCreate from "../../Components/CardCreate/CardCreate.jsx";
import Search from "../../Components/Search/Search.jsx";
import "./phaseone.css";
import { Dino } from "../../App";

function PhaseOne(props) {
  const dino = useContext(Dino);
  const [filteredcandidates, setFilteredCandidates] = useState([]);

  useEffect(() => setFilteredCandidates(dino.candidates), [dino.candidates]);

  return (
    <div className={props.phase === "one show" ? "one show" : "one hide"}>
      <Search></Search>
      <div className="card-create-wrap">
        {filteredcandidates
          .filter((e) => {
            if (dino.searchInput === "") {
              return e;
            } else if (e.name.toLowerCase().includes(dino.searchInput.toLowerCase())) {
              return e;
            }
          })
          .map((e) => (
            <CardCreate key={e.id} id={e.id} avatar={e.avatar} name={e.name} setNameCreate={props.setNameCreate} email={e.email} setIDCreate={props.setIDCreate}></CardCreate>
          ))}
      </div>
      <button
        onClick={() => {
          props.namecreate !== "" ? props.setPhase("two show") : props.setPhase("one show");
        }}>
        NEXT
      </button>
    </div>
  );
}

export default PhaseOne;
