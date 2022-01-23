import React, { useContext, useState, useEffect } from "react";
import Header from "../../Components/Header/Header.jsx";
import Search from "../../Components/Search/Search.jsx";
import SingleReport from "../../Components/SingleReport/SingleReport.jsx";
import Modal from "../../Components/Modal/Modal.jsx";
import "./reportpage.css";

import { Dino } from "../../App";

function ReportPage() {
  const info = useContext(Dino);
  const [deletemodal, showDeleteModal] = useState(false);
  
  const [filteredreports, setFilteredReports] = useState([]);

  useEffect(() => setFilteredReports(info.reports), [info.reports]);

  return (
    <div className="report-page">
      <Header></Header>

      <Modal></Modal>

      <div className={deletemodal ? "delete-modal" : "delete-modal-hide"}>
        <div className="delete-content">
          <div>Are you sure you want to delete this report?</div>
          <div className="delete-buttons">
            <button
              onClick={() => {
                fetch(`http://localhost:3333/api/reports/${info.reportid}`, {
                  method: "DELETE",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${info.token}`,
                  },
                }).then(() => {
                  info.setReports(info.reports);
                });
                info.setIsValid(!info.isValid);
                showDeleteModal(false);
              }}
            >
              YES
            </button>
            <button
              onClick={() => {
                showDeleteModal(false);
              }}
            >
              NO
            </button>
          </div>
        </div>
      </div>
      <div className="report-page-container">
        <Search></Search>
        {filteredreports
          .filter((e) => {
            if (info.searchInput === "") {
              return e;
            } else if (
              e.candidateName
                .toLowerCase()
                .includes(info.searchInput.toLowerCase()) ||
              e.companyName
                .toLowerCase()
                .includes(info.searchInput.toLowerCase()) ||
              e.status.toLowerCase().includes(info.searchInput.toLowerCase()) ||
              new Date(e.interviewDate)
                .toLocaleDateString("en-UK")
                .split("/")
                .join(".")
                .includes(info.searchInput)
            ) {
              return e;
            }
          })
          .map((e) => (
            <SingleReport
              showDeleteModal={showDeleteModal}
              e={e}
            ></SingleReport>
          ))}
      </div>
    </div>
  );
}

export default ReportPage;
