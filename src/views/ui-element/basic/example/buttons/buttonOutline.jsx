// import external modules
import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader } from "reactstrap";

class ButtonOutline extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Outline</h5>
        </CardHeader>
        <CardBody>
          <Button outline color="primary">
            Primary
          </Button>
          <Button outline color="secondary">
            Secondary
          </Button>
          <Button outline color="success">
            Success
          </Button>
          <Button outline color="danger">
            Danger
          </Button>
          <Button outline color="warning">
            Warning
          </Button>
          <Button outline color="info">
            Info
          </Button>
          <Button outline color="light">
            Light
          </Button>
          <Button outline color="dark">
            Dark
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default ButtonOutline;
