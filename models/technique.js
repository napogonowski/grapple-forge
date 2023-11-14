const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TechniqueSchema = new Schema(
  {
    name: { type: String, required: true },
    classification: { type: String },
    notes: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Technique", TechniqueSchema);
