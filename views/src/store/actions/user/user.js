import axios from "axios";
import { toast } from "react-toastify";

import { USER_LOGOUT, USER_LOGIN, GET_USER } from "../../types";

export const userLogin = ({ email, password }) => async (dispatch) => {
  if (email && password) {
    try {
      let res = await axios.post("/api/auth/login", { email, password });

      console.log(USER_LOGIN, res.data);

      dispatch({ type: USER_LOGIN, payload: res.data.user });
    } catch (error) {
      console.log(error.response.data.errors[0]);

      toast.error(error.response.data.errors[0]);
    }
  }
};

export const userLogout = () => async (dispatch) => {
  try {
    await axios.get("/api/auth/logout");

    dispatch({ type: USER_LOGOUT });
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.errors[0]);
  }
};

export const getUser = () => async (dispatch) => {
  try {
    let res = await axios.get("/api/auth/me");

    if (res.data.user && !!res.data.user._id) {
      dispatch({ type: GET_USER, payload: res.data.user });
    }
  } catch (error) {
    console.log(error);
  }
};
