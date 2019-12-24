// import external modules
import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  ButtonGroup,
  Button,
  Row,
  Col
} from "reactstrap";

class ButtonToolbarSize extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Button Toolbar Size</h5>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xl="4" md="12" className="mb-2">
              <p>Large size button group</p>
              <ButtonGroup>
                <Button size="lg">Left</Button>
                <Button size="lg">Middle</Button>
                <Button size="lg">Right</Button>
              </ButtonGroup>
            </Col>
            <Col xl="4" md="12" className="mb-2">
              <p>this is default size</p>
              <ButtonGroup>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </Col>
            <Col xl="4" md="12" className="mb-2">
              <p>Small size button group</p>
              <ButtonGroup>
                <Button size="sm">Left</Button>
                <Button size="sm">Middle</Button>
                <Button size="sm">Right</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default ButtonToolbarSize;
