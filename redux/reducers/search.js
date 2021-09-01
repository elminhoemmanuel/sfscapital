import {  SET_PAGE } from "../types";


const initialState = {
  page:''
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page:action.payload
      };
    
    default:
      return state;
  }
};