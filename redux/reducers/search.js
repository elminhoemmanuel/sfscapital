import { SET_PAGE, SET_QUERY, START_FETCH, STOP_FETCH, SET_PHOTOS, SET_ERROR } from "../types";


const initialState = {
  page: '',
  queryValue: '',
  loading: false,
  photosObj: {},
  photos: [],
  error: ""
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.payload
      };
    case SET_QUERY:
      return {
        ...state,
        queryValue: action.payload
      };

    case SET_PHOTOS:
      return {
        ...state,
        photosObj: action.payload,
        photos: action.payload.photos
      };
    case SET_ERROR:
      return {
        ...state,
        error: "Something went wrong please try again!"
      };
    case START_FETCH:
      return {
        ...state,
        loading: true
      };
    case STOP_FETCH:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};