import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturedOffer = ({ job }) => {
  const nav = useNavigate();

  return (
    <div class="col-lg-3 col-xl-4 col-md-6">
      <div className="card p-3 mb-3">
        <h3 className="fw-semibold">{job.titre}</h3>
        <p>{job.titre}</p>
        <button
          className="btn btn-primary"
          onClick={() => nav(`/job/${job.id}`)}
        >
          Détails
        </button>
      </div>
    </div>
  );
};

export default FeaturedOffer;
