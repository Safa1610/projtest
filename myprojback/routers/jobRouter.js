const { Router } = require("express");
const {
  applyForAjob,
  fetchCandidates,
  fetchUserApplications,
  GetAllJob,
  AddJob,
  getjobByid,
  GetAlljobsPerCompany,
  updateStatut,
} = require("../controllers/jobController");

const jobRouter = Router();

jobRouter.get("/available", GetAllJob);
jobRouter.post("/add", AddJob);
jobRouter.get("/:id", getjobByid);
jobRouter.post("/apply/:jobId", applyForAjob);
jobRouter.get("/candidates/:id", fetchCandidates);
jobRouter.get("/candidat/:userid", fetchUserApplications);
jobRouter.get("/societe/:id", GetAlljobsPerCompany);
jobRouter.put("/:id", updateStatut);

module.exports = jobRouter;
