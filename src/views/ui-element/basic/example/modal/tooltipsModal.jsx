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
  ModalFooter,
  Tooltip
} from "reactstrap";
import { Link } from "react-router-dom";

class TooltipsModal extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      modal: false,
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  toggleModal() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Tooltips Modal</h5>
        </CardHeader>
        <CardBody>
          <Button color="primary" onClick={this.toggle}>
            Launch demo modal
          </Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Modal Title</ModalHeader>
            <ModalBody>
              <h5>Tooltips in a Button</h5>
              <p>
                This <Button id="btn1">button</Button> triggers a popover on
                click.
                <Tooltip
                  placement="top"
                  isOpen={this.state.tooltipOpen}
                  target="btn1"
                  toggle={this.toggleModal}
                >
                  Button Tooltip
                </Tooltip>
              </p>
              <hr />
              <h5>Tooltips in a modal</h5>
              <p>
                <Link to="#" id="btn2">
                  This link
                </Link>{" "}
                and{" "}
                <Link to="#" id="btn3">
                  That link
                </Link>
                have tooltips on hover.
                <Tooltip
                  placement="top"
                  isOpen={this.state.tooltipOpen}
                  target="btn2"
                  toggle={this.toggleModal}
                >
                  Tooltip
                </Tooltip>
                <Tooltip
                  placement="top"
                  isOpen={this.state.tooltipOpen}
                  target="btn3"
                  toggle={this.toggleModal}
                >
                  Tooltip
                </Tooltip>
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

export default TooltipsModal;
