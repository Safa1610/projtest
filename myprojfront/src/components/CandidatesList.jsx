import React, { useEffect, useState } from "react";
import CandidatesCard from "./CandidatesCard";
import axios from "axios";
import { useParams } from "react-router-dom";

const CandidatesList = () => {
  const [candidates, SetCandidates] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/jobs/candidates/" + id)
      .then((res) => SetCandidates(res.data));
  }, []);
  console.log(candidates);
  return (
    <div className="bggrey">
      <div className="container">
        <div className="d-flex flex-column bd-highlight minhei">
          <div className="p-2 bd-highlight">
            {candidates.length > 0 ? (
              candidates.map((candidate) => (
                <CandidatesCard key={candidate._id} candidate={candidate} />
              ))
            ) : (
              <p className="text-center">Aucun résultat trouvé.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidatesList;
