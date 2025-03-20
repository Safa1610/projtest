// import mongoose
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    titre: { type: String, required: true },
    description: { type: String },
    societe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Societe",
      required: true,
    },
    adresse: { type: String },
    statut: { type: String, default: "in progress" },
    datepost: { type: Date, default: Date.now },
    candidatures: [
      {
        candidature: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
          required: true,
        },
        postedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("job", jobSchema);
