import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import {
  HoverStripped,
  CustomTableColor,
  TableFooterStyling,
  TableHeaderStyling,
  DefaultStyling
} from "./example/basicEx";

class StylingTable extends Component {
  render() {
    return (
      <Row>
        <Col md={6}>
          <DefaultStyling />
        </Col>
        <Col md={6}>
          <TableHeaderStyling />
        </Col>
        <Col md={6}>
          <TableFooterStyling />
        </Col>
        <Col md={6}>
          <CustomTableColor />
        </Col>
        <Col sm={12}>
          <HoverStripped />
        </Col>
      </Row>
    );
  }
}

export default StylingTable;
