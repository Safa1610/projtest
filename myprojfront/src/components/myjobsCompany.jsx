import React, { useEffect, useState } from "react";
import JobCard from "./jobCard";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const MyjobsCompany = () => {
  const [jobs, setJobs] = useState([]);

  console.log(localStorage.getItem("token"));
  useEffect(() => {
    axios
      .get(
        "http://localhost:3000/api/jobs/societe/" +
          jwtDecode(localStorage.getItem("token")).id
      )
      .then((res) => {
        setJobs(res.data.jobs);
      });
  }, []);
  console.log(jobs);
  return (
    <div className="bggrey">
      <div className="container">
        <div className="d-flex flex-column bd-highlight minhei">
          <div className="p-2 bd-highlight">
            {jobs.length > 0 ? (
              jobs.map((job) => <JobCard key={job._id} job={job} />)
            ) : (
              <p className="text-center">Aucun résultat trouvé.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyjobsCompany;
