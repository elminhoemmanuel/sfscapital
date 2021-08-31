import {  SET_TAB, START_FETCH, STOP_FETCH, SET_PHOTOS, SET_ERROR } from "../types";


const initialState = {
  activeTab:'any pictures',
  loading:false,
  photosObj:{},
  photos:[],
  error:""
};

export const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAB:
      return {
        ...state,
        activeTab:action.payload
      };
    case SET_PHOTOS:
      return {
        ...state,
        photosObj:action.payload,
        photos:action.payload.photos
      };
    case SET_ERROR:
      return {
        ...state,
        error:"Something went wrong please try again!"
      };
    case START_FETCH:
      return {
        ...state,
        loading:true
      };
    case STOP_FETCH:
      return {
        ...state,
        loading:false
      };
    default:
      return state;
  }
};