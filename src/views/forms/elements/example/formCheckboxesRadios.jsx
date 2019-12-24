import React from "react";
import { Row, Col, CustomInput, Label } from "reactstrap";

const FormCheckboxesRadios = () => (
  <Row>
    <Col md="6">
      <h5 className="mt-3">Checkboxes</h5>
      <hr />
      <CustomInput
        type="checkbox"
        id="customCheck1"
        label="Check this custom checkbox"
      />
    </Col>
    <Col md="6">
      <h5 className="mt-3">Switches</h5>
      <hr />
      <CustomInput
        type="switch"
        id="customswitch1"
        label="Check this custom Switches"
      />
    </Col>
    <Col md="6">
      <h5 className="mt-3">Radios</h5>
      <hr />
      <CustomInput
        type="radio"
        id="customRadio1"
        name="customRadio"
        label="Toggle this custom radio"
      />
      <CustomInput
        type="radio"
        id="customRadio2"
        name="customRadio"
        label="Or toggle this other custom radio"
      />
      <h5 className="mt-5">Inline</h5>
      <CustomInput
        type="radio"
        id="customRadio3"
        name="customRadio2"
        label="Toggle this custom radio"
        inline
      />
      <CustomInput
        type="radio"
        id="customRadio4"
        name="customRadio2"
        label="Or toggle this other custom radio"
        inline
      />
    </Col>
    <Col md={6}>
      <h5 className="mt-5">Range</h5>
      <hr />
      <Label for="customRange1">Example range</Label>
      <input type="range" className="custom-range" id="customRange1" />
      <Label for="customRange2">Example range</Label>
      <input
        type="range"
        min="0"
        className="custom-range"
        max="5"
        id="customRange2"
        step="4"
      />
      <Label for="customRange3">Example range</Label>
      <input
        type="range"
        className="custom-range"
        min="0"
        max="5"
        step="3"
        id="customRange3"
      />
    </Col>
  </Row>
);

export default FormCheckboxesRadios;
