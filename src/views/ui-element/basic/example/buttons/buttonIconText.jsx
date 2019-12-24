// import external modules
import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader } from "reactstrap";
import * as Icons from "react-feather";

class ButtonIconText extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Button With Icon</h5>
        </CardHeader>
        <CardBody>
          <Button color="primary">
            <Icons.ThumbsUp
              size={14}
              style={{ marginRight: "12px", marginTop: "-3px" }}
            />
            Primary
          </Button>
          <Button color="secondary">
            <Icons.Camera
              size={14}
              style={{ marginRight: "12px", marginTop: "-3px" }}
            />
            Secondary
          </Button>
          <Button color="success">
            <Icons.CheckCircle
              size={14}
              style={{ marginRight: "12px", marginTop: "-3px" }}
            />
            Success
          </Button>
          <Button color="danger">
            <Icons.Slash
              size={14}
              style={{ marginRight: "12px", marginTop: "-3px" }}
            />
            Danger
          </Button>
          <Button color="warning">
            <Icons.AlertTriangle
              size={14}
              style={{ marginRight: "12px", marginTop: "-3px" }}
            />
            Warning
          </Button>
          <Button color="info">
            <Icons.Info
              size={14}
              style={{ marginRight: "12px", marginTop: "-3px" }}
            />
            Info
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default ButtonIconText;
