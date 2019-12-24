// import external modules
import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader } from "reactstrap";
import * as Icons from "react-feather";

class ButtonIcon extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Only Icon</h5>
        </CardHeader>
        <CardBody>
          <Button color="primary" className="btn-icon">
            <Icons.ThumbsUp size={14} />
          </Button>
          <Button color="secondary" className="btn-icon">
            <Icons.Camera size={14} />
          </Button>
          <Button color="success" className="btn-icon">
            <Icons.CheckCircle size={14} />{" "}
          </Button>
          <Button color="danger" className="btn-icon">
            <Icons.Slash size={14} />{" "}
          </Button>
          <Button color="warning" className="btn-icon">
            <Icons.AlertTriangle size={14} />{" "}
          </Button>
          <Button color="info" className="btn-icon">
            <Icons.Info size={14} />{" "}
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default ButtonIcon;
