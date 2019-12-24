import React from "react";
import {
  Row,
  Col,
  InputGroup,
  Input,
  InputGroupAddon,
  Label,
  InputGroupText
} from "reactstrap";

const FormInputGroup = () => (
  <React.Fragment>
    <InputGroup className="mb-3">
      <InputGroupAddon addonType="prepend">@</InputGroupAddon>
      <Input type="text" placeholder="Username" />
    </InputGroup>
    <InputGroup className="mb-3">
      <Input type="text" placeholder="Recipient's username" />
      <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
    </InputGroup>
    <Label>Your vanity URL</Label>
    <InputGroup className="mb-3">
      <InputGroupAddon addonType="prepend">
        https://example.com/users/
      </InputGroupAddon>
      <Input type="text" />
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroupAddon addonType="prepend">$</InputGroupAddon>
      <Input type="text" />
      <InputGroupAddon addonType="append">.00</InputGroupAddon>
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroupAddon addonType="prepend">With textarea</InputGroupAddon>
      <Input type="textarea" />
    </InputGroup>
    <Row>
      <Col md={6}>
        <h5 className="mt-5">Sizing</h5>
        <hr />
        <InputGroup size="sm" className="mb-3">
          <InputGroupAddon addonType="prepend">Small</InputGroupAddon>
          <Input type="text" />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">Default</InputGroupAddon>
          <Input type="text" />
        </InputGroup>
        <InputGroup size="lg" className="mb-3">
          <InputGroupAddon addonType="prepend">Large</InputGroupAddon>
          <Input type="text" />
        </InputGroup>
      </Col>
      <Col md={6}>
        <h5 className="mt-5">Checkboxes and radios</h5>
        <hr />
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <Input addon type="checkbox" />
            </InputGroupText>
          </InputGroupAddon>
          <Input type="text" />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <Input addon type="radio" />
            </InputGroupText>
          </InputGroupAddon>
          <Input type="text" />
        </InputGroup>
      </Col>
      <Col md={6}>
        <h5 className="mt-5">Multiple inputs</h5>
        <hr />
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            First and last name
          </InputGroupAddon>
          <Input type="text" />
          <Input type="text" />
        </InputGroup>
      </Col>
      <Col md={6}>
        <h5 className="mt-5">Multiple addons</h5>
        <hr />
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>$</InputGroupText>
            <InputGroupText>0.00</InputGroupText>
          </InputGroupAddon>
          <Input type="text" />
        </InputGroup>
        <InputGroup>
          <Input type="text" />
          <InputGroupAddon addonType="prepend">
            <InputGroupText>$</InputGroupText>
            <InputGroupText>0.00</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Col>
    </Row>
  </React.Fragment>
);

export default FormInputGroup;
