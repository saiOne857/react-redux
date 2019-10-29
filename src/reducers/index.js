import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import basicReducer from './basicReducer';
export const reducers = (history) => combineReducers({
  router: connectRouter(history),
  basic: basicReducer
});
