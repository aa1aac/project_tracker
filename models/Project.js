const mongoose = require("mongoose");

const Work = require("./Work");

const { Schema } = mongoose;

const ProjectSchema = new Schema(
  {
    _creator: { type: Schema.Types.ObjectId, required: true, ref: "user" },
    title: { type: String, required: true },
    tag: { type: String, required: true },
    completed: { type: Boolean, required: true, default: false },
    description: { type: String, required: true },
    works: [{ type: Schema.Types.ObjectId, required: true, ref: "work" }],
    toBeCompleted: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

ProjectSchema.pre("remove", (next) => {
  Work.deleteMany({ _project: { $in: this.works } }).exec();

  next();
});

module.exports = mongoose.model("project", ProjectSchema);
