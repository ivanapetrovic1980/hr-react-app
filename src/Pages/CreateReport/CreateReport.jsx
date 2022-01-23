import React, { useState } from "react";
import PhaseOne from "../../Components/PhaseOne/PhaseOne.jsx";
import PhaseTwo from "../../Components/PhaseTwo/PhaseTwo.jsx";
import PhaseThree from "../../Components/PhaseThree/PhaseThree.jsx";
import Header from "../../Components/Header/Header.jsx";
import "./createreport.css";

function CreateReport() {
  const [phase, setPhase] = useState("one show");

  const [namecreate, setNameCreate] = useState("");
  const [idcreate, setIDCreate] = useState(null);
  const [companyname, setCompanyName] = useState("");
  const [companyID, setCompanyID] = useState(null);

  return (
    <div className="create-reports">
      <Header></Header>
      <div className="create-reports-container">
        <div className="create-reports-stages-and-info">
          <div className="create-reports-stages">
            <div>{phase === "one show" ? <b>1. Select Candidate</b> : "1. Select Candidate"}</div>
            <div>{phase === "two show" ? <b>2. Select Company</b> : "2. Select Company"}</div>
            <div>{phase === "three show" ? <b>3. Fill Report Details</b> : "3. Fill Report Details"}</div>
          </div>
          <div className="create-reports-info">
            <p>{phase !== "one show" ? "Candidate:" : " "} </p>
            <h3>{phase !== "one show" ? namecreate : " "}</h3>
            <p>{phase === "three show" ? "Company name:" : " "}</p>
            <h3>{phase === "three show" ? companyname : " "}</h3>
          </div>
        </div>
        <div className="create-reports-phases">
          <PhaseOne phase={phase} setPhase={setPhase} namecreate={namecreate} setNameCreate={setNameCreate} setIDCreate={setIDCreate}></PhaseOne>
          <PhaseTwo phase={phase} setPhase={setPhase} setCompanyName={setCompanyName} setCompanyID={setCompanyID} setNameCreate={setNameCreate} companyname={companyname}></PhaseTwo>
          <PhaseThree phase={phase} setPhase={setPhase} namecreate={namecreate} idcreate={idcreate} companyname={companyname} companyID={companyID} setCompanyName={setCompanyName}></PhaseThree>
        </div>
      </div>
    </div>
  );
}

export default CreateReport;
