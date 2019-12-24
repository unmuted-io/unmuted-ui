// import external modules
import React, { Component } from "react";
import { Card, Badge, CardHeader, CardBody, Button } from "reactstrap";

class ButtonBadge extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Button Badges</h5>
        </CardHeader>
        <CardBody>
          <Button color="primary">
            primary
            <Badge color="light" className="m-l-5">
              4
            </Badge>
          </Button>
          <Button color="secondary">
            secondary
            <Badge color="light" className="m-l-5">
              4
            </Badge>
          </Button>
          <Button color="success">
            success
            <Badge color="light" className="m-l-5">
              4
            </Badge>
          </Button>
          <Button color="danger">
            danger
            <Badge color="light" className="m-l-5">
              4
            </Badge>
          </Button>
          <Button color="warning">
            warning
            <Badge color="light" className="m-l-5">
              4
            </Badge>
          </Button>
          <Button color="info">
            info
            <Badge color="light" className="m-l-5">
              4
            </Badge>
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default ButtonBadge;
