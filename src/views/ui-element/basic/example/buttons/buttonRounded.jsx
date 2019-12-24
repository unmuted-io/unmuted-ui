// import external modules
import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader } from "reactstrap";

class ButtonRounded extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Rounded Button</h5>
        </CardHeader>
        <CardBody>
          <Button className="btn-rounded" color="primary">
            Primary
          </Button>
          <Button className="btn-rounded" color="secondary">
            Secondary
          </Button>
          <Button className="btn-rounded" color="success">
            Success
          </Button>
          <Button className="btn-rounded" color="danger">
            Danger
          </Button>
          <Button className="btn-rounded" color="warning">
            Warning
          </Button>
          <Button className="btn-rounded" color="info">
            Info
          </Button>
          <Button className="btn-rounded" color="light">
            Light
          </Button>
          <Button className="btn-rounded" color="dark">
            Dark
          </Button>
          <hr />
          <Button outline className="btn-rounded" color="primary">
            Primary
          </Button>
          <Button outline className="btn-rounded" color="secondary">
            Secondary
          </Button>
          <Button outline className="btn-rounded" color="success">
            Success
          </Button>
          <Button outline className="btn-rounded" color="danger">
            Danger
          </Button>
          <Button outline className="btn-rounded" color="warning">
            Warning
          </Button>
          <Button outline className="btn-rounded" color="info">
            Info
          </Button>
          <Button outline className="btn-rounded" color="light">
            Light
          </Button>
          <Button outline className="btn-rounded" color="dark">
            Dark
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default ButtonRounded;
