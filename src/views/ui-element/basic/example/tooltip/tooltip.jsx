import React, { Component, Fragment } from "react";
import { Button, Tooltip, Card, CardHeader, CardBody } from "reactstrap";

class TooltipItem extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <Fragment>
        <Button color={this.props.item.color} id={"Tooltip-" + this.props.id}>
          {this.props.item.text}
        </Button>
        <Tooltip
          placement={this.props.item.placement}
          isOpen={this.state.tooltipOpen}
          target={"Tooltip-" + this.props.id}
          toggle={this.toggle}
        >
          {this.props.item.content}
        </Tooltip>
      </Fragment>
    );
  }
}

class TooltipExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltips: [
        {
          placement: "top",
          text: "Top",
          color: "danger",
          content: "tooltip on top"
        },
        {
          placement: "left",
          text: "Left",
          color: "primary",
          content: "tooltip on left"
        },
        {
          placement: "right",
          text: "Right",
          color: "success",
          content: "tooltip on right"
        },
        {
          placement: "bottom",
          text: "Bottom",
          color: "warning",
          content: "tooltip on bottom"
        },
        {
          placement: "top",
          text: "Html Tooltip",
          color: "info",
          content: (
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
          <h5>Tooltip</h5>
        </CardHeader>
        <CardBody>
          {this.state.tooltips.map((tooltip, i) => {
            return <TooltipItem key={i} item={tooltip} id={i} />;
          })}
        </CardBody>
      </Card>
    );
  }
}

export default TooltipExample;
