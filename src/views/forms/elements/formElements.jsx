import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import FormControls from "./example/formControls";
import FormSizing from "./example/formSizing";
import FormRange from "./example/formRange";
import FormReadOnly from "./example/formReadOnly";
import FormInline from "./example/formInline";
import FormGrid from "./example/formGrid";
import FormHorizontal from "./example/formHorizontal";
import FormHelpText from "./example/formHelpText";
import FormCustom from "./example/formCustom";
import FormButtons from "./example/formButtons";
import FormInputGroup from "./example/formInputGroup";
import FormCheckboxesRadios from "./example/formCheckboxesRadios";
import FormValidation from "./example/formValidation";

class FormElements extends Component {
  render() {
    return (
      <Row>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Basic Componant</h5>
            </CardHeader>
            <CardBody>
              <h5>Form controls</h5>
              <hr />
              <FormControls />
              <h5 className="mt-5">Sizing</h5>
              <hr />
              <FormSizing />
              <h5 className="mt-5">Range Inputs</h5>
              <hr />
              <FormRange />
              <FormReadOnly />
              <h5 className="mt-5">Inline</h5>
              <hr />
              <FormInline />
              <h5 className="mt-5">Form Grid</h5>
              <hr />
              <FormGrid />
              <FormHorizontal />
              <h5 className="mt-5">Help Text</h5>
              <hr />
              <FormHelpText />
              <FormValidation />
              <h3 className="mt-5">Checkboxes and Radios</h3>
              <FormCheckboxesRadios />
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Input Group</h5>
            </CardHeader>
            <CardBody>
              <FormInputGroup />
              <h5 className="mt-5">Button Addons</h5>
              <hr />
              <FormButtons />
              <h3 className="mt-5">Custom Forms</h3>
              <FormCustom />
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default FormElements;
