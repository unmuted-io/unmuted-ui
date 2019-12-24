import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import {
  ExtraLargeTable,
  LargeTable,
  DefaultTable,
  SmallTable,
  ExtraSmallTable
} from "./example/basicEx";

class SizingTable extends Component {
  render() {
    return (
      <Row>
        <Col md={6}>
          <ExtraLargeTable />
        </Col>
        <Col md={6}>
          <LargeTable />
        </Col>
        <Col md={6}>
          <DefaultTable />
        </Col>
        <Col md={6}>
          <SmallTable />
        </Col>
        <Col md={12}>
          <ExtraSmallTable />
        </Col>
      </Row>
    );
  }
}

export default SizingTable;
