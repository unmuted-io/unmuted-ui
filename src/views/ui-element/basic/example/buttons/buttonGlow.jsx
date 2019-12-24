// import external modules
import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader } from "reactstrap";

class ButtonGlow extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Glow Button</h5>
        </CardHeader>
        <CardBody>
          <Button className="btn-glow-primary" color="primary">
            Primary
          </Button>
          <Button className="btn-glow-secondary" color="secondary">
            Secondary
          </Button>
          <Button className="btn-glow-success" color="success">
            Success
          </Button>
          <Button className="btn-glow-danger" color="danger">
            Danger
          </Button>
          <Button className="btn-glow-warning" color="warning">
            Warning
          </Button>
          <Button className="btn-glow-info" color="info">
            Info
          </Button>
          <Button className="btn-glow-light" color="light">
            Light
          </Button>
          <Button className="btn-glow-dark" color="dark">
            Dark
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default ButtonGlow;
