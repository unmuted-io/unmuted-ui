// import external modules
import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader } from "reactstrap";
import * as Icons from "react-feather";

class ButtonIconOutline extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Outline Icon</h5>
        </CardHeader>
        <CardBody>
          <Button outline color="primary" className="btn-icon">
            <Icons.ThumbsUp size={14} />
          </Button>
          <Button outline color="secondary" className="btn-icon">
            <Icons.Camera size={14} />
          </Button>
          <Button outline color="success" className="btn-icon">
            <Icons.CheckCircle size={14} />{" "}
          </Button>
          <Button outline color="danger" className="btn-icon">
            <Icons.Slash size={14} />{" "}
          </Button>
          <Button outline color="warning" className="btn-icon">
            <Icons.AlertTriangle size={14} />{" "}
          </Button>
          <Button outline color="info" className="btn-icon">
            <Icons.Info size={14} />{" "}
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default ButtonIconOutline;
