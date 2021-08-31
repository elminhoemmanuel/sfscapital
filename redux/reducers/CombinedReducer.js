import { combineReducers } from 'redux'
import { nameReducer } from './name';
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
  key: 'root',
  storage,
  whitelist:['service','power','data','tv', 'auth', 'adept', 'airtime', 'dashboard']
}

const rootReducer = combineReducers({
    name: nameReducer,
});

export default persistReducer(persistConfig, rootReducer);