export const openChat = id => ({
  type: "OPEN_CHAT",
  id,
})

export const chatSearch = searchTerm => ({
  type: "FILTER_CHAT",
  searchTerm,
})
export const chatBox = () => ({
  type: "OPEN_CHAT_BOX",
})

export const sendMsg = (id, chatMsg) => ({
  type: "SEND_MSG",
  id,
  chatMsg,
})

export const openChatBox = () => dispatch =>
  dispatch({
    type: "OPEN_CHAT_BOX_HEADER",
  })
