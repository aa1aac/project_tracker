import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addProject } from "../store/actions/project/project";

const AddProject = (props) => {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [toBeCompleted, setToBeCompleted] = useState("");

  useEffect(() => {
    document.title = "Add Project | Tracker";
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    if (title && tag && description && toBeCompleted) {
      props
        .addProject({ title, tag, description, toBeCompleted })
        .then(() => {
          props.history.push("/");
        })
        .catch((error) => console.error(error));
    }
  };
  return (
    <div className="container">
      <form className="addProjectForm " onSubmit={onSubmit}>
        <h3>Add Project</h3>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            type="text"
            className="form-control "
            id="title"
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="tag">Tag</label>
          <select
            required
            className="form-control "
            id="tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            <option disabled></option>
            <option value="urgent">urgent</option>
            <option value="not urgent">not urgent</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">description</label>
          <textarea
            required
            className="form-control "
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="toBeCompleted">to Be Completed on</label>
          <input
            required
            className="form-control"
            id="toBeCompleted"
            type="date"
            value={toBeCompleted}
            onChange={(e) => setToBeCompleted(e.target.value)}
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-block">Add</button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { addProject })(withRouter(AddProject));
