const job = require("../models/job.js");
const user = require("../models/user.js");

// find job by id
async function GetAllJob(req, res) {
  try {
    const jobs = await job
      .find({ statut: "in progress" })
      .populate("societe", "nom");
    return res.status(200).json({ jobs });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `une erreur s'est produite ${err.message}` });
  }
}

async function GetAlljobsPerCompany(req, res) {
  try {
    const { id } = req.params;
    const jobs = await job.find({ societe: id });
    return res.status(200).json({ jobs });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `une erreur s'est produite ${err.message}` });
  }
}
async function getjobByid(req, res) {
  try {
    const { id } = req.params;
    const thejob = await job.findById(id).populate("societe", "-password");
    return res.status(200).json({ thejob });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `une erreur s'est produite ${err.message}` });
  }
}
async function AddJob(req, res) {
  try {
    const { titre, description, adresse, societe } = req.body;
    const newJob = new job({ titre, description, adresse, societe });
    await newJob.save();
    return res.status(201).json({ message: "Saved" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `une erreur s'est produite ${err.message}` });
  }
}
async function applyForAjob(req, res) {
  try {
    const { jobId } = req.params;
    const { userId } = req.body;

    const existantuser = await user.findById(userId);
    if (!existantuser)
      return res.status(404).json({ message: `utilisateur non trouvé` });

    const existantJob = await job.findById(jobId);
    if (!existantJob)
      return res.status(404).json({ message: `job non trouvé` });
    const alreadyApplied = existantJob.candidatures.some((candidate) => {
      candidate.candidature.toString() === userId;
    });
    if (alreadyApplied)
      return res
        .status(400)
        .json({ message: `Vous avez déjà postuler pour ce travail` });

    existantJob.candidatures.push({ candidature: userId });
    await existantJob.save();
    return res.status(201).json({ message: `postule avec succès` });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `une erreur s'est produite ${err.message}` });
  }
}
async function fetchCandidates(req, res) {
  try {
    const { id } = req.params;
    const existantjob = await job
      .findById(id)
      .populate("candidatures.candidature", "-password");
    if (!existantjob) return res.status(404).json({ message: "wrong id" });
    return res.status(200).json(existantjob.candidatures);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
async function fetchUserApplications(req, res) {
  try {
    const { userid } = req.params;
    const applications = await job
      .find({ "candidatures.candidature": userid })
      .populate("societe", "nom email siteweb");

    return res.status(200).json({ application: applications });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `une erreur s'est produite ${err.message}` });
  }
}

async function updateStatut(req, res) {
  try {
    const { id } = req.params;
    const existantjob = await job.findByIdAndUpdate(id, {
      statut: "completed",
    });
    if (!existantjob) return res.status(404).json({ message: "wrong id" });
    return res.status(200).json({ message: "statut updated" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `une erreur s'est produite ${err.message}` });
  }
}
module.exports = {
  updateStatut,
  GetAllJob,
  GetAlljobsPerCompany,
  getjobByid,
  applyForAjob,
  fetchCandidates,
  fetchUserApplications,
  AddJob,
};
