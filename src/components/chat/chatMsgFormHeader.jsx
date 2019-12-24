import React, { Component } from "react";
import { Form, Input, InputGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";

// import PropTypes from 'prop-types'
import PropTypes from "prop-types";

class ChatMsgForm extends Component {
  state = {
    msg: ""
  };
  handleChatMsgChange = e => {
    this.setState({
      msg: e.target.value
    });
  };

  onChatMsgSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onClick(this.props.id, this.state.msg);
    this.setState({ msg: "" });
  };

  render() {
    return (
      <div className="h-list-footer">
        <Form onSubmit={this.onChatMsgSubmit}>
          <InputGroup className="mb-0">
            <input
              type="file"
              className="chat-attach"
              style={{ display: "none" }}
            />
            <Link
              to="#"
              className="input-group-prepend btn btn-success btn-attach"
            >
              <i className="feather icon-paperclip" />
            </Link>
            <Input
              type="text"
              className="h-send-chat"
              placeholder="Write hear . . "
              onChange={this.handleChatMsgChange}
              value={this.state.msg}
            />
            <Button
              color="primary"
              type="button"
              className="btn-send input-group-append"
              onClick={() => {
                if (this.state.msg.length > 0) {
                  this.props.onClick(this.props.id, this.state.msg);
                  this.setState({ msg: "" });
                }
              }}
            >
              <i className="feather icon-message-circle" />
            </Button>
          </InputGroup>
        </Form>
      </div>
    );
  }
}

ChatMsgForm.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ChatMsgForm;
