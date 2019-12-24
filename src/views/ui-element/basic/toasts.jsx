// import external modules
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// import internal(own) modules
import BasicToast from "./example/toast/basicToast";
import TranslucentToast from "./example/toast/toastTranslucent";
import StackingToast from "./example/toast/toastStacking";
import ToastDatadelay from "./example/toast/toastDatadelay";
import ToastPlacement from "./example/toast/toastPlacement";

class Toasts extends Component {
  render() {
    return (
      <Row>
        <Col sm="6">
          <BasicToast />
        </Col>
        <Col sm="6">
          <TranslucentToast />
        </Col>
        <Col md="6">
          <StackingToast />
        </Col>
        <Col sm="6">
          <ToastDatadelay />
        </Col>
        <Col sm="12">
          <ToastPlacement />
        </Col>
      </Row>
    );
  }
}

export default Toasts;
