const { Router } = require("express");
const {
  createCompany,
  updateCompany,
  deleteCompanyById,
  getAllCompanies,
  login,
  fetchCompany,
} = require("../controllers/societeController");

const companyRouter = Router();

companyRouter.post("/login", login);
companyRouter.post("/register", createCompany);
companyRouter.get("/:id", fetchCompany);
companyRouter.delete("/:id", deleteCompanyById);
companyRouter.put("/:id", updateCompany);
companyRouter.get("/all", getAllCompanies);

module.exports = companyRouter;
