// import external modules
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// import internal(own) modules
import BasicBadge from "./example/badges/basicBadge";
import ButtonBadge from "./example/badges/buttonBadge";
import ContextualBadge from "./example/badges/contextualBadge";
import PillBadge from "./example/badges/pillBadge";
import LinkBadge from "./example/badges/linkBadge";

class Badges extends Component {
  render() {
    return (
      <Row>
        <Col md="12">
          <BasicBadge />
        </Col>
        <Col md="12">
          <ButtonBadge />
        </Col>
        <Col md="12">
          <ContextualBadge />
        </Col>
        <Col md="12">
          <PillBadge />
        </Col>
        <Col md="12">
          <LinkBadge />
        </Col>
      </Row>
    );
  }
}

export default Badges;
