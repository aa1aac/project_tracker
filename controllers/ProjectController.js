const Project = require("../models/Project");
const Work = require("../models/Work");

const getProjects = async (req, res) => {
  let skip = +req.params.skip || 0;

  try {
    let projects = await Project.find(
      { _creator: req.user._id },
      "-_creator -works"
    )
      .limit(5)
      .skip(skip);

    if (!projects)
      return res.status(200).json({ status: false, projects: null });

    return res.status(200).json({ status: true, projects });
  } catch (error) {
    console.error(erorr);
    return res
      .status(500)
      .json({ status: false, erorrs: ["some error occured"] });
  }
};

const getSpecificProject = async (req, res) => {
  try {
    let project = await Project.findOne({
      _id: req.params.id,
      _creator: req.user._id,
    }).populate("works");

    if (!project)
      return res
        .status(404)
        .json({ status: false, errors: ["the project does not exist"] });

    return res
      .status(200)
      .json({ status: true, project, msg: "project fetched" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: false, errors: "some error occured" });
  }
};

const addProject = async (req, res) => {
  let { title, tag, description, toBeCompleted } = req.body;
  try {
    let project = new Project({
      title,
      tag,
      description,
      toBeCompleted,
      _creator: req.user._id,
    });

    await project.save();

    return res.status(200).json({ msg: "project saved", status: true });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: false, errors: ["some error occured"] });
  }
};

const removeProject = async (req, res) => {
  try {
    await Project.findByIdAndRemove(req.params.id);

    return res.status(200).json({ status: true, msg: "deleted the project" });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, erorrs: ["some error occured"] });
  }
};

const editProject = async (req, res) => {
  let { title, tag, description, toBeCompleted, completed } = req.body;

  try {
    let project = Project.findOneAndUpdate(
      {
        _id: req.params.id,
        _creator: req.user._id,
      },
      {
        $set: { title, tag, description, toBeCompleted, completed },
      },
      { returnOriginal: false }
    ).exec();

    if (!project)
      return res
        .status(403)
        .json({ errors: ["invalid request"], status: false });

    console.log(project);

    return res.status(200).json({ status: true, msg: "project edited" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: false, errors: ["some error occured"] });
  }
};

const addWork = async (req, res) => {
  try {
    let project = await Project.findOne({
      _id: req.params.id,
      _creator: req.user._id,
    });

    if (!project)
      return res
        .status(422)
        .json({ status: false, errors: ["no such project found"] });

    let { description, flag } = req.body;

    let work = new Work({ description, flag, _project: req.params.id });

    await work.save();

    await project.works.push(work._id);

    await project.save();

    return res.json({ status: true, msg: "saved the project successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(503)
      .json({ status: false, errors: ["some error occured"] });
  }
};

const deleteWork = async (req, res) => {
  let { projectId, workId } = req.params;

  try {
    let project = await Project.findOne({
      _id: projectId,
      _creator: req.user._id,
    });

    if (!project)
      return res
        .status(422)
        .json({ errors: ["no such project exist"], status: false });

    let work = await Work.findByIdAndDelete(workId);

    project.works = project.works.filter((workId) => workId !== work._id);

    await project.save();

    return res.status(200).json({ msg: "deleted work", status: true });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, errors: ["some error occured"] });
  }
};

module.exports = {
  getProjects,
  getSpecificProject,
  addProject,
  removeProject,
  editProject,
  addWork,
  deleteWork,
};
