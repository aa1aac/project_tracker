import { USER_LOGOUT, USER_LOGIN, GET_USER } from "../types";

const initialState = {
  _id: null,
  email: null,
  name: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload;
    case USER_LOGOUT:
      return initialState;
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
};
