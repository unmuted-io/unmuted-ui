import { combineReducers } from "redux"
import config from './templateConfig/'
import Navigation from './navigation/'
import todoReducer from "./todo/"
import Notes from "./note/"
import chatReducer from "./chat/"
import emailReducer from "./email/"
import Icons from "./icons/"
import videoReducer from './videoReducer'
import { authReducer as auth } from './authReducer'

const rootReducer = combineReducers({
  auth,
  config,
  videos: videoReducer,
  Navigation,
  todoApp: todoReducer,
  noteApp: Notes,
  chatApp: chatReducer,
  emailApp: emailReducer,
  Icons
})

export default rootReducer