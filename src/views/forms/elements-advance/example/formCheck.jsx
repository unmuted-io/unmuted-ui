import React, { Component, Fragment } from "react";
import { FormGroup, Label, Col } from "reactstrap";
import classnames from "classnames";

const CheckBox = props => (
  <Fragment>
    <FormGroup
      className={classnames({
        "d-inline": props.inline === true
      })}
    >
      <div
        className={classnames(
          `checkbox d-inline ${props.color && `checkbox-${props.color}`}`,
          {
            "checkbox-fill": props.file === true
          }
        )}
      >
        <input
          type="checkbox"
          name={`checkbox-${props.idKey}-1`}
          id={`checkbox-${props.idKey}-1`}
          defaultChecked
        />
        <Label for={`checkbox-${props.idKey}-1`} className="cr">
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
        className={classnames(
          `checkbox d-inline ${props.color && `checkbox-${props.color}`}`,
          {
            "checkbox-fill": props.file === true
          }
        )}
      >
        <input
          type="checkbox"
          name={`checkbox-${props.idKey}-1`}
          id={`checkbox-${props.idKey}-2`}
        />
        <Label for={`checkbox-${props.idKey}-2`} className="cr">
          Uncheck
        </Label>
      </div>
    </FormGroup>
    {props.inline !== true && (
      <Fragment>
        <FormGroup>
          <div
            className={classnames(
              `checkbox d-inline ${props.color && `checkbox-${props.color}`}`,
              {
                "checkbox-fill": props.file === true
              }
            )}
          >
            <input type="checkbox" id={`checkbox-${props.idKey}-3`} disabled />
            <Label for={`checkbox-${props.idKey}-3`} className="cr">
              Disabled
            </Label>
          </div>
        </FormGroup>
        <FormGroup>
          <div
            className={classnames(
              `checkbox d-inline  m-r-10 ${props.color &&
                `checkbox-${props.color}`}`,
              {
                "checkbox-fill": props.file === true
              }
            )}
          >
            <input
              type="checkbox"
              id={`checkbox-${props.idKey}-4`}
              disabled
              defaultChecked
            />
            <Label for={`checkbox-${props.idKey}-4`} className="cr">
              Disabled Checked
            </Label>
          </div>
        </FormGroup>
      </Fragment>
    )}
  </Fragment>
);

class FormCheck extends Component {
  render() {
    return (
      <Fragment>
        <Col xl={4} md={6} className="mb-5">
          <h5>Default checkbox</h5>
          <hr />
          <CheckBox idKey="de" />
          <h6 className="mt-4">Bordered checkbox</h6>
          <hr />
          <CheckBox idKey="de-file" file />
          <h6 className="mt-4">Inline checkbox</h6>
          <hr />
          <CheckBox idKey="de-in" inline />
          <h6 className="mt-4">Inline Bordered checkbox</h6>
          <hr />
          <CheckBox idKey="de-in-fill" file inline />
        </Col>
        <Col xl={4} md={6} className="mb-5">
          <h5>Primary checkbox</h5>
          <hr />
          <CheckBox color="primary" idKey="p" />
          <h6 className="mt-4">Bordered checkbox</h6>
          <hr />
          <CheckBox color="primary" idKey="p-file" file />
          <h6 className="mt-4">Inline checkbox</h6>
          <hr />
          <CheckBox color="primary" idKey="p-in" inline />
          <h6 className="mt-4">Inline Bordered checkbox</h6>
          <hr />
          <CheckBox color="primary" idKey="p-in-fill" file inline />
        </Col>
        <Col xl={4} md={6} className="mb-5">
          <h5>Danger checkbox</h5>
          <hr />
          <CheckBox color="danger" idKey="d" />
          <h6 className="mt-4">Bordered checkbox</h6>
          <hr />
          <CheckBox color="danger" idKey="d-file" file />
          <h6 className="mt-4">Inline checkbox</h6>
          <hr />
          <CheckBox color="danger" idKey="d-in" inline />
          <h6 className="mt-4">Inline Bordered checkbox</h6>
          <hr />
          <CheckBox color="danger" idKey="d-in-fill" file inline />
        </Col>
        <Col xl={4} md={6} className="mb-5">
          <h5>Success checkbox</h5>
          <hr />
          <CheckBox color="success" idKey="s" />
          <h6 className="mt-4">Bordered checkbox</h6>
          <hr />
          <CheckBox color="success" idKey="s-file" file />
          <h6 className="mt-4">Inline checkbox</h6>
          <hr />
          <CheckBox color="success" idKey="s-in" inline />
          <h6 className="mt-4">Inline Bordered checkbox</h6>
          <hr />
          <CheckBox color="success" idKey="s-in-fill" file inline />
        </Col>
        <Col xl={4} md={6} className="mb-5">
          <h5>Warning checkbox</h5>
          <hr />
          <CheckBox color="warning" idKey="w" />
          <h6 className="mt-4">Bordered checkbox</h6>
          <hr />
          <CheckBox color="warning" idKey="w-file" file />
          <h6 className="mt-4">Inline checkbox</h6>
          <hr />
          <CheckBox color="warning" idKey="w-in" inline />
          <h6 className="mt-4">Inline Bordered checkbox</h6>
          <hr />
          <CheckBox color="warning" idKey="w-in-fill" file inline />
        </Col>
        <Col xl={4} md={6} className="mb-5">
          <h5>Info checkbox</h5>
          <hr />
          <CheckBox color="info" idKey="i" />
          <h6 className="mt-4">Bordered checkbox</h6>
          <hr />
          <CheckBox color="info" idKey="i-file" file />
          <h6 className="mt-4">Inline checkbox</h6>
          <hr />
          <CheckBox color="info" idKey="i-in" inline />
          <h6 className="mt-4">Inline Bordered checkbox</h6>
          <hr />
          <CheckBox color="info" idKey="i-in-fill" file inline />
        </Col>
      </Fragment>
    );
  }
}

export default FormCheck;
