import React, { useContext, useEffect, useState } from "react";
import { Dino } from "../../App";
import Search from "../../Components/Search/Search.jsx";
import "./phasetwo.css";

function PhaseTwo(props) {
  const dino = useContext(Dino);
  const [companies, setCompanies] = useState([]);
  const [filteredcompanies, setFilteredCompanies] = useState([]);

  useEffect(() => setFilteredCompanies(companies), [companies]);

  useEffect(() => {
    fetch("http://localhost:3333/api/companies")
      .then((res) => res.json())
      .then((res) => setCompanies(res));
  }, []);

  return (
    <div className={props.phase === "two show" ? "two show" : "two hide"}>
      <Search></Search>
      <div className="company-lists">
        {filteredcompanies
          .filter((e) => {
            if (dino.searchInput === "") {
              return e;
            } else if (
              e.name.toLowerCase().includes(dino.searchInput.toLowerCase())
            ) {
              return e;
            }
          })
          .map((e) => (
            <h3
              className="company-name"
              key={e.id}
              onClick={() => {
                props.setCompanyName(e.name);
                props.setCompanyID(e.id);
              }}
            >
              {e.name}
            </h3>
          ))}
      </div>
      <div className="phase-two-buttons">
        <button
          onClick={() => {
            props.setPhase("one show");
            props.setNameCreate("");
          }}
        >
          BACK
        </button>
        <button
          onClick={() =>
            props.companyname !== ""
              ? props.setPhase("three show")
              : props.setPhase("two show")
          }
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default PhaseTwo;
