import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import basicReducer from './basicReducer';
import userReducer from './userReducer'
import todoReducer from './todoReducer'
export const reducers = (history) => combineReducers({
  router: connectRouter(history),
  basic: basicReducer,
  user: userReducer,
  todos: todoReducer
});
