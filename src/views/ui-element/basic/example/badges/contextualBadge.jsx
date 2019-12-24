// import external modules
import React, { Component } from "react";
import { Card, Badge, CardHeader, CardBody } from "reactstrap";

class ContextualBadge extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Contextual Variations</h5>
        </CardHeader>
        <CardBody>
          <Badge className="m-r-5" color="primary">
            Primary
          </Badge>
          <Badge className="m-r-5" color="secondary">
            Secondary
          </Badge>
          <Badge className="m-r-5" color="success">
            Success
          </Badge>
          <Badge className="m-r-5" color="danger">
            Danger
          </Badge>
          <Badge className="m-r-5" color="warning">
            Warning
          </Badge>
          <Badge className="m-r-5" color="info">
            Info
          </Badge>
          <Badge className="m-r-5" color="light">
            Light
          </Badge>
          <Badge className="m-r-5" color="dark">
            Dark
          </Badge>
        </CardBody>
      </Card>
    );
  }
}

export default ContextualBadge;
