import React from "react";
import { Link } from "react-router-dom";

const ApplicationCard = ({ job }) => {
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
                        <i className="fa fa-map-marker"></i> {job.titre}
                      </p>
                      <p>
                        <i className="fa fa-map-marker"></i> {job.description}
                      </p>
                      <p>
                        <i className="fa fa-map-marker"></i> {job.adresse}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="jobs_right">
                <div className="date">
                  <p>Email: {job.societe.email}</p>
                  <p>Nom: {job.societe.nom}</p>
                  <p>Website : {job.societe.siteweb}</p>
                  <p>
                    Post Date: {new Date(job.datepost).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
