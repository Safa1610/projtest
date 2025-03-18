import React, { useEffect, useState } from "react";
import JobCard from "./jobCard";
import jobs from "../jobs";
import { useLocation } from "react-router-dom";

export const JobList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialSearchTerm = queryParams.get("search") || "";

  // État pour stocker le terme de recherche
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  useEffect(() => {
    setSearchTerm(initialSearchTerm);
  }, [initialSearchTerm]);

  // Filtrer les jobs en fonction du titre
  const filteredJobs = jobs.filter((job) =>
    job.titre.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="bggrey">
      <div className="container">
        <div className="d-flex flex-column bd-highlight minhei">
          <div className="p-2 bd-highlight">
            {/* Champ de recherche */}
            <input
              type="text"
              placeholder="Rechercher un job..."
              className="form-control w-50 mx-auto mb-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Affichage des jobs filtrés */}
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
              <p className="text-center">Aucun résultat trouvé.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
