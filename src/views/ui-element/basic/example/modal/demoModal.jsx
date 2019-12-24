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

class DemoModal extends Component {
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
          <h5>Demo Modal</h5>
        </CardHeader>
        <CardBody>
          <div className="bd-example-modal mb-4">
            <div className="modal" role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalBody>
                    <p>Modal body text goes here.</p>
                  </ModalBody>
                  <ModalFooter>
                    <Button>Close</Button>
                    <Button color="primary"> Save changes</Button>
                  </ModalFooter>
                </div>
              </div>
            </div>
          </div>
          <Button color="primary" onClick={this.toggle}>
            Launch demo modal
          </Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Modal Title</ModalHeader>
            <ModalBody>
              <p>Modal body text goes here.</p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={this.toggle}>Close</Button>
              <Button color="primary"> Save changes</Button>
            </ModalFooter>
          </Modal>
        </CardBody>
      </Card>
    );
  }
}

export default DemoModal;
