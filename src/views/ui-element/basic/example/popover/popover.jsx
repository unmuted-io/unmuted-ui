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

class PopoverItem extends React.Component {
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
          className="mr-1"
          color={this.props.item.color}
          id={"Popover-" + this.props.id}
          type="button"
        >
          {this.props.item.button}
        </Button>
        <Popover
          placement={this.props.item.placement}
          isOpen={this.state.popoverOpen}
          target={"Popover-" + this.props.id}
          toggle={this.toggle}
        >
          <PopoverHeader>{this.props.item.title}</PopoverHeader>
          <PopoverBody>{this.props.item.text}</PopoverBody>
        </Popover>
      </span>
    );
  }
}

class PopoverExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltips: [
        {
          placement: "top",
          button: "Top",
          color: "danger",
          title: "popup on top",
          text: "top by popover"
        },
        {
          placement: "left",
          button: "Left",
          color: "primary",
          title: "popup on left",
          text: "left by popover"
        },
        {
          placement: "right",
          button: "Right",
          color: "success",
          title: "popup on right",
          text: "right by popover"
        },
        {
          placement: "bottom",
          button: "Bottom",
          color: "warning",
          title: "popup on bottom",
          text: "bottom by popover"
        },
        {
          placement: "top",
          button: "Html popup",
          color: "info",
          text: "popup by HTML",
          title: (
            <Fragment>
              <em>Tooltip</em> <u>with</u> <b>HTML</b>
            </Fragment>
          )
        }
      ]
    };
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Popover</h5>
        </CardHeader>
        <CardBody>
          {this.state.tooltips.map((tooltip, i) => {
            return <PopoverItem key={i} item={tooltip} id={i} />;
          })}
        </CardBody>
      </Card>
    );
  }
}

export default PopoverExample;
