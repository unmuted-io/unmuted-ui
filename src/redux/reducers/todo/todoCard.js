import todoData from "./todoData";

const TodoCard = (state = todoData.todoCardData, action) => {
  switch (action.type) {
    case "Add_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: action.completed
        }
      ];
    case "COMPLETE_TOD":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE_TODO":
      return (state = []);
    default:
      return state;
  }
};

export default TodoCard;
