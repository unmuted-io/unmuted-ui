// import external modules
import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader } from "reactstrap";

class ButtonShadow extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Shadow Button</h5>
        </CardHeader>
        <CardBody>
          <Button className="shadow-1" color="primary">
            .shadow-1
          </Button>
          <Button className="shadow-2" color="success">
            .shadow-2
          </Button>
          <Button className="shadow-3" color="danger">
            .shadow-3
          </Button>
          <Button className="shadow-4" color="warning">
            .shadow-4
          </Button>
          <Button className="shadow-5" color="info">
            .shadow-5
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default ButtonShadow;
