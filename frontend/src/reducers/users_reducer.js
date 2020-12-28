import { RECEIVE_USER } from "../actions/user_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
   
    case RECEIVE_USER:
      return { ...state, [action.user.data._id]: action.user.data };
    default:
      return state;
  }
};
