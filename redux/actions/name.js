import { SET_NAME } from "../types";

export const setName = (name, cb) => (dispatch) => {
  
    dispatch({ type: SET_NAME, payload: name })
}







