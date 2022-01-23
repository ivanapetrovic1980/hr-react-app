import React, { useContext } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Dino } from "../../App";
import logo from "./logo.png";

function Header() {
  const properties = useContext(Dino);

  function logout() {
    sessionStorage.removeItem("token");
    properties.setToken(sessionStorage.getItem("token"));
  }

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={logo} alt="logo"></img>
      </Link>

      {properties.token === null ? (
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
      ) : (
        <div className="header-buttons">
          <div className="report-buttons">
            <Link to="/reportpage">
              <button className="report-button">Reports</button>
            </Link>

            <Link to="/createreport">
              <button className="report-button">CreateReport</button>
            </Link>
          </div>
          <Link to="/">
            <button onClick={logout}>Logout</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
