import React from "react";
import JobList from "../components/jobList";

const Offres = () => {
  return (
    <>
      <div className="bradcam_area bradcam_bg_1">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="bradcam_text">
                <h3>Offres à la une</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <JobList />
    </>
  );
};

export default Offres;
