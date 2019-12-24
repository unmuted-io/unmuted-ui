// import external modules
import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader } from "reactstrap";
import * as Icons from "react-feather";

class ButtonIconTextOutline extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Outline Icon Buttons</h5>
        </CardHeader>
        <CardBody>
          <Button outline color="primary">
            <Icons.ThumbsUp
              size={14}
              style={{ marginRight: "12px", marginTop: "-3px" }}
            />
            Primary
          </Button>
          <Button outline color="secondary">
            <Icons.Camera
              size={14}
              style={{ marginRight: "12px", marginTop: "-3px" }}
            />
            Secondary
          </Button>
          <Button outline color="success">
            <Icons.CheckCircle
              size={14}
              style={{ marginRight: "12px", marginTop: "-3px" }}
            />
            Success
          </Button>
          <Button outline color="danger">
            <Icons.Slash
              size={14}
              style={{ marginRight: "12px", marginTop: "-3px" }}
            />
            Danger
          </Button>
          <Button outline color="warning">
            <Icons.AlertTriangle
              size={14}
              style={{ marginRight: "12px", marginTop: "-3px" }}
            />
            Warning
          </Button>
          <Button outline color="info">
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

export default ButtonIconTextOutline;
