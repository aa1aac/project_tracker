const mongoose = require("mongoose");

const { Schema } = mongoose;

let userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    projects: [{ type: Schema.Types.ObjectId, ref: "project" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
