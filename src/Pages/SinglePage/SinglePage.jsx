import React, { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import Modal from "../../Components/Modal/Modal.jsx";
import "./singlepage.css";
import { Dino } from "../../App";

function SinglePage(props) {
  const x = useContext(Dino);

  const [singleCandidate, setSingleCandidate] = useState("");
  const [candReport, setCandReport] = useState([]);
  useEffect(
    () =>
      setSingleCandidate(
        x.candidates.find((e) => e.id == props.match.params.id)
      ),
    [x.candidates]
  );

  useEffect(() => {
    setCandReport(
      x.reports.filter((e) => e.candidateId == props.match.params.id)
    );
  }, [x.reports]);

  console.log(props.component);

  return (
    <div className="singlepage">
      {singleCandidate && (
        <>
          <Header></Header>
          <div className="single-page-container">
            <div className="person-image-and-data">
              <div className="person-image-div">
                <img
                  className="person-image"
                  src={singleCandidate.avatar}
                  alt="candidate"
                />
              </div>
              <div className="person-data">
                <div className="person-data-field">
                  <p className="single-person-heading">Name:</p>
                  <h2 className="single-person-data">{singleCandidate.name}</h2>
                </div>
                <div className="person-data-field">
                  <p className="single-person-heading">Date of birth:</p>
                  <h2 className="single-person-data">
                    {new Date(singleCandidate.birthday)
                      .toLocaleDateString("en-UK")
                      .split("/")
                      .join(".")}
                  </h2>
                </div>
                <div className="person-data-field">
                  <p className="single-person-heading">Email:</p>
                  <h2 className="single-person-data">
                    {singleCandidate.email.toLowerCase()}
                  </h2>
                </div>
                <div className="person-data-field">
                  <p className="single-person-heading">Education:</p>
                  <h2 className="single-person-data">
                    {singleCandidate.education}
                  </h2>
                </div>
              </div>
            </div>
            <div className="person-report">
              <h1>Reports</h1>
              {candReport.length === 0 ? (
                <div className="alert-message">There are no reports yet</div>
              ) : (
                <table>
                  <tr>
                    <th>
                      Company
                    </th>
                    <th>
                      Interview Date
                    </th>
                    <th>
                      Status
                    </th>
                  </tr>

                  {candReport?.map((e, i) => (
                    <tr key={i}>
                      <td className="company-names">{e.companyName}</td>
                      <td className="interview-dates">
                        {new Date(e.interviewDate)
                          .toLocaleDateString("en-UK")
                          .split("/")
                          .join(".")}
                      </td>
                      <td className="statuses">
                        <p>{e.status}</p>
                        <button
                          onClick={() => {
                            x.setModal(true);
                            x.setReportInfo(e);
                          }}
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                            <path
                              fill-rule="evenodd"
                              d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </table>
              )}
            </div>
          </div>
        </>
      )}
      <Modal></Modal>
    </div>
  );
}

export default SinglePage;
