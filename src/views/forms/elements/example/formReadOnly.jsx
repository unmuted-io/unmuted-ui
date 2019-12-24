import React from "react";
import { Row, Col, Input, Form, FormGroup, Label } from "reactstrap";

const FormReadOnly = () => (
  <Row>
    <Col md="6">
      <h5 className="mt-5">Readonly</h5>
      <hr />
      <Input type="text" placeholder="Readonly input here…" readOnly />
    </Col>
    <Col md="6">
      <h5 className="mt-5">Readonly plain Text</h5>
      <hr />
      <Form onSubmit={e => e.preventDefault()}>
        <FormGroup row>
          <Label for="staticEmail" sm={3}>
            Email
          </Label>
          <Col sm={9}>
            <Input
              type="text"
              id="staticEmail"
              value="email@example.com"
              plaintext
              readOnly
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="inputPassword" sm={3}>
            Password
          </Label>
          <Col sm={9}>
            <Input type="password" id="inputPassword" placeholder="Password" />
          </Col>
        </FormGroup>
      </Form>
    </Col>
  </Row>
);

export default FormReadOnly;
