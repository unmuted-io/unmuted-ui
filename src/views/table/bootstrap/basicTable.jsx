import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import {
  BasicTable,
  InverseTable,
  HoverTable,
  DarkTable,
  ContextualClasses,
  BackgroundUtilities,
  StripedTable
} from "./example/basicEx";

class BasicBtTable extends Component {
  render() {
    return (
      <Row>
        <Col md={6}>
          <BasicTable />
        </Col>
        <Col md={6}>
          <InverseTable />
        </Col>
        <Col md={6}>
          <HoverTable />
        </Col>
        <Col md={6}>
          <DarkTable />
        </Col>
        <Col md={12}>
          <StripedTable />
        </Col>
        <Col md={6}>
          <ContextualClasses />
        </Col>
        <Col xl={6}>
          <BackgroundUtilities />
        </Col>
      </Row>
    );
  }
}

export default BasicBtTable;
