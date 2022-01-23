import React, { useContext } from "react";
import "./search.css";
import { Dino } from "../../App";
function Search() {
  const info = useContext(Dino);
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search..."
        onChange={(e) => {
          info.setSearchinput(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default Search;
