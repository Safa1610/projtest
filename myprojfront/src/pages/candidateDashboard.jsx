import React from "react";
import { Link } from "react-router-dom";

const CandidateDashboard = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">Tableau de bord candidat</h2>
      <ul className="mt-4">
        <li>
          <Link to="/applications">Suivi des candidatures</Link>
        </li>
        <li>
          <Link to="/saved-jobs">Emplois sauvegardés</Link>
        </li>
        <li>
          <Link to="/profile">Profil utilisateur</Link>
        </li>
      </ul>
    </div>
  );
};

export default CandidateDashboard;
