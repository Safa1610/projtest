import { useParams, Link } from "react-router-dom";

const JobDetails = ({ jobs }) => {
  const { id } = useParams();
  const job = jobs.find((m) => m.id.toString() === id);
  const token = sessionStorage.getItem("token");
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
            <h2 className="fw-bold">
              {job.titre} {job.id}
            </h2>
            <p>
              <strong>Société:</strong> ExampleCorp
            </p>
            <p>
              <strong>Adresse:</strong> Remote
            </p>
            <p>
              <strong>Description:</strong> This is a great job opportunity for
              talented developers.
            </p>
            <p>
              <strong>Requirements:</strong>
            </p>
            <ul>
              <li>Experience with React and Bootstrap</li>
              <li>Strong problem-solving skills</li>
              <li>Team collaboration</li>
            </ul>
            {token ? (
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
