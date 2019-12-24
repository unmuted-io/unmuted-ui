// import external modules
import React, { Component } from "react";
import { Card, CardBody, CardHeader, UncontrolledAlert } from "reactstrap";

class DismissingAlerts extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Dismissing</h5>
        </CardHeader>
        <CardBody>
          <UncontrolledAlert color="primary">
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
          </UncontrolledAlert>
          <UncontrolledAlert color="secondary">
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
          </UncontrolledAlert>
          <UncontrolledAlert color="success">
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
          </UncontrolledAlert>
          <UncontrolledAlert color="danger">
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
          </UncontrolledAlert>
          <UncontrolledAlert color="warning">
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
          </UncontrolledAlert>
          <UncontrolledAlert color="info">
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
          </UncontrolledAlert>
          <UncontrolledAlert color="light">
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
          </UncontrolledAlert>
          <UncontrolledAlert color="dark">
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
          </UncontrolledAlert>
        </CardBody>
      </Card>
    );
  }
}

export default DismissingAlerts;
