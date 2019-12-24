const chatContentBox = (state = false, action) => {
  switch (action.type) {
    case "OPEN_CHAT_BOX":
      return !state;
    default:
      return state;
  }
};

export default chatContentBox;
