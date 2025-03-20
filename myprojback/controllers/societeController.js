const company = require("../models/societe");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// creation de societe
// localhost:3000/api/company (post)
async function createCompany(req, res) {
  try {
    const {
      nom,
      description,
      password,
      email,
      siteweb,
      activite,
      taille,
      adresse,
      ville,
    } = req.body;

    const existantCompany = await company.findOne({ email: email });
    if (existantCompany)
      return res.status(400).json({ message: `Email existe déjà` });

    const newCompany = new company({
      nom,
      description,
      email,
      siteweb,
      activite,
      taille,
      adresse,
      ville,
      creele,
      password: bcrypt.hashSync(password, 10),
    });

    await newCompany.save();
    return res.status(201).json({ message: `Société ajoutée avec succès` });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `une erreur s'est produite ${err.message}` });
  }
}

// update company by id
// localhost:3000/api/company/:id (put)
async function updateCompany(req, res) {
  const { id } = req.params;
  const { nom, siteweb, activite, taille, creele } = req.body;
  await company.findByIdAndUpdate(id, {
    $set: { nom, siteweb, activite, taille, creele },
  });
  return res.status(200).json({ message: "Société modifiée" });
}

// Effacer societe by id
// localhost:3000/api/company/:id (delete)
async function deleteCompanyById(req, res) {
  const { id } = req.params;
  await user.findByIdAndDelete(id);
  return res.status(200).json({ message: "Société supprimé" });
}

// get all companies
// localhost:3000/api/companies/all (get)
async function getAllCompanies(req, res) {
  const allcompanies = await company.find();
  return res.status(200).json(allcompanies);
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const existantCompany = await company.findOne({
      email: email.toLowerCase(),
    });
    if (!existantCompany)
      return res.status(404).json({ message: `Société non trouvée` });

    const comparedPassword = bcrypt.compareSync(
      password,
      existantCompany.password
    );

    if (!comparedPassword)
      return res.status(400).json({ message: `invalid crendentials` });

    const token = jwt.sign(
      { id: existantCompany._id, role: "company" },
      process.env.JWT_PRIVATEKEY,
      { expiresIn: "7d" }
    );

    return res.status(200).json({ token });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `une erreur s'est produite ${err.message}` });
  }
}

async function fetchCompany(req, res) {
  try {
    const { id } = req.params;
    const exitantCompany = await company.findById(id).select("-password");
    if (!exitantCompany) return res.status(404).json({ message: `ID erroné` });
    return res.status(200).json(exitantCompany);
  } catch (err) {
    return res
      .status(500)
      .json({ message: `une erreur s'est produite  ${err.message}` });
  }
}
module.exports = {
  createCompany,
  updateCompany,
  deleteCompanyById,
  getAllCompanies,
  login,
  fetchCompany,
};
