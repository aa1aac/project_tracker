const mongoose = require("mongoose");

const { Schema } = mongoose;

let userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, sparse: true },
    password: { type: String },
    projects: [{ type: Schema.Types.ObjectId, ref: "project" }],
    githubId: { type: String, sparse: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
