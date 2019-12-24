import { combineReducers } from "redux";
import notes from "./note";
import noteSelected from "./noteSlected";

const noteReducer = combineReducers({
  notes,
  noteSelected
});
export default noteReducer;
