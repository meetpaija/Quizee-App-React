import userState from "../common/initialState";
import {
  FETCH_USERS_FULFILLED,
  FETCH_USERS_REJECTED,
} from "../actions/actionTypes";

export default function fetchingUsers(state = userState, action) {
  switch (action.type) {
    case FETCH_USERS_FULFILLED:
      console.log("In reducer : data" + action.payload.data);
      //   let userIds = [...action.payload.data].map((user) => user.id);
      //   console.log("In reducer : userIds" + userIds);
      //   let users = [...action.payload.data];
      //   console.log("In reducer : users" + users);
      //   state.users = users;

      //   let _state = [...action.payload.data].map(
      //     obj => _state[obj.id] = Object.assign({}, obj)
      //   )
      //   state.users = _state;
      return { ...state, users : action.payload.data };

    case FETCH_USERS_REJECTED:
      return state;

    default:
      return state;
  }
}
