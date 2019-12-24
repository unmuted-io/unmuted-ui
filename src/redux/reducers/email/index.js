// import external modules
import { combineReducers } from "redux";
// import internal(own) modules
import emails from "./emails";
import visibilityFilter from "./visibilityFilter";
import selectedEmail from "./selectedEmail";
import emailSearch from "./emailSearch";
import emailContent from "./emailContent";
import emailBody from "./emailBody";

const emailReducer = combineReducers({
  emails,
  visibilityFilter,
  selectedEmail,
  emailSearch,
  emailContent,
  emailBody
});

export default emailReducer;
