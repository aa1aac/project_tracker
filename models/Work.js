const mongoose = require("mongoose");

const { Schema } = mongoose;

const WorkSchema = new Schema(
  {
    _project: { type: Schema.Types.ObjectId, required: true },
    description: { type: String, required: true },
    flag: { type: String, required: true },
    completed: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("work", WorkSchema);
