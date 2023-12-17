// import requestReducer from "./request";
import requestReducer from "../ducks/notes/reducers";
import userReducer from "../ducks/users/reducers";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  requestRe: requestReducer,
  userReducer: userReducer

});

export default allReducers;