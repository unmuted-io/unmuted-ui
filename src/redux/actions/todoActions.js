export const addTodo = (id, text) => dispatch =>
  dispatch({
    type: "Add_TODO",
    id: ++id,
    text,
    completed: false
  });

export const completeTodo = id => dispatch =>
  dispatch({ type: "COMPLETE_TOD", id });

export const deleteTodo = () => dispatch => dispatch({ type: "DELETE_TODO" });

export const addTodoList = (id, text) => dispatch =>
  dispatch({
    type: "Add_TODO_LIST",
    id: ++id,
    text,
    completed: false
  });

export const completeTodoList = id => dispatch =>
  dispatch({ type: "COMPLETE_TOD_LIST", id });

export const deleteTodoList = id => dispatch =>
  dispatch({ type: "DELETE_TODO_LIST", id });

export const addTodoModal = (id, text) => dispatch =>
  dispatch({
    type: "Add_TODO_MODAL",
    id: ++id,
    text,
    completed: false
  });

export const completeTodoModal = id => dispatch =>
  dispatch({ type: "COMPLETE_TOD_MODAL", id });

export const deleteTodoModal = id => dispatch =>
  dispatch({ type: "DELETE_TODO_MODAL", id });
