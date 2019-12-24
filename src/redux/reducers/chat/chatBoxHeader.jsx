const chatContent = (state = false, action) => {
  switch (action.type) {
    case "OPEN_CHAT_BOX_HEADER":
      return !state;
    default:
      return state;
  }
};

export default chatContent;
