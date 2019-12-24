// import external modules
import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

class SizeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalSm: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleSm = this.toggleSm.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  toggleSm() {
    this.setState(prevState => ({
      modalSm: !prevState.modalSm
    }));
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Optional Sizes</h5>
        </CardHeader>
        <CardBody>
          <Button color="primary" onClick={this.toggle}>
            Large modal
          </Button>
          <Button color="primary" onClick={this.toggleSm}>
            Small modal
          </Button>
          <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Large Modal</ModalHeader>
            <ModalBody>...</ModalBody>
          </Modal>
          <Modal size="sm" isOpen={this.state.modalSm} toggle={this.toggleSm}>
            <ModalHeader toggle={this.toggleSm}>Small Modal</ModalHeader>
            <ModalBody>...</ModalBody>
          </Modal>
        </CardBody>
      </Card>
    );
  }
}

export default SizeModal;
