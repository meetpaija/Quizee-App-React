import { FETCH_USERS } from "./actionTypes";
import axios from "axios";

export const fetchUsers = () => {
    return dispatch => {
      dispatch({
        type: FETCH_USERS,
        payload: axios
          .get("http://localhost:8080/users/")
          .then(res => res.data)
      });
    };
  };