import React, { useContext, useState } from "react";
import "./phasethree.css";
import { Dino } from "../../App";
import { useHistory } from "react-router-dom";

function PhaseThree(props) {
  const dino = useContext(Dino);
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let history = useHistory();

  function goToReportPage() {
    history.push("/reportpage");
  }

  date = year + "-" + month + "-" + day;

  const [message, setMessage] = useState(false);

  const [interviewdate, setInterviewDate] = useState("");
  const [interviewphase, setInterviewPhase] = useState("CV");
  const [status, setStatus] = useState("Select");
  const [notes, setNotes] = useState("");

  const setNewReport = () => {
    if (interviewdate !== "" && status !== "Select" && notes !== "") {
      fetch("http://localhost:3333/api/reports", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${dino.token}`,
        },
        body: JSON.stringify({
          candidateId: props.idcreate,
          candidateName: props.namecreate,
          companyId: props.companyID,
          companyName: props.companyname,
          interviewDate: interviewdate,
          phase: interviewphase,
          status: status,
          note: notes,
        }),
      }).then((response) => {
        if (response.status >= 200 && response.status < 300) {
          dino.setIsValid(!dino.isValid);
          goToReportPage();
        }
      })
    } else setMessage(true);
  };

  return (
    <div className={props.phase === "three show" ? "three show" : "three hide"}>
      <div className="phase-three-select-info">
        <div className="interview-date field">
          <p>Interview date</p>
          <input
            type="date"
            max={date}
            value={interviewdate}
            onChange={(e) => {
              setInterviewDate(e.target.value);
              setMessage(false);
            }}
          />
        </div>
        <div className="phase field">
          <p>Phase</p>
          <select
            name="phase"
            className="select-phase "
            value={interviewphase}
            required
            onChange={(e) => setInterviewPhase(e.target.value)}
          >
            <option value="CV">CV</option>
            <option value="HR">HR</option>
            <option value="Technical">Technical</option>
            <option value="Final">Final</option>
          </select>
        </div>
        <div className="status field">
          <p>Status</p>
          <select
            name="status"
            className="select-status "
            required
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setMessage(false);
            }}
          >
            <option value="Select">Select</option>
            <option value="Passed">Passed</option>
            <option value="Declined">Declined</option>
          </select>
        </div>
      </div>
      <div className="phase-notes">
        <p>Notes</p>
        <textarea
          name="Notes"
          rows="10"
          className="text-area"
          required
          onChange={(e) => {
            setNotes(e.target.value);
            setMessage(false);
          }}
        ></textarea>

        <p className="login-message">
          {message ? "All fields are required!" : ""}
        </p>
      </div>
      <div className="phase-three-buttons">
        <button
          onClick={() => {
            props.setPhase("two show");
            props.setCompanyName("");
            setInterviewDate("");
            setInterviewPhase("CV");
            setStatus("Select");
            setNotes("");
            
          }}
        >
          BACK
        </button>
        <button
          onClick={() => {
            setNewReport();
          }}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default PhaseThree;
