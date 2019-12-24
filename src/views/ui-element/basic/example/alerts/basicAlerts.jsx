// import external modules
import React, { Component } from "react";
import { Alert, Card, CardBody, CardHeader } from "reactstrap";

class BasicAlert extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Basic Alerts</h5>
        </CardHeader>
        <CardBody>
          <Alert color="primary" fade={false}>
            A simple primary alert—check it out!
          </Alert>
          <Alert color="secondary" fade={false}>
            A simple secondary alert—check it out!
          </Alert>
          <Alert color="success" fade={false}>
            A simple success alert—check it out!
          </Alert>
          <Alert color="danger" fade={false}>
            A simple danger alert—check it out!
          </Alert>
          <Alert color="warning" fade={false}>
            A simple warning alert—check it out!
          </Alert>
          <Alert color="info" fade={false}>
            A simple info alert—check it out!
          </Alert>
          <Alert color="light" fade={false}>
            A simple light alert—check it out!
          </Alert>
          <Alert color="dark" fade={false}>
            A simple dark alert—check it out!
          </Alert>
        </CardBody>
      </Card>
    );
  }
}

export default BasicAlert;
