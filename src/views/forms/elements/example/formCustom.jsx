import React from "react";
import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  CustomInput,
  Button
} from "reactstrap";

const FormCustom = () => (
  <Row>
    <Col sm={6}>
      <h5 className="mt-3">Custom Select</h5>
      <hr />
      <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">Options</InputGroupAddon>
        <CustomInput type="select" id="inputGroupSelect01">
          <option defaultValue="selected">Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CustomInput>
      </InputGroup>
      <InputGroup className="mb-3">
        <CustomInput type="select" id="inputGroupSelect01">
          <option defaultValue="selected">Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CustomInput>
        <InputGroupAddon addonType="append">Options</InputGroupAddon>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">
          <Button color="primary">Button</Button>
        </InputGroupAddon>
        <CustomInput type="select" id="inputGroupSelect01">
          <option defaultValue="selected">Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CustomInput>
      </InputGroup>
      <InputGroup className="mb-3">
        <CustomInput type="select" id="inputGroupSelect01">
          <option defaultValue="selected">Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CustomInput>
        <InputGroupAddon addonType="append">
          <Button color="primary">Button</Button>
        </InputGroupAddon>
      </InputGroup>
    </Col>
    <Col sm={6}>
      <h5 className="mt-3">Custom File Input</h5>
      <hr />
      <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">Upload</InputGroupAddon>
        <CustomInput type="file" id="inputGroupFile03" />
      </InputGroup>
      <InputGroup className="mb-3">
        <CustomInput type="file" id="inputGroupFile04" />
        <InputGroupAddon addonType="append">Upload</InputGroupAddon>
      </InputGroup>
      <InputGroup className="cust-file-button mb-3">
        <InputGroupAddon addonType="prepend">
          <Button color="primary">Upload</Button>
        </InputGroupAddon>
        <CustomInput type="file" id="inputGroupFile03" />
      </InputGroup>
      <InputGroup className="cust-file-button">
        <CustomInput type="file" id="inputGroupFile04" />
        <InputGroupAddon addonType="append">
          <Button color="primary">Upload</Button>
        </InputGroupAddon>
      </InputGroup>
    </Col>
  </Row>
);

export default FormCustom;
