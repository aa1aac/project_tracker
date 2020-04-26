import axios from "axios";
import { toast } from "react-toastify";

import { GET_PROJECTS, GET_MORE_PROJECTS } from "../../types";

export const getProjects = (skip) => async (dispatch) => {
  try {
    let res = await axios.get(`/api/project/${skip}`);

    dispatch({ type: GET_PROJECTS, payload: res.data.projects });
  } catch (error) {
    console.error(error);
    toast.error("some error occured fetching projects");
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`/api/project/remove/${id}`);

    toast.info(res.data.msg);
  } catch (error) {
    toast.error("some error occured deleting project");
  }
};

export const getMoreProjects = (skip) => async (dispatch) => {
  try {
    let res = await axios.get(`/api/project/${skip}`);

    dispatch({ type: GET_MORE_PROJECTS, payload: res.data.projects });
  } catch (error) {
    toast.error("unable to fetch more projects");
  }
};

export const addProject = ({
  title,
  tag,
  description,
  toBeCompleted,
}) => async (dispatch) => {
  try {
    let res = await axios.post("/api/project/add", {
      title,
      tag,
      description,
      toBeCompleted,
    });

    toast.info(res.data.msg);
  } catch (error) {
    console.error(error);
    toast.error("some error occured adding project");
    throw new Error("unable to save");
  }
};
