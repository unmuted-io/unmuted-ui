// import external modules
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// import internal(own) modules
import TooltipExample from "./example/tooltip/tooltip";
import PopoverExample from "./example/popover/popover";

class TooltipPopover extends Component {
  render() {
    return (
      <Row>
        <Col md="6" sm="12">
          <TooltipExample />
        </Col>
        <Col md="6" sm="12">
          <PopoverExample />
        </Col>
      </Row>
    );
  }
}

export default TooltipPopover;
