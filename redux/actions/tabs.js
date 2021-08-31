import { SET_TAB, START_FETCH, STOP_FETCH , SET_PHOTOS, SET_ERROR } from "../types";
import axios from 'axios'

//action to set active tab
export const setTab = (tab, cb) => (dispatch) => {
    dispatch({ type: SET_TAB, payload: tab })
}

//action to fetch pictures for each tab
export const fetchTabPictures = (tab, cb) => (dispatch) => {

    dispatch({ type: START_FETCH })

    axios.get(`https://api.pexels.com/v1/search?query=${tab}&page=1&per_page=8`,
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







