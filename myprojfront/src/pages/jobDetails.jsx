import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const JobDetails = () => {
  const [job, setjob] = useState({});
  const role = localStorage.getItem("role");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/jobs/" + id)
      .then((res) => setjob(res.data.thejob));
  }, [id]);
  console.log(job);
  const token = localStorage.getItem("token");
  if (!job) {
    return (
      <div className="container py-5 text-center">
        <h2>Offre non trouvée</h2>
        <Link to="/" className="btn btn-secondary mt-3">
          Retour aux offres
        </Link>
      </div>
    );
  }
  return (
    <div className="bggrey">
      <div className="container">
        <div className=" py-5">
          <Link
            to="/offres"
            className="greencolor"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              margin: "10px",
            }}
          >
            ⬅ Retour aux offres
          </Link>
          <div className="card p-4">
            <h2 className="fw-bold">{job.titre}</h2>
            <p>
              <strong>Société:</strong> {job?.societe?.nom}
            </p>
            <p>
              <strong>Adresse:</strong> {job.adresse}
            </p>
            <p>
              <strong>Description:</strong> {job.description}
            </p>

            {role === "company" ? (
              <></>
            ) : token ? (
              <Link className="btn btn-primary mt-3">Postuler</Link>
            ) : (
              <Link className="btn btn-primary mt-3" to="/login">
                Postuler
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobDetails;
