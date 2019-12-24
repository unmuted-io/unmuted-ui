import React from "react";
// import PropTypes from 'prop-types'
import Chat from "./chatListItem";

import PropTypes from "prop-types";

const ChatList = ({ chats, openChat }) => (
  <div className="main-friend-list">
    {chats.map(chat => (
      <Chat
        key={chat.id}
        {...chat}
        onClick={() => openChat(chat.id)}
        thumb={chat.thumb}
        contactName={chat.name}
        chatExcerpt={chat.excerpt}
      />
    ))}
  </div>
);

ChatList.propTypes = {
  chats: PropTypes.array.isRequired,
  openChat: PropTypes.func.isRequired
};
export default ChatList;
