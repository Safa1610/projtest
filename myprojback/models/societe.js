// import mongoose
const mongoose = require("mongoose");

const societeSchema = new mongoose.Schema(
  {
    nom: { type: String, required: true },
    description: { type: String, required: true },
    password: { type: String },
    email: { type: String, required: true, unique: true },
    siteweb: { type: String },
    activite: { type: String, required: true },
    taille: { type: String, required: true },
    adresse: { type: String, required: true },
    ville: { type: String, required: true },
    creele: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Societe", societeSchema);
