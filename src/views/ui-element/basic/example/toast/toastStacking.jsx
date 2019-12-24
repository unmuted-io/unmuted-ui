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

class StackingToast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      show: !this.state.show
    });
    setTimeout(() => this.setState({ show: !this.state.show }), 1000);
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Stacking</h5>
        </CardHeader>
        <CardBody>
          <div className="bg-light p-4 mb-2" style={{ height: "250px" }}>
            <Toast isOpen={this.state.show}>
              <ToastHeader toggle={this.toggle} icon="primary">
                Bootstrap
              </ToastHeader>
              <ToastBody>Hello, world! This is a toast message.</ToastBody>
            </Toast>
            <Toast isOpen={this.state.show}>
              <ToastHeader toggle={this.toggle} icon="primary">
                Bootstrap
              </ToastHeader>
              <ToastBody>Hello, world! This is a toast message.</ToastBody>
            </Toast>
          </div>
          <Button color="primary" onClick={this.toggle}>
            click
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default StackingToast;
