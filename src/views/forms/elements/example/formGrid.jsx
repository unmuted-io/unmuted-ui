import React from "react";
import { Form, Label, FormGroup, Input, Button } from "reactstrap";

const FormGrid = () => (
  <Form onSubmit={e => e.preventDefault()}>
    <div className="form-row">
      <FormGroup className="col-md-6">
        <Label for="inputEmail4">Email</Label>
        <Input type="email" id="inputEmail4" placeholder="Email" />
      </FormGroup>
      <FormGroup className="col-md-6">
        <Label for="inputPassword4">Password</Label>
        <Input type="password" id="inputPassword4" placeholder="Password" />
      </FormGroup>
    </div>
    <FormGroup>
      <Label for="inputAddress">Address</Label>
      <Input type="text" id="inputAddress" placeholder="1234 Main St" />
    </FormGroup>
    <FormGroup>
      <Label for="inputAddress2">Address 2</Label>
      <Input
        type="text"
        id="inputAddress2"
        placeholder="Apartment, studio, or floor"
      />
    </FormGroup>
    <div className="form-row">
      <FormGroup className="col-md-6">
        <Label for="inputCity">City</Label>
        <Input type="text" id="inputCity" placeholder="inputCity" />
      </FormGroup>
      <FormGroup className="col-md-4">
        <Label for="inputState">State</Label>
        <Input type="select" id="inputState ">
          <option>select</option>
          <option>Large select</option>
        </Input>
      </FormGroup>
      <FormGroup className="col-md-2">
        <Label for="inputZip">Zip</Label>
        <Input type="text" id="inputZip" placeholder="inputCity" />
      </FormGroup>
    </div>
    <FormGroup className="form-check">
      <Label check>
        <Input type="checkbox" name="radio1" /> Check me out
      </Label>
    </FormGroup>
    <Button type="submit" color="primary">
      Sign in
    </Button>
  </Form>
);

export default FormGrid;
