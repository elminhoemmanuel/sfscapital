import {  SET_NAME } from "../types";


const initialState = {
  personName:'Abobo'
};

export const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        personName:action.payload
      };
    default:
      return state;
  }
};