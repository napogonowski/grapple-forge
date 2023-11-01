const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SessionSchema = new Schema(
  {
    classType: { type: String, required: true },
    date: { type: Date, required: true },
    technique: { type: String, required: true },
    notes: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    // rating ?
    // hour progression?
    // session number ?
    // rolls
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Session", SessionSchema);
