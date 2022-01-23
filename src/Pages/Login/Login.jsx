import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { Dino } from "../../App";

function Login() {
  const x = useContext(Dino);

  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");

  const [response, setResponse] = useState("");

  const loginButton = () => {
    fetch(`http://localhost:3333/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: `${useremail}`,
        password: `${password}`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
        sessionStorage.setItem("token", res.accessToken);
        sessionStorage.getItem("token") === "undefined" ? x.setToken(null) : x.setToken(sessionStorage.getItem("token"));
      });

    // .then((res) => sessionStorage.setItem("token", res.accessToken))
    // .then(() => {
    //   sessionStorage.getItem("token") === "undefined"
    //   ? x.setToken(null)
    //   : x.setToken(sessionStorage.getItem("token"));
    // // })
  };

  return (
    <div className="loginpage">
      <div className="login-content" onKeyPress={(e) => e.key === "Enter" && loginButton()}>
        <div className="login-field">
          <p>Username</p>
          <input
            className="login-input"
            type="text"
            placeholder="Username"
            onChange={(u) => {
              setUseremail(u.target.value);
            }}
          />
        </div>
        <p className="login-message">
          {response === "Cannot find user" ? response : ""}
          {response === "Email format is invalid" ? response : ""}
        </p>

        <div className="login-field">
          <p>Password</p>
          <input
            className="login-input"
            type="password"
            name=""
            id=""
            placeholder="Password"
            onChange={(p) => {
              setPassword(p.target.value);
            }}
          />
        </div>
        <p className="login-message">
          {response === "Incorrect password" ? response : ""}
          {response === "Email and password are required" ? response : ""}
          {response === "Password is too short" ? response : ""}
        </p>

        <div className="login-buttons">
          <button
            className="login-button"
            onClick={() => {
              loginButton();
            }}>
            LOG IN
          </button>
          <Link to="/">
            <button className="login-button">HOME PAGE</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
