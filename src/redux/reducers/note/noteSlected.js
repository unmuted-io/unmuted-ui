const noteSelected = (state = [], action) => {
  switch (action.type) {
    case "NOTE_SELECT":
      return action.id - 1;
    default:
      return state;
  }
};

export default noteSelected;
