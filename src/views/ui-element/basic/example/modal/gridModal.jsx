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
  Row,
  Col
} from "reactstrap";

class GridModal extends Component {
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
          <h5>Using the Grid</h5>
        </CardHeader>
        <CardBody>
          <Button color="primary" onClick={this.toggle}>
            Launch demo modal
          </Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Modal Title</ModalHeader>
            <ModalBody>
              <div className="container-fluid bd-example-row">
                <Row>
                  <Col>.col</Col>
                </Row>
                <Row>
                  <Col>.col</Col>
                  <Col>.col</Col>
                  <Col>.col</Col>
                  <Col>.col</Col>
                </Row>
                <Row>
                  <Col xs="3">.col-3</Col>
                  <Col xs="auto">.col-auto - variable width content</Col>
                  <Col xs="3">.col-3</Col>
                </Row>
                <Row>
                  <Col xs="6">.col-6</Col>
                  <Col xs="6">.col-6</Col>
                </Row>
                <Row>
                  <Col xs="6" sm="4">
                    .col-6 .col-sm-4
                  </Col>
                  <Col xs="6" sm="4">
                    .col-6 .col-sm-4
                  </Col>
                  <Col sm="4">.col-sm-4</Col>
                </Row>
                <Row>
                  <Col sm={{ size: 6, order: 2, offset: 1 }}>
                    .col-sm-6 .order-sm-2 .offset-sm-1
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" md={{ size: 6, offset: 3 }}>
                    .col-sm-12 .col-md-6 .offset-md-3
                  </Col>
                </Row>
                <Row>
                  <Col sm={{ size: "auto", offset: 1 }}>
                    .col-sm-auto .offset-sm-1
                  </Col>
                  <Col sm={{ size: "auto", offset: 1 }}>
                    .col-sm-auto .offset-sm-1
                  </Col>
                </Row>
              </div>
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

export default GridModal;
