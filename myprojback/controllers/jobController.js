const job = require("../models/job.js");
const user = require("../models/user.js");

// find job by id
async function applyForAjob(req, res) {
  try {
    const { jobId } = req.params;
    const { userId } = req.body;

    const existantuser = await user.findById(userId);
    if (!existantuser)
      return res.status(404).json({ message: `utilisateur non trouvé` });

    const existantJob = await user.findById(jobId);
    if (!existantJob)
      return res.status(404).json({ message: `job non trouvé` });
    const alreadyApplied = existantJob.candidates.some(
      (candidate) => candidate.candidate.tostring() === userId
    );
    if (alreadyApplied)
      return res
        .status(400)
        .json({ message: `Vous avez déjà postuler pour ce travail` });

    existantJob.candidate.push({ candidate: userId });
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
    const existantjob = await job.findById(id);
    if (!existantjob) return res.status(404).json({ message: "wrong id" });
    return res.status(200).json(existantjob.candidates);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
async function fetchUserApplications(req, res) {
  try {
    const { userid } = req.params;
    const applications = await job
      .find({ "candidates.candidate": userid })
      .populate("company", "name email website city");

    return res.status(200).jsobn({ application: applications });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `une erreur s'est produite ${err.message}` });
  }
}

module.exports = { applyForAjob, fetchCandidates, fetchUserApplications };
