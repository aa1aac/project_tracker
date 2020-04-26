import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = (props) => {
  const {
    _id,
    completed,
    createdAt,
    description,
    tag,
    title,
    toBeCompleted,
  } = props.project;

  return (
    <div>
      <div
        className="card bg-primary text-white"
        style={{ width: "19rem", margin: "1rem" }}
      >
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <span className="badge badge-info"># {tag} </span>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush text-dark">
          <li className="list-group-item">
            <strong>{completed ? "completed" : "incomplete"} </strong>
          </li>
          <li className="list-group-item">
            {" "}
            <strong>
              createdAt :
              <br />
            </strong>{" "}
            {new Date(createdAt).toDateString()}
          </li>
          <li className="list-group-item">
            <strong>
              {" "}
              To be completed on :
              <br />
            </strong>{" "}
            {new Date(toBeCompleted).toDateString()}
          </li>
        </ul>
        <div className="card-body link-white">
          <Link to={`/project/${_id}`} className="card-link text-white">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
