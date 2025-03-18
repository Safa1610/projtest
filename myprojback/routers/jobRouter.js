const { Router } = require("express");
const {
  applyForAjob,
  fetchCandidates,
  fetchUserApplications,
} = require("../controllers/jobController");

const jobRouter = Router();

jobRouter.post("/apply/:jobId", applyForAjob);
jobRouter.get("/candidates/:id", fetchCandidates);
jobRouter.get("/candidat/:userid", fetchUserApplications);

module.exports = jobRouter;
