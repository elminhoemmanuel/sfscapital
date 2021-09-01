import { SET_PAGE, SET_QUERY, START_FETCH, STOP_FETCH , SET_PHOTOS, SET_ERROR } from "../types";
import axios from 'axios'

//action to set active page
export const setPage = (page, cb) => (dispatch) => {
    dispatch({ type: SET_PAGE, payload: page })
}

//action to set active page
export const setQuery = (query, cb) => (dispatch) => {
    dispatch({ type: SET_QUERY, payload: query })
}

//action to fetch pictures for each search parameter
export const fetchSearchPictures = (data, cb) => (dispatch) => {

    dispatch({ type: START_FETCH })

    axios.get(`https://api.pexels.com/v1/search?query=${data.queryField}&page=1&per_page=16`,
        {
            headers: {
                'Authorization': `563492ad6f9170000100000105a12733356e4d7ba44d5a9ad8277542`
            }
        }
    )
        .then((response) => {
            // console.log(response);
            dispatch({ type: SET_PHOTOS, payload:response.data })
            dispatch({ type: STOP_FETCH })
        }, (error) => {
            // console.log(error);
            dispatch({ type: SET_ERROR })
            dispatch({ type: STOP_FETCH })
        });

}








