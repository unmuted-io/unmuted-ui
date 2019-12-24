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
  Form,
  FormGroup,
  Label,
  Input,
  ModalFooter
} from "reactstrap";

class VaryingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalmdo: false,
      modalfat: false,
      modalbootstrap: false
    };

    this.togglemdo = this.togglemdo.bind(this);
    this.togglefat = this.togglefat.bind(this);
    this.togglebootstrap = this.togglebootstrap.bind(this);
  }

  togglemdo() {
    this.setState(prevState => ({
      modalmdo: !prevState.modalmdo
    }));
  }
  togglefat() {
    this.setState(prevState => ({
      modalfat: !prevState.modalfat
    }));
  }
  togglebootstrap() {
    this.setState(prevState => ({
      modalbootstrap: !prevState.modalbootstrap
    }));
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Varying Modal Content</h5>
        </CardHeader>
        <CardBody>
          <Button color="primary" onClick={this.togglemdo}>
            Open modal for @mdo
          </Button>
          <Button color="primary" onClick={this.togglefat}>
            Open modal for @fat
          </Button>
          <Button color="primary" onClick={this.togglebootstrap}>
            Open modal for @bootstrap
          </Button>
          <Modal isOpen={this.state.modalmdo} toggle={this.togglemdo}>
            <ModalHeader toggle={this.togglemdo}>
              New message to @mdo
            </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="recipient-name">Recipient:</Label>
                  <Input type="text" id="recipient-name" defaultValue="@mdo" />
                </FormGroup>
                <FormGroup>
                  <Label for="message-text">Message:</Label>
                  <Input type="textarea" id="message-text" />
                </FormGroup>
                <ModalFooter>
                  <Button onClick={this.togglemdo}>Close</Button>
                  <Button color="primary">Send message</Button>
                </ModalFooter>
              </Form>
            </ModalBody>
          </Modal>
          <Modal isOpen={this.state.modalfat} toggle={this.togglefat}>
            <ModalHeader toggle={this.togglefat}>
              New message to @fat
            </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="recipient-name">Recipient:</Label>
                  <Input type="text" id="recipient-name" defaultValue="@fat" />
                </FormGroup>
                <FormGroup>
                  <Label for="message-text">Message:</Label>
                  <Input type="textarea" id="message-text" />
                </FormGroup>
                <ModalFooter>
                  <Button onClick={this.togglefat}>Close</Button>
                  <Button color="primary">Send message</Button>
                </ModalFooter>
              </Form>
            </ModalBody>
          </Modal>
          <Modal
            isOpen={this.state.modalbootstrap}
            toggle={this.togglebootstrap}
          >
            <ModalHeader toggle={this.togglebootstrap}>
              New message to @getbootstrap
            </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="recipient-name">Recipient:</Label>
                  <Input
                    type="text"
                    id="recipient-name"
                    defaultValue="@getbootstrap"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="message-text">Message:</Label>
                  <Input type="textarea" id="message-text" />
                </FormGroup>
                <ModalFooter>
                  <Button onClick={this.togglebootstrap}>Close</Button>
                  <Button color="primary">Send message</Button>
                </ModalFooter>
              </Form>
            </ModalBody>
          </Modal>
        </CardBody>
      </Card>
    );
  }
}

export default VaryingModal;
