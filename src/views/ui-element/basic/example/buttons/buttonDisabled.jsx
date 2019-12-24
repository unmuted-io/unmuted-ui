// import external modules
import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader } from "reactstrap";

class ButtonDisabled extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Disabled Button</h5>
        </CardHeader>
        <CardBody>
          <Button disabled color="primary">
            Primary
          </Button>
          <Button disabled color="secondary">
            Secondary
          </Button>
          <Button disabled color="success">
            Success
          </Button>
          <Button disabled color="danger">
            Danger
          </Button>
          <Button outline color="warning">
            Warning
          </Button>
          <Button disabled color="info">
            Info
          </Button>
          <Button disabled color="light">
            Light
          </Button>
          <Button disabled color="dark">
            Dark
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default ButtonDisabled;
