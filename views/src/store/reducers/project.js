import { GET_PROJECTS, GET_MORE_PROJECTS } from "../types";

let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      console.log(action.payload);
      return action.payload;
    case GET_MORE_PROJECTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
