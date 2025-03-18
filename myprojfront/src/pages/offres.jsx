import React, { useState } from "react";
import JobList from "../components/jobList";

const Offres = () => {
  return (
    <>
      <div class="bradcam_area bradcam_bg_1">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="bradcam_text">
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
