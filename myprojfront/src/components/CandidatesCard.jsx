import React from "react";

const CandidatesCard = ({ candidate }) => {
  const downloadPDF = async () => {
    try {
      const response = await fetch(candidate.candidature.liencv);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = candidate.candidature.prenom; // File name
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };
  return (
    <div className="job_listing_area plus_padding">
      <div className="job_lists m-0">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="single_jobs white-bg d-flex justify-content-between">
              <div className="jobs_left d-flex align-items-center">
                <div className="thumb">
                  <img src="img/svg_icon/1.svg" alt="" />
                </div>
                <div className="jobs_conetent">
                  <div className="links_locat d-flex align-items-center">
                    <div className="location">
                      <p>
                        <i className="fa fa-map-marker"></i>{" "}
                        {candidate.candidature.nom}
                      </p>
                    </div>
                    <div className="location">
                      <p>
                        <i className="fa fa-clock-o"></i>{" "}
                        {candidate.candidature.prenom}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="jobs_right">
                <div className="apply_now"></div>
                <div className="date">
                  <p>Email: {candidate.candidature.email}</p>
                  <p>Tel : {candidate.candidature.tel}</p>
                  <p>
                    POst Date :{" "}
                    {new Date(candidate.postedAt).toLocaleDateString()}
                  </p>
                </div>
                <br />

                <button
                  className="boxed-btn3"
                  style={{ textDecoration: "none" }}
                  onClick={downloadPDF}
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidatesCard;
