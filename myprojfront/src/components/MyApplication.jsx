import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import JobCard from "./jobCard";
import Application from "../pages/Application";
import ApplicationCard from "./ApplicationCard";

const MyApplication = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:3000/api/jobs/candidat/" +
          jwtDecode(localStorage.getItem("token")).id
      )
      .then((res) => {
        setJobs(res.data.application);
      });
  }, []);
  return (
    <div className="bggrey">
      <div className="container">
        <div className="d-flex flex-column bd-highlight minhei">
          <div className="p-2 bd-highlight">
            {jobs.length > 0 ? (
              jobs.map((job) => <ApplicationCard key={job._id} job={job} />)
            ) : (
              <p className="text-center">Aucun résultat trouvé.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyApplication;
