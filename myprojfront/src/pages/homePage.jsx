import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import jobs from "../jobs";
import FeaturedOffer from "../components/featuredOffer";
import JobList from "../components/jobList";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/offres?search=${searchTerm}`);
    }
  };
  return (
    <>
      {/* <HeaderFirst /> */}
      <header
        className="text-center text-white d-flex align-items-center justify-content-center vh-100"
        style={{
          backgroundImage: "url(/bannerjob.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maxHeight: "420px",
        }}
      >
        <div className="container">
          <h1 className="fw-bold animate__animated animate__fadeInDown">
            Transformez votre passion en carrière
          </h1>
          <p className="lead animate__animated animate__fadeInUp animate__delay-1s">
            Parcourez nos offres d'emploi et démarrez votre carrière dès
            aujourd'hui.
          </p>

          <input
            type="text"
            placeholder="Rechercher un job..."
            className="form-control w-50 mx-auto mt-3 animate__animated animate__fadeInUp animate__delay-2s"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>
      </header>
      <div className="container mt-5">
        <section className="mt-5">
          <h2 className="text-center fw-bold greencolor">
            Dernières Offres d'emploi
          </h2>
          <div className="row mt-4">
            {jobs.map((job, index) => (
              <FeaturedOffer key={index} job={job} />
            ))}
          </div>
        </section>
      </div>
      <section className="mt-5 text-center bggrey">
        <div className="container mt-5 py-3">
          <h2 className="fw-bold">Pourquoi Nous Choisir ?</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card p-3">
                <h3 className="fw-semibold">Meilleures entreprises</h3>
                <p>Travaillez avec les meilleures entreprises du secteur.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <h3 className="fw-semibold">Applications faciles</h3>
                <p>Postulez à des emplois en quelques clics.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <h3 className="fw-semibold">Évolution de carrière</h3>
                <p>
                  Trouvez des emplois qui correspondent à vos compétences et à
                  votre cheminement de carrière.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
