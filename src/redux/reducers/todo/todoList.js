import todoData from "./todoData";

const TodoList = (state = todoData.todoListData, action) => {
  switch (action.type) {
    case "Add_TODO_LIST":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: action.completed
        }
      ];
    case "COMPLETE_TOD_LIST":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE_TODO_LIST":
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

export default TodoList;
