import { SET_PAGE } from "../types";
import axios from 'axios'

//action to set active page
export const setPage = (page, cb) => (dispatch) => {
    dispatch({ type: SET_PAGE, payload: page })
}









