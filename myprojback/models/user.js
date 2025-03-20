// import mongoose
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    prenom: { type: String, required: true },
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    DateNaiss: { type: Date, required: true },
    tel: { type: String },
    liencv: { type: String },
    Etat: { type: Boolean, default: 1 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
