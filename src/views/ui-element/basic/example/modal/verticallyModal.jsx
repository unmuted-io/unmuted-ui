// import external modules
import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class VerticallyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Vertically Centered</h5>
        </CardHeader>
        <CardBody>
          <Button color="primary" onClick={this.toggle}>
            Launch demo modal
          </Button>
          <Modal centered isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Modal Title</ModalHeader>
            <ModalBody>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={this.toggle}>Close</Button>
              <Button color="primary">Save changes</Button>
            </ModalFooter>
          </Modal>
        </CardBody>
      </Card>
    );
  }
}

export default VerticallyModal;
