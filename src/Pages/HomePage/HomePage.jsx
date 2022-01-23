import React, { useContext, createContext, useState, useEffect } from "react";
import Header from "../../Components/Header/Header.jsx";
import Search from "../../Components/Search/Search.jsx";
import Card from "../../Components/Card/Card.jsx";
import "./homepage.css";
import { Link } from "react-router-dom";
import { Dino } from "../../App";



function HomePage() {
  const x = useContext(Dino);
  const [filteredCandidates, setFilteredCandidates] = useState([]);

  useEffect(() => setFilteredCandidates(x.candidates), [x.candidates]);

  return (
    <div className="home-page">
      <Header></Header>
      <div className="home-page-container">
        <div className="candidates-and-search">
          <h1>Candidates</h1>
          <Search
            candidates={filteredCandidates}
            setSearchinput={x.setSearchinput}
          ></Search>
        </div>
        <div className="card-wrapper">
          {filteredCandidates
            .filter((e) => {
              if (x.searchInput === "") {
                return e;
              } else if (
                e.name.toLowerCase().includes(x.searchInput.toLowerCase())
              ) {
                return e;
              }
            })
            .map((e) => (
              <Link
                to={`/candidate/${e.id}`}
                key={e.id}
                className="single-card-link"
              >
                <Card e={e}></Card>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
