const mongoose = require("mongoose");

const Work = require("./Work");

const { Schema } = mongoose;

const ProjectSchema = new Schema(
  {
    _creator: { type: Schema.Types.ObjectId, required: true },
    title: { type: Text, required: true },
    tag: { type: Text, required: true },
    completed: { type: Boolean, required: true },
    description: { type: Text, required: true },
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
