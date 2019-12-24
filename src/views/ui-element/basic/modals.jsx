// import external modules
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// import internal(own) modules
import ScrollingModal from "./example/modal/scrollingModal";
import VerticallyModal from "./example/modal/verticallyModal";
import TooltipsModal from "./example/modal/tooltipsModal";
import GridModal from "./example/modal/gridModal";
import SizeModal from "./example/modal/sizeModal";
import VaryingModal from "./example/modal/varyingModal";
import DemoModal from "./example/modal/demoModal";

class Modals extends Component {
  render() {
    return (
      <Row>
        <Col sm="12">
          <DemoModal />
        </Col>
        <Col xl="4" md="6">
          <ScrollingModal />
        </Col>
        <Col xl="4" md="6">
          <VerticallyModal />
        </Col>
        <Col xl="4" md="6">
          <TooltipsModal />
        </Col>
        <Col xl="4" md="6">
          <GridModal />
        </Col>
        <Col md="8" sm="12">
          <SizeModal />
        </Col>
        <Col sm="12">
          <VaryingModal />
        </Col>
      </Row>
    );
  }
}

export default Modals;
