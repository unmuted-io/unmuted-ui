import React from "react";
import { Form, FormGroup, Label, Input, Col, Row, Button } from "reactstrap";

const FormHorizontal = () => (
  <Form onSubmit={e => e.preventDefault()}>
    <Row>
      <Col sm={6}>
        <h5 className="mt-5">Horizontal Form</h5>
        <hr />
        <FormGroup row>
          <Label for="inputEmail3" sm={3}>
            Email
          </Label>
          <Col sm={9}>
            <Input type="email" id="inputEmail3" placeholder="Email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="inputPassword3" sm={3}>
            Password
          </Label>
          <Col sm={9}>
            <Input type="password" id="inputPassword3" placeholder="Password" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={3}>Radios</Label>
          <Col sm={9}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" defaultChecked /> First radio
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />
                Second radio
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input type="radio" name="radio1" disabled />
                Third disabled radio
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={3}>Checkbox</Col>
          <Col sm={9}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />
                Example checkbox
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={10}>
            <Button type="submit" color="primary">
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Col>
      <Col sm={6}>
        <h5 className="mt-5">Horizontal Form Label Sizing</h5>
        <hr />
        <FormGroup row>
          <Label for="colFormLabelSm" size="sm" sm={3}>
            Email
          </Label>
          <Col sm={9}>
            <Input
              type="email"
              id="colFormLabelSm"
              bsSize="sm"
              placeholder="Email"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="colFormLabel" sm={3}>
            Email
          </Label>
          <Col sm={9}>
            <Input type="email" id="colFormLabel" placeholder="Email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="colFormLabelLg" size="lg" sm={3}>
            Email
          </Label>
          <Col sm={9}>
            <Input
              type="email"
              id="colFormLabelLg"
              bsSize="lg"
              placeholder="Email"
            />
          </Col>
        </FormGroup>
      </Col>
    </Row>
  </Form>
);

export default FormHorizontal;
