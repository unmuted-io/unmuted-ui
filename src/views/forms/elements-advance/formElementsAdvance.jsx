import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import FormSwitch from "./example/formSwitch";
import FormRadio from "./example/formRadio";
import FormCheck from "./example/formCheck";

class FormElementsAdvance extends Component {
  render() {
    return (
      <Row>
        <Col sm="12">
          <Card>
            <CardHeader>
              <h5>Switches</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <FormSwitch />
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Radio</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <FormRadio />
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Checkbox</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <FormCheck />
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default FormElementsAdvance;
