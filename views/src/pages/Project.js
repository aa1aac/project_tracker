import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal, Button } from "react-bootstrap";

const Project = (props) => {
  const [project, setProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getProject();
  }, [props.match.params.id]);

  if (project) {
    document.title = project.title + "| Project";
  }

  const OnDeletePressModal = () => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure that you want to delete {project.title} Project
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Yes! delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  console.log(project);
  const getProject = async () => {
    try {
      let res = await axios.get(
        `/api/project/specific/${props.match.params.id}`
      );

      setProject(res.data.project);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.errors[0]);
      console.log(error.response.satus);
    }
  };

  return (
    <div className="container">
      {project ? (
        <div className="project">
          <h3>
            {project.title}{" "}
            <span className="badge badge-info">#{project.tag}</span>
          </h3>
          <p className="lead">{project.description}</p>
          <p>
            <strong>Completed : </strong> {project.completed ? "yes" : "no"}{" "}
          </p>
          <p>
            {" "}
            <strong>Created at : </strong>{" "}
            {new Date(project.createdAt).toDateString()}
          </p>
          <p>
            {" "}
            <strong>Deadline : </strong>
            {new Date(project.toBeCompleted).toDateString()}
          </p>
          <p>
            {" "}
            <strong>Works : </strong> {project.works.length}
          </p>
          <button className="btn btn-primary"> Edit Project</button>{" "}
          <button className="btn btn-danger" onClick={() => setShowModal(true)}>
            {" "}
            Delete Project
          </button>
          <button className="btn btn-primary">Add work</button>
          <OnDeletePressModal />
        </div>
      ) : null}
    </div>
  );
};

export default Project;
