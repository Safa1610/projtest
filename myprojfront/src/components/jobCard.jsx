import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const JobCard = ({ job }) => {
  const { id } = useParams();
  const token = sessionStorage.getItem("token");

  return (
    <div class="job_listing_area plus_padding">
      <div class="job_lists m-0">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="single_jobs white-bg d-flex justify-content-between">
              <div class="jobs_left d-flex align-items-center">
                <div class="thumb">
                  <img src="img/svg_icon/1.svg" alt="" />
                </div>
                <div class="jobs_conetent">
                  <Link
                    to={`/job/${job.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h4>{job.titre}</h4>
                  </Link>

                  <div class="links_locat d-flex align-items-center">
                    <div class="location">
                      <p>
                        <i class="fa fa-map-marker"></i> {job.adresse}
                      </p>
                    </div>
                    <div class="location">
                      <p>
                        <i class="fa fa-clock-o"></i> {job.statut}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="jobs_right">
                <div class="apply_now">
                  {token ? (
                    <Link
                      className="boxed-btn3"
                      style={{ textDecoration: "none" }}
                    >
                      Postuler
                    </Link>
                  ) : (
                    <Link
                      className="boxed-btn3"
                      style={{ textDecoration: "none" }}
                      to="/login"
                    >
                      Postuler
                    </Link>
                  )}
                </div>
                <div class="date">
                  <p>Date line: 31 Jan 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
