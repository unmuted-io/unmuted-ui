import React, { Component, Fragment } from "react";
import {
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  Card,
  CardHeader,
  CardBody
} from "reactstrap";

export default class PopoverItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <span>
        <Button
          className={this.props.className}
          color={this.props.color}
          id={"Popover-" + this.props.id}
          type="button"
        >
          {this.props.button}
        </Button>
        <Popover
          placement={this.props.placement}
          isOpen={this.state.popoverOpen}
          target={"Popover-" + this.props.id}
          toggle={this.toggle}
        >
          <PopoverHeader>{this.props.title}</PopoverHeader>
          <PopoverBody>{this.props.text}</PopoverBody>
        </Popover>
      </span>
    );
  }
}