import { combineReducers } from 'redux'
import {  persistReducer } from 'redux-persist'
import { homeReducer } from "./home"
import storage from 'redux-persist/lib/storage'



const persistConfig = {
  key: 'root',
  storage,
  whitelist:[]
}

const rootReducer = combineReducers({
    home:homeReducer,
});

export default persistReducer(persistConfig, rootReducer);