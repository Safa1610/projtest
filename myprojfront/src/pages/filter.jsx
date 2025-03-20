import React, { useState } from "react";

const Filter = ({ jobs, setFiltered }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = () => {
    const filteredJobs = jobs.filter((job) =>
      job.titre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(filteredJobs);
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Rechercher un job..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleFilter}>Filtrer</button>
      <button onClick={() => setFiltered(jobs)}>Réinitialiser</button>
    </div>
  );
};

export default Filter;
