// import external modules
import React, { Component } from "react";
import { Card, Badge, CardHeader, CardBody } from "reactstrap";

class BasicBadge extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Basic Badges</h5>
        </CardHeader>
        <CardBody>
          <h1>
            Example heading
            <Badge className="m-l-10">New</Badge>
          </h1>
          <h2>
            Example heading
            <Badge className="m-l-10">New</Badge>
          </h2>
          <h3>
            Example heading
            <Badge className="m-l-10">New</Badge>
          </h3>
          <h4>
            Example heading
            <Badge className="m-l-10">New</Badge>
          </h4>
          <h5>
            Example heading
            <Badge className="m-l-10">New</Badge>
          </h5>
          <h6>
            Example heading
            <Badge className="m-l-10">New</Badge>
          </h6>
        </CardBody>
      </Card>
    );
  }
}

export default BasicBadge;
