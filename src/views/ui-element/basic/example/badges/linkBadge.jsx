// import external modules
import React, { Component } from "react";
import { Card, Badge, CardHeader, CardBody } from "reactstrap";

class LinkBadge extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Links</h5>
        </CardHeader>
        <CardBody>
          <Badge href="#" className="m-r-5" color="primary">
            Primary
          </Badge>
          <Badge href="#" className="m-r-5" color="secondary">
            Secondary
          </Badge>
          <Badge href="#" className="m-r-5" color="success">
            Success
          </Badge>
          <Badge href="#" className="m-r-5" color="danger">
            Danger
          </Badge>
          <Badge href="#" className="m-r-5" color="warning">
            Warning
          </Badge>
          <Badge href="#" className="m-r-5" color="info">
            Info
          </Badge>
          <Badge href="#" className="m-r-5" color="light">
            Light
          </Badge>
          <Badge href="#" className="m-r-5" color="dark">
            Dark
          </Badge>
        </CardBody>
      </Card>
    );
  }
}

export default LinkBadge;
