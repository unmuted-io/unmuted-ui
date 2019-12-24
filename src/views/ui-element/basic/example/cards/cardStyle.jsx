// import external modules
import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody, CardText } from "reactstrap";

class CardStyle extends Component {
  render() {
    return (
      <Row>
        <Col sm="4">
          <Card color="primary" className="text-white">
            <CardHeader>Header</CardHeader>
            <CardBody>
              <h5 className="card-title text-white">Primary card title</h5>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card color="secondary" className="text-white">
            <CardHeader>Header</CardHeader>
            <CardBody>
              <h5 className="card-title text-white">Secondary card title</h5>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card color="success" className="text-white">
            <CardHeader>Header</CardHeader>
            <CardBody>
              <h5 className="card-title text-white">Success card title</h5>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card color="danger" className="text-white">
            <CardHeader>Header</CardHeader>
            <CardBody>
              <h5 className="card-title text-white">Danger card title</h5>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card color="warning" className="text-white">
            <CardHeader>Header</CardHeader>
            <CardBody>
              <h5 className="card-title text-white">Warning card title</h5>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card color="info" className="text-white">
            <CardHeader>Header</CardHeader>
            <CardBody>
              <h5 className="card-title text-white">Info card title</h5>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card color="light">
            <CardHeader>Header</CardHeader>
            <CardBody>
              <h5 className="card-title ">Light card title</h5>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card color="dark" className="text-white">
            <CardHeader>Header</CardHeader>
            <CardBody>
              <h5 className="card-title text-white">Dark card title</h5>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default CardStyle;
