import React from "react";
import { Input, Label, Form, FormGroup, Button } from "reactstrap";

const FormInline = () => (
  <Form inline onSubmit={e => e.preventDefault()}>
    <FormGroup className="mb-2">
      <Label for="staticEmail2" className="sr-only">
        Email
      </Label>
      <Input
        type="text"
        id="staticEmail2"
        value="email@example.com"
        plaintext
        readOnly
      />
    </FormGroup>
    <FormGroup className="mx-sm-3 mb-2">
      <Label for="inputPassword2" className="sr-only">
        Password
      </Label>
      <Input type="password" id="inputPassword2" placeholder="Password" />
    </FormGroup>
    <Button type="submit" className="mb-2" color="primary">
      Confirm identity
    </Button>
  </Form>
);

export default FormInline;
