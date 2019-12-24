import todoData from "./todoData";

const TodoModal = (state = todoData.todoModaData, action) => {
  switch (action.type) {
    case "Add_TODO_MODAL":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: action.completed
        }
      ];
    case "COMPLETE_TOD_MODAL":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE_TODO_MODAL":
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

export default TodoModal;
