import React from "react";
import MyApplication from "../components/MyApplication";

const Application = () => {
  return (
    <div>
      <div className="bradcam_area bradcam_bg_1">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="bradcam_text">
                <h3>My jobs</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyApplication />
    </div>
  );
};

export default Application;
