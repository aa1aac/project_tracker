import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const EditProject = (props) => {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [toBeCompleted, setToBeCompleted] = useState("");
  const [completed, setCompleted] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    getProject();
  }, [props.match.params.id]);

  const getProject = async () => {
    try {
      let res = await axios.get(
        `/api/project/specific/${props.match.params.id}`
      );
      let {
        title,
        tag,
        description,
        toBeCompleted,
        completed,
      } = res.data.project;
      setTitle(title);
      setTag(tag);
      setDescription(description);
      setToBeCompleted(Date.parse(toBeCompleted));
      setCompleted(completed);
    } catch (error) {
      console.error(error);
      toast.error("some error occured");
      setError(true);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (title && tag && description && toBeCompleted && completed) {
      try {
        let res = await axios.put(
          `/api/project/edit/${props.match.params.id}`,
          { tag, description, title, toBeCompleted, completed }
        );

        toast.info(res.data.msg);

        props.history.push(`/project/${props.match.params.id}`);
      } catch (error) {
        console.error(error);
        toast.error(error.response.data.errors[0]);
      }
    }
  };
  return (
    <div className="container">
      {!error ? (
        <form className="addProjectForm " onSubmit={onSubmit}>
          <h3>Edit project Form</h3>
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
            <label htmlFor="tag">is Complete</label>
            <select
              required
              className="form-control "
              id="tag"
              value={completed}
              onChange={(e) => setCompleted(e.target.value)}
            >
              <option disabled></option>
              <option value={false}>no</option>
              <option value={true}>yes</option>
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
            <button className="btn btn-primary btn-block">Edit</button>
          </div>
        </form>
      ) : (
        <div className="h2"> Some error occured </div>
      )}
    </div>
  );
};

export default EditProject;
