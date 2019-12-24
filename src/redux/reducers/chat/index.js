// import external modules
import { combineReducers } from "redux"
// import internal(own) modules
import chats from "./chats"
import chatSearch from "./chatSearch"
import chatContent from "./chatContent"
import chatContextBox from "./chatContextBox"
import chatBox from "./chatBoxHeader"

const chatReducer = combineReducers({
  chats,
  chatSearch,
  chatContent,
  chatContextBox,
  chatBox,
})

export default chatReducer
