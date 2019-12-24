import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

const FormHelpText = () => (
  <React.Fragment>
    <Label for="inputPassword5">Password</Label>
    <Input
      type="password"
      id="inputPassword5"
      aria-describedby="passwordHelpBlock"
    />
    <small id="passwordHelpBlock" className="form-text text-muted">
      Your password must be 8-20 characters long, contain letters and numbers,
      and must not contain spaces, special characters, or emoji.
    </small>
    <Form inline onSubmit={e => e.preventDefault()}>
      <FormGroup className="mt-3">
        <Label for="inputPassword6">Password</Label>
        <Input
          className="mx-sm-3"
          type="password"
          id="inputPassword6"
          aria-describedby="passwordHelpInline"
        />
        <small id="passwordHelpInline" className="text-muted">
          Must be 8-20 characters long.
        </small>
      </FormGroup>
    </Form>
  </React.Fragment>
);

export default FormHelpText;
