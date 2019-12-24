// import external modules
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// import internal(own) modules
import {
  Headings,
  DisplayHeadings,
  InlineTextElements,
  ContextualTextColors,
  Unordered,
  Ordered,
  Unstyled,
  Blockquotes,
  HorizontalDescription
} from "./example/typography/typography";

class Typography extends Component {
  render() {
    return (
      <Row>
        <Col sm="12">
          <Headings />
        </Col>
        <Col sm="12">
          <DisplayHeadings />
        </Col>
        <Col md="6">
          <InlineTextElements />
        </Col>
        <Col md="6">
          <ContextualTextColors />
        </Col>
        <Col md="6" lg="4">
          <Unordered />
        </Col>
        <Col md="6" lg="4">
          <Ordered />
        </Col>
        <Col md="12" lg="4">
          <Unstyled />
        </Col>
        <Col md="6">
          <Blockquotes />
        </Col>
        <Col md="6">
          <HorizontalDescription />
        </Col>
      </Row>
    );
  }
}

export default Typography;
