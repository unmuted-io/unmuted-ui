import React from "react";
import { Row, Col, Input } from "reactstrap";

const FormSizing = () => (
  <Row>
    <Col md="6">
      <Input
        type="text"
        placeholder=".form-control-lg"
        bsSize="lg"
        className="mb-3"
      />
      <Input type="text" placeholder="Default input" className="mb-3" />
      <Input
        type="text"
        placeholder=".form-control-sm"
        bsSize="sm"
        className="mb-3"
      />
    </Col>
    <Col md="6">
      <Input type="select" bsSize="lg" className="mb-3">
        <option>Large select</option>
      </Input>
      <Input type="select" className="mb-3">
        <option>Default select</option>
      </Input>
    </Col>
  </Row>
);

export default FormSizing;
