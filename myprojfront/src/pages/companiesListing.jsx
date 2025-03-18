import React, { useState } from "react";

const CompaniesListing = () => {
  const [companies] = useState([
    { id: 1, name: "Entreprise A", description: "Société spécialisée en tech" },
    { id: 2, name: "Entreprise B", description: "Agence marketing créative" },
  ]);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">Entreprises partenaires</h2>
      <ul className="mt-4">
        {companies.map((company) => (
          <li key={company.id} className="border p-3 mt-2">
            <h3 className="font-bold">{company.name}</h3>
            <p>{company.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompaniesListing;
