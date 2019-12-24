import React from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

const FormControls = () => (
  <Form onSubmit={e => e.preventDefault()}>
    <Row>
      <Col md="6">
        <FormGroup>
          <Label for="exampleInputEmail1">Email address</Label>
          <Input
            type="email"
            id="exampleInputEmail1"
            placeholder="Enter email"
          />
          <small>We'll never share your email with anyone else.</small>
        </FormGroup>
        <FormGroup>
          <Label for="exampleInputPassword1">Password</Label>
          <Input
            type="password"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </FormGroup>
        <FormGroup className="form-check">
          <Input type="checkbox" id="exampleCheck1" />
          <Label for="exampleCheck1" check>
            Check me out
          </Label>
        </FormGroup>
        <Button stype="submit" color="primary">
          Submit
        </Button>
      </Col>
      <Col md="6">
        <FormGroup>
          <Label>Text</Label>
          <Input type="text" placeholder="Text" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFormControlSelect1">Example select</Label>
          <Input type="select" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFormControlTextarea1">Example textarea</Label>
          <Input type="textarea" id="exampleFormControlTextarea1" rows={3} />
        </FormGroup>
      </Col>
    </Row>
  </Form>
);

export default FormControls;
