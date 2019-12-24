import React, { Component, Fragment } from "react";
import { FormGroup, Label, Col } from "reactstrap";

const Switchery = props => (
  <Fragment>
    <FormGroup>
      <div className={`switch switch-${props.color} d-inline m-r-10`}>
        <input type="checkbox" id={`switch-${props.idKey}-1`} defaultChecked />
        <Label for={`switch-${props.idKey}-1`} className="cr" />
      </div>
      <Label>Checked</Label>
    </FormGroup>
    <FormGroup>
      <div className={`switch switch-${props.color} d-inline m-r-10`}>
        <input type="checkbox" id={`switch-${props.idKey}-2`} />
        <Label for={`switch-${props.idKey}-2`} className="cr" />
      </div>
      <Label>Uncheck</Label>
    </FormGroup>
    <FormGroup>
      <div className={`switch switch-${props.color} d-inline m-r-10`}>
        <input type="checkbox" id={`switch-${props.idKey}-3`} disabled />
        <Label for={`switch-${props.idKey}-3`} className="cr" />
      </div>
      <Label>Disabled</Label>
    </FormGroup>
    <FormGroup>
      <div className={`switch switch-${props.color} d-inline m-r-10`}>
        <input
          type="checkbox"
          id={`switch-${props.idKey}-4`}
          defaultChecked
          disabled
        />
        <Label for={`switch-${props.idKey}-4`} className="cr" />
      </div>
      <Label>Disabled Checked</Label>
    </FormGroup>
  </Fragment>
);

class FormSwitch extends Component {
  render() {
    return (
      <Fragment>
        <Col xl={3} md={6} className="mb-4">
          <h5>Primary Switch</h5>
          <hr />
          <Switchery color="primary" idKey="p" />
        </Col>
        <Col xl={3} md={6} className="mb-4">
          <h5>Danger Switch</h5>
          <hr />
          <Switchery color="danger" idKey="d" />
        </Col>
        <Col xl={3} md={6} className="mb-4">
          <h5>Success Switch</h5>
          <hr />
          <Switchery color="success" idKey="s" />
        </Col>
        <Col xl={3} md={6} className="mb-3">
          <h5>Warning Switch</h5>
          <hr />
          <Switchery color="warning" idKey="w" />
        </Col>
        <Col xl={3} md={6} className="mb-3">
          <h5>Info Switch</h5>
          <hr />
          <Switchery color="info" idKey="i" />
        </Col>
      </Fragment>
    );
  }
}

export default FormSwitch;
