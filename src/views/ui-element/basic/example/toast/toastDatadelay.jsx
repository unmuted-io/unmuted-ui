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

class ToastDatadelay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show1: false,
      show3: false,
      show5: false
    };

    this.toggle1 = this.toggle1.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggle5 = this.toggle5.bind(this);
  }

  toggle1() {
    this.setState({
      show1: !this.state.show1
    });
    setTimeout(() => this.setState({ show1: !this.state.show1 }), 1000);
  }
  toggle3() {
    this.setState({
      show3: !this.state.show3
    });
    setTimeout(() => this.setState({ show3: !this.state.show3 }), 3000);
  }
  toggle5() {
    this.setState({
      show5: !this.state.show5
    });
    setTimeout(() => this.setState({ show5: !this.state.show5 }), 5000);
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Data-delay</h5>
        </CardHeader>
        <CardBody>
          <div className="bg-light p-4 mb-2" style={{ height: "250px" }}>
            <Toast isOpen={this.state.show1}>
              <ToastHeader toggle={this.toggle1} icon="primary">
                Bootstrap 1s
              </ToastHeader>
              <ToastBody>Hello, world! This is a toast message.</ToastBody>
            </Toast>
            <Toast isOpen={this.state.show3}>
              <ToastHeader toggle={this.toggle3} icon="primary">
                Bootstrap 3s
              </ToastHeader>
              <ToastBody>Hello, world! This is a toast message.</ToastBody>
            </Toast>
            <Toast isOpen={this.state.show5}>
              <ToastHeader toggle={this.toggle5} icon="primary">
                Bootstrap 5s
              </ToastHeader>
              <ToastBody>Hello, world! This is a toast message.</ToastBody>
            </Toast>
          </div>
          <Button color="primary" onClick={this.toggle1}>
            1 sec
          </Button>
          <Button color="primary" onClick={this.toggle3}>
            3 sec
          </Button>
          <Button color="primary" onClick={this.toggle5}>
            5 sec
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default ToastDatadelay;
