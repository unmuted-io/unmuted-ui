import React from "react";
import { Form, Label, Input, FormGroup } from "reactstrap";

const FormRange = () => (
  <Form onSubmit={e => e.preventDefault()}>
    <FormGroup>
      <Label for="formControlRange">Example Range input</Label>
      <Input
        type="range"
        id="formControlRange"
        className="form-control-range"
      />
    </FormGroup>
  </Form>
);

export default FormRange;
