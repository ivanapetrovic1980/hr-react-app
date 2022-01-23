import React, { useContext } from "react";
import "./modal.css";
import { Dino } from "../../App";

function Modal() {
  const info = useContext(Dino);
  return (
    <div className={info.modal ? "modal modal-show" : "modal modal-hide"}>
      <div className="modal-content">
        <div className="modal-heading">
          <h2>{info.reportinfo.candidateName}</h2>
          <button onClick={() => info.setModal(false)}>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-data">
            <div>
              <p>Company</p>
              <h3>{info.reportinfo.companyName}</h3>
            </div>
            <div>
              <p>Interview Date</p>
              <h3>{new Date(info.reportinfo.interviewDate).toLocaleDateString("en-UK").split("/").join(".")}</h3>
            </div>
            <div>
              <p>Phase</p>
              <h3>{info.reportinfo.phase}</h3>
            </div>
            <div>
              <p>Status</p>
              <h3>{info.reportinfo.status}</h3>
            </div>
          </div>
          <div className="modal-notes">
            <div>Notes</div>
            <div>{info.reportinfo.note}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
