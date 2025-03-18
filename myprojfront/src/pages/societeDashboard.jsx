import React from "react";
import { Link } from "react-router-dom";

const SocieteDashboard = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">Tableau de bord recruteur</h2>
      <ul className="mt-4">
        <li>
          <Link to="/manage-jobs">Gestion des offres d’emploi</Link>
        </li>
        <li>
          <Link to="/candidates">Liste des candidats</Link>
        </li>
        <li>
          <Link to="/stats">Statistiques des offres</Link>
        </li>
      </ul>
    </div>
  );
};

export default SocieteDashboard;
