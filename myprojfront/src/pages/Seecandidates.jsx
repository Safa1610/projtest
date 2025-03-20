import React from "react";
import CandidatesList from "../components/CandidatesList";

const Seecandidates = () => {
  return (
    <>
      <div className="bradcam_area bradcam_bg_1">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="bradcam_text">
                <h3>Candidates</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CandidatesList />
    </>
  );
};

export default Seecandidates;
