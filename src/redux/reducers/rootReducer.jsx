import { combineReducers } from "redux";
import config from './templateConfig/';
import Navigation from './navigation/';
import todoReducer from "./todo/";
import Notes from "./note/";
import chatReducer from "./chat/";
import emailReducer from "./email/";
import Icons from "./icons/";

const rootReducer = combineReducers({
  config,
  Navigation,
  todoApp: todoReducer,
  noteApp: Notes,
  chatApp: chatReducer,
  emailApp: emailReducer,
  Icons
});

export default rootReducer;