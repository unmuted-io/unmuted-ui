// import external modules
import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader } from "reactstrap";

class ButtonSquare extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Square Button</h5>
        </CardHeader>
        <CardBody>
          <Button className="btn-square" color="primary">
            Primary
          </Button>
          <Button className="btn-square" color="secondary">
            Secondary
          </Button>
          <Button className="btn-square" color="success">
            Success
          </Button>
          <Button className="btn-square" color="danger">
            Danger
          </Button>
          <Button className="btn-square" color="warning">
            Warning
          </Button>
          <Button className="btn-square" color="info">
            Info
          </Button>
          <Button className="btn-square" color="light">
            Light
          </Button>
          <Button className="btn-square" color="dark">
            Dark
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default ButtonSquare;
