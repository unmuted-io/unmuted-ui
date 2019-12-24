import { combineReducers } from "redux";
import TodoCard from "./todoCard";
import TodoList from "./todoList";
import TodoModal from "./todoModal";

const todoReducer = combineReducers({
  TodoCard,
  TodoList,
  TodoModal
});
export default todoReducer;
