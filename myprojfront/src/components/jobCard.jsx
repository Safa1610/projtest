import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const JobCard = ({ job }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const postuler = () => {
    console.log(job._id);
    axios
      .post("http://localhost:3000/api/jobs/apply/" + job._id, {
        userId: jwtDecode(token).id,
      })
      .then(() => {
        alert("ok");
      });
  };
  const updateStatut = () => {
    axios.put("http://localhost:3000/api/jobs/" + job._id).then(() => {
      alert("updated");
      window.location.reload();
    });
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
                  <Link
                    to={`/job/${job._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h4>{job.titre}</h4>
                  </Link>

                  <div className="links_locat d-flex align-items-center">
                    <div className="location">
                      <p>
                        <i className="fa fa-map-marker"></i> {job.adresse}
                      </p>
                    </div>
                    <div className="location">
                      <p>
                        <i className="fa fa-clock-o"></i> {job.statut}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="jobs_right">
                <div className="apply_now">
                  {role === "company" ? (
                    <>
                      <Link
                        className="boxed-btn3"
                        style={{ textDecoration: "none" }}
                        onClick={updateStatut}
                      >
                        Change Status
                      </Link>
                      <br />
                      <Link
                        className="boxed-btn3"
                        style={{ textDecoration: "none" }}
                        to={`/candidates/${job._id}`}
                      >
                        See candidates
                      </Link>
                    </>
                  ) : token ? (
                    <Link
                      className="boxed-btn3"
                      style={{ textDecoration: "none" }}
                      onClick={postuler}
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
                <div className="date">
                  <p>
                    Post Date: {new Date(job.datepost).toLocaleDateString()}
                  </p>
                  {role != "company" && <p>Company: {job.societe.nom}</p>}
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
