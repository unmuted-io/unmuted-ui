import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import {
  HorizontalBorder,
  VerticalBorder,
  BothBorder,
  BorderlessTable,
  DefaultTableBorder,
  BorderBottomColor
} from "./example/basicEx";

class BorderTable extends Component {
  render() {
    return (
      <Row>
        <Col xl={6} md={12}>
          <HorizontalBorder />
        </Col>
        <Col xl={6} md={12}>
          <VerticalBorder />
        </Col>
        <Col xl={6} md={12}>
          <BothBorder />
        </Col>
        <Col xl={6} md={12}>
          <BorderlessTable />
        </Col>
        <Col xl={6} md={12}>
          <DefaultTableBorder />
        </Col>
        <Col xl={6} md={12}>
          <BorderBottomColor />
        </Col>
      </Row>
    );
  }
}

export default BorderTable;
