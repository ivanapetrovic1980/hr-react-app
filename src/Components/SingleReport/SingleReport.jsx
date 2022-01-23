import React, { useContext } from "react";

import "./singlereport.css";
import { Dino } from "../../App";

function SingleReport(props) {
  const info = useContext(Dino);

  return (
    <div className="single-report">
      <div className="single-report-wide-div">
        <h3>{props.e.companyName}</h3>
        <p>Company</p>
      </div>
      <div className="single-report-wide-div">
        <h3>{props.e.candidateName}</h3>
        <p>Candidate</p>
      </div>
      <div className="single-report-narrow-div report-date">
        <h3>{new Date(props.e.interviewDate).toLocaleDateString("en-UK").split("/").join(".")}</h3>
        <p>Interview date</p>
      </div>
      <div className="single-report-narrow-div">
        <h3>{props.e.status}</h3>
        <p>Status</p>
      </div>
      <div className="single-report-narrow-div single-report-buttons">
        <button
          className="single-report-button"
          onClick={() => {
            info.setModal(true);
            info.setReportInfo(props.e);
          }}>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
            <path fill-rule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" clip-rule="evenodd"></path>
          </svg>
        </button>
        <button
          className="single-report-button"
          onClick={() => {
            props.showDeleteModal(true);
            info.setReportID(props.e.id);
          }}>
          X
        </button>
      </div>
    </div>
  );
}

export default SingleReport;
