import React, { Component, Fragment } from "react";
import { FormGroup, Label, Col } from "reactstrap";
import classnames from "classnames";

const Radios = props => (
  <Fragment>
    <FormGroup
      className={classnames({
        "d-inline": props.inline === true
      })}
    >
      <div
        className={classnames(`radio d-inline radio-${props.color}`, {
          "radio-fill": props.file === true
        })}
      >
        <input
          type="radio"
          name={`radio-${props.idKey}-1`}
          id={`radio-${props.idKey}-1`}
          defaultChecked
        />
        <Label for={`radio-${props.idKey}-1`} className="cr">
          Checked
        </Label>
      </div>
    </FormGroup>
    <FormGroup
      className={classnames({
        "d-inline": props.inline === true
      })}
    >
      <div
        className={classnames(`radio d-inline radio-${props.color}`, {
          "radio-fill": props.file === true
        })}
      >
        <input
          type="radio"
          name={`radio-${props.idKey}-1`}
          id={`radio-${props.idKey}-2`}
        />
        <Label for={`radio-${props.idKey}-2`} className="cr">
          Uncheck
        </Label>
      </div>
    </FormGroup>
    {props.inline !== true && (
      <Fragment>
        <FormGroup>
          <div
            className={classnames(`radio d-inline radio-${props.color}`, {
              "radio-fill": props.file === true
            })}
          >
            <input type="radio" id={`radio-${props.idKey}-3`} disabled />
            <Label for={`radio-${props.idKey}-3`} className="cr">
              Disabled
            </Label>
          </div>
        </FormGroup>
        <FormGroup>
          <div
            className={classnames(
              `radio d-inline m-r-10 radio-${props.color}`,
              {
                "radio-fill": props.file === true
              }
            )}
          >
            <input
              type="radio"
              id={`radio-${props.idKey}-4`}
              disabled
              defaultChecked
            />
            <Label for={`radio-${props.idKey}-4`} className="cr">
              Disabled Checked
            </Label>
          </div>
        </FormGroup>
      </Fragment>
    )}
  </Fragment>
);

class FormRadio extends Component {
  render() {
    return (
      <Fragment>
        <Col xl={4} md={6} className="mb-5">
          <h5>Primary Radio</h5>
          <hr />
          <Radios color="primary" idKey="p" />
          <h6 className="mt-4">Radio fill Button</h6>
          <hr />
          <Radios color="primary" idKey="p-file" file />
          <h6 className="mt-4">Inline Button</h6>
          <hr />
          <Radios color="primary" idKey="p-in" inline />
          <h6 className="mt-4">Inline fill Button</h6>
          <hr />
          <Radios color="primary" idKey="p-in-fill" file inline />
        </Col>
        <Col xl={4} md={6} className="mb-5">
          <h5>Danger Radio</h5>
          <hr />
          <Radios color="danger" idKey="d" />
          <h6 className="mt-4">Radio fill Button</h6>
          <hr />
          <Radios color="danger" idKey="d-file" file />
          <h6 className="mt-4">Inline Button</h6>
          <hr />
          <Radios color="danger" idKey="d-in" inline />
          <h6 className="mt-4">Inline fill Button</h6>
          <hr />
          <Radios color="danger" idKey="d-in-fill" file inline />
        </Col>
        <Col xl={4} md={6} className="mb-5">
          <h5>Success Radio</h5>
          <hr />
          <Radios color="success" idKey="s" />
          <h6 className="mt-4">Radio fill Button</h6>
          <hr />
          <Radios color="success" idKey="s-file" file />
          <h6 className="mt-4">Inline Button</h6>
          <hr />
          <Radios color="success" idKey="s-in" inline />
          <h6 className="mt-4">Inline fill Button</h6>
          <hr />
          <Radios color="success" idKey="s-in-fill" file inline />
        </Col>
        <Col xl={4} md={6} className="mb-5">
          <h5>Warning Radio</h5>
          <hr />
          <Radios color="warning" idKey="w" />
          <h6 className="mt-4">Radio fill Button</h6>
          <hr />
          <Radios color="warning" idKey="w-file" file />
          <h6 className="mt-4">Inline Button</h6>
          <hr />
          <Radios color="warning" idKey="w-in" inline />
          <h6 className="mt-4">Inline fill Button</h6>
          <hr />
          <Radios color="warning" idKey="w-in-fill" file inline />
        </Col>
        <Col xl={4} md={6} className="mb-5">
          <h5>Info Radio</h5>
          <hr />
          <Radios color="info" idKey="i" />
          <h6 className="mt-4">Radio fill Button</h6>
          <hr />
          <Radios color="info" idKey="i-file" file />
          <h6 className="mt-4">Inline Button</h6>
          <hr />
          <Radios color="info" idKey="i-in" inline />
          <h6 className="mt-4">Inline fill Button</h6>
          <hr />
          <Radios color="info" idKey="i-in-fill" file inline />
        </Col>
      </Fragment>
    );
  }
}

export default FormRadio;
