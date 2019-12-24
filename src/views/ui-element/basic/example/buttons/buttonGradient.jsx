// import external modules
import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader } from "reactstrap";

class ButtonGradient extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Gradient Button</h5>
        </CardHeader>
        <CardBody>
          <Button color="gradient-primary">Primary</Button>
          <Button color="gradient-secondary">Secondary</Button>
          <Button color="gradient-success">Success</Button>
          <Button color="gradient-danger">Danger</Button>
          <Button color="gradient-warning">Warning</Button>
          <Button color="gradient-info">Info</Button>
          <Button color="gradient-light">Light</Button>
          <Button color="gradient-dark">Dark</Button>
          <Button color="gradient-link">Link</Button>
        </CardBody>
      </Card>
    );
  }
}

export default ButtonGradient;
