// import external modules
import React, { Component } from "react";
import { Card, Badge, CardHeader, CardBody } from "reactstrap";

class PillBadge extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Pill Badges</h5>
        </CardHeader>
        <CardBody>
          <Badge className="m-r-5" color="primary" pill>
            Primary
          </Badge>
          <Badge className="m-r-5" color="secondary" pill>
            Secondary
          </Badge>
          <Badge className="m-r-5" color="success" pill>
            Success
          </Badge>
          <Badge className="m-r-5" color="danger" pill>
            Danger
          </Badge>
          <Badge className="m-r-5" color="warning" pill>
            Warning
          </Badge>
          <Badge className="m-r-5" color="info" pill>
            Info
          </Badge>
          <Badge className="m-r-5" color="light" pill>
            Light
          </Badge>
          <Badge className="m-r-5" color="dark" pill>
            Dark
          </Badge>
        </CardBody>
      </Card>
    );
  }
}

export default PillBadge;
