import React from "react";
import { Media } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ChatListItem = ({ onClick, contactName, chatExcerpt, unread, thumb }) => (
  <Media className="userlist-box" onClick={onClick}>
    <Link to="#" className="media-left">
      <Media
        object
        src={thumb}
        alt="Generic placeholder image"
        className="media-object img-radius"
      />
      {unread ? <div className="live-status">{unread}</div> : null}
    </Link>
    <Media body>
      <h6 className="chat-header">
        {contactName}
        {chatExcerpt === "online" ? (
          <small className="d-block text-c-green">online</small>
        ) : (
          <small className="d-block text-muted">{chatExcerpt}</small>
        )}
      </h6>
    </Media>
  </Media>
);

ChatListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  contactName: PropTypes.string.isRequired,
  chatExcerpt: PropTypes.string.isRequired
};

export default ChatListItem;
