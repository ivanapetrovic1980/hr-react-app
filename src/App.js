import React, { createContext, useEffect, useState } from "react";
import HomePage from "./Pages/HomePage/HomePage";
import CreateReport from "./Pages/CreateReport/CreateReport";
import Login from "./Pages/Login/Login";
import SinglePage from "./Pages/SinglePage/SinglePage";
import ReportPage from "./Pages/ReportPage/ReportPage";
import { Route, Switch, Redirect } from "react-router-dom";
import "./app.css";
export const Dino = createContext();

function App() {
  const [candidates, setCandidates] = useState([]);

  const [reports, setReports] = useState([]);
  
  const [token, setToken] = useState(sessionStorage.getItem("token") !== "undefined" ? sessionStorage.getItem("token") : null);
  
  const [modal, setModal] = useState(false);
  const [reportinfo, setReportInfo] = useState({});

  const [searchInput, setSearchinput] = useState("");

  const [modalperson, setModalPerson] = useState("");
  const [reportid, setReportID] = useState(null);
  
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3333/api/candidates")
      .then((res) => res.json())
      .then((res) =>
        setCandidates(
          res.map((e, i) => {
            return {
              ...e,
              avatar: `https://randomuser.me/api/portraits/women/${i + 25}.jpg`,
            };
          })
        )
      );
  }, []);

  useEffect(() => {
    fetch("http://localhost:3333/api/reports")
      .then((res) => res.json())
      .then((res) => setReports(res));
  }, [isValid]);

  return (
    <div className="app">
      <Switch>
        <Dino.Provider
          value={{
            modal,
            reportinfo,
            modalperson,
            token,
            reports,
            candidates,
            reportid,
            searchInput,
            isValid,
            setIsValid,
            setModalPerson,
            setReportInfo,
            setToken,
            setModal,
            setReportID,
            setSearchinput,
          }}>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>

          <Route path="/login">
            {token == null ? (
              <Login />
            ) : (
              <Redirect to="/reportpage">
              </Redirect>
            )}
          </Route>

          <Route path="/candidate/:id" component={SinglePage}></Route>

          <Route path="/createreport">
            {token != null ? (
              <CreateReport></CreateReport>
            ) : (
              <Redirect to="/login">
              </Redirect>
            )}
          </Route>

          <Route path="/reportpage">
            {token != null ? (
              <ReportPage />
            ) : (
              <Redirect to="/login">
              </Redirect>
            )}
          </Route>
        </Dino.Provider>
      </Switch>
    </div>
  );
}

export default App;
