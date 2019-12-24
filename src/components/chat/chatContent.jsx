import React, { Component } from "react";
import { Media } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import UserImg from "../../assets/images/user/avatar-1.jpg";

class ChatContent extends Component {
  render() {
    let chatDetails = this.props.chatDetails;
    return (
      <div className="h-list-body">
        <PerfectScrollbar className="msg-user-chat scroll-div">
          <div className="main-friend-chat">
            {Object.keys(chatDetails.chatHistory).map(chat =>
              Object.keys(chatDetails.chatHistory[chat]).map(key =>
                Object.keys(chatDetails.chatHistory[chat][key]).map(k =>
                  k === "from" ? (
                    <Media className="chat-messages" key={k}>
                      <Link to="#" className="media-left photo-table">
                        <Media
                          object
                          src={chatDetails.thumb}
                          alt="Generic placeholder image"
                          className="media-object img-radius"
                        />
                      </Link>
                      <Media body className="chat-menu-content">
                        <div className="d-block">
                          {chatDetails.chatHistory[chat][key][k].map(v => (
                            <React.Fragment key={v}>
                              <p className="chat-cont">{v}</p>
                              <div className="clearfix" />
                            </React.Fragment>
                          ))}
                        </div>
                      </Media>
                    </Media>
                  ) : (
                    <Media className="chat-messages" key={k}>
                      <Media body className="chat-menu-reply">
                        <div className="d-block">
                          {chatDetails.chatHistory[chat][key][k].map(v => (
                            <React.Fragment key={v}>
                              <p className="chat-cont">{v}</p>
                              <div className="clearfix" />
                            </React.Fragment>
                          ))}
                        </div>
                      </Media>
                      <Link to="#" className="media-left photo-table">
                        <Media
                          object
                          src={UserImg}
                          alt="Generic placeholder image"
                          className="media-object img-radius"
                        />
                      </Link>
                    </Media>
                  )
                )
              )
            )}
          </div>
        </PerfectScrollbar>
      </div>
    );
  }
}
ChatContent.propTypes = {
  chatDetails: PropTypes.object.isRequired
};

export default ChatContent;
