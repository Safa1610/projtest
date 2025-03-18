// import mongoose
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    titre: { type: String, required: true },
    description: { type: String },
    societe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "societe",
      required: true,
    },
    adresse: { type: String },
    statut: { type: String }, //disponible ou pas
    datepost: { type: Date, default: Date.now },
    candidatures: [
      {
        candidature: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
          required: true,
        },
        postedAt: {
          type: date,
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
