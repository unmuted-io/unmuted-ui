// import external modules
import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Toast,
  ToastBody,
  ToastHeader
} from "reactstrap";

class ToastPlacement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleLeft: false,
      toggleCenter: false,
      toggleRight: false,
      centeralign: false
    };

    this.toggleLeft = this.toggleLeft.bind(this);
    this.toggleCenter = this.toggleCenter.bind(this);
    this.toggleRight = this.toggleRight.bind(this);
    this.centeralign = this.centeralign.bind(this);
  }

  toggleLeft() {
    this.setState({
      toggleLeft: !this.state.toggleLeft
    });
    setTimeout(
      () => this.setState({ toggleLeft: !this.state.toggleLeft }),
      1000
    );
  }
  toggleCenter() {
    this.setState({
      toggleCenter: !this.state.toggleCenter
    });
    setTimeout(
      () => this.setState({ toggleCenter: !this.state.toggleCenter }),
      1000
    );
  }
  toggleRight() {
    this.setState({
      toggleRight: !this.state.toggleRight
    });
    setTimeout(
      () => this.setState({ toggleRight: !this.state.toggleRight }),
      1000
    );
  }
  centeralign() {
    this.setState({
      centeralign: !this.state.centeralign
    });
    setTimeout(
      () => this.setState({ centeralign: !this.state.centeralign }),
      1000
    );
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Placement</h5>
        </CardHeader>
        <CardBody>
          <div
            className="position-relative bg-light p-4 mb-2"
            style={{ height: "300px" }}
          >
            <div style={{ position: "absolute", top: "40px", left: "40px" }}>
              <Toast isOpen={this.state.toggleLeft} className="toast-left">
                <ToastHeader toggle={this.toggleLeft} icon="primary">
                  Bootstrap 1s
                </ToastHeader>
                <ToastBody>Hello, world! This is a toast message.</ToastBody>
              </Toast>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{
                position: "absolute",
                top: "40px",
                left: "40px",
                right: "40px"
              }}
            >
              <Toast isOpen={this.state.toggleCenter} className="toast-center">
                <ToastHeader toggle={this.toggleCenter} icon="primary">
                  Bootstrap
                </ToastHeader>
                <ToastBody>Hello, world! This is a toast message.</ToastBody>
              </Toast>
            </div>
            <div style={{ position: "absolute", top: "40px", right: "40px" }}>
              <Toast isOpen={this.state.toggleRight} className="toast-right">
                <ToastHeader toggle={this.toggleRight} icon="primary">
                  Bootstrap
                </ToastHeader>
                <ToastBody>Hello, world! This is a toast message.</ToastBody>
              </Toast>
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                minHeight: "100%"
              }}
            >
              <Toast
                isOpen={this.state.centeralign}
                className="toast-align-center"
              >
                <ToastHeader toggle={this.centeralign} icon="primary">
                  Bootstrap
                </ToastHeader>
                <ToastBody>Hello, world! This is a toast message.</ToastBody>
              </Toast>
            </div>
          </div>
          <Button color="primary" onClick={this.toggleLeft}>
            Left
          </Button>
          <Button color="primary" onClick={this.toggleCenter}>
            Center
          </Button>
          <Button color="primary" onClick={this.toggleRight}>
            Right
          </Button>
          <Button color="primary" onClick={this.centeralign}>
            Center Align
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default ToastPlacement;
