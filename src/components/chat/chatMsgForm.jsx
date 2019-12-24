import React, { Component } from "react";
import { Form, Input, InputGroup, InputGroupAddon, Button } from "reactstrap";
import { Play, Paperclip } from "react-feather";

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
      <div className="msg-form">
        <Form onSubmit={this.onChatMsgSubmit}>
          <InputGroup className="mb-0">
            <Input
              type="text"
              className=" msg-send-chat"
              placeholder="Text . . ."
              onChange={this.handleChatMsgChange}
              value={this.state.msg}
            />
            <InputGroupAddon addonType="append">
              <Input type="file" style={{ display: "none" }} />
              <Button className="btn-icon" type="button">
                <Paperclip size={14} />
              </Button>
            </InputGroupAddon>
            <InputGroupAddon addonType="append">
              <Input type="file" style={{ display: "none" }} />
              <Button
                color="theme"
                type="button"
                className="btn-icon btn-msg-send"
                onClick={() => {
                  if (this.state.msg.length > 0) {
                    this.props.onClick(this.props.id, this.state.msg);
                    this.setState({ msg: "" });
                  }
                }}
              >
                <Play size={14} />
              </Button>
            </InputGroupAddon>
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
