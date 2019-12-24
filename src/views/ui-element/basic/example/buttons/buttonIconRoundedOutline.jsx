// import external modules
import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader } from "reactstrap";
import * as Icons from "react-feather";

class ButtonIconRoundedOutline extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Outline Rounded Icon Dropdown</h5>
        </CardHeader>
        <CardBody>
          <Button outline color="primary" className="btn-icon btn-rounded">
            <Icons.ThumbsUp size={14} />
          </Button>
          <Button outline color="secondary" className="btn-icon btn-rounded">
            <Icons.Camera size={14} />
          </Button>
          <Button outline color="success" className="btn-icon btn-rounded">
            <Icons.CheckCircle size={14} />{" "}
          </Button>
          <Button outline color="danger" className="btn-icon btn-rounded">
            <Icons.Slash size={14} />{" "}
          </Button>
          <Button outline color="warning" className="btn-icon btn-rounded">
            <Icons.AlertTriangle size={14} />{" "}
          </Button>
          <Button outline color="info" className="btn-icon btn-rounded">
            <Icons.Info size={14} />{" "}
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default ButtonIconRoundedOutline;
