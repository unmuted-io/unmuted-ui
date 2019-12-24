// import external modules
import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Spinner,
  Button
} from "reactstrap";

// import internal(own) modules

class Spinners extends Component {
  render() {
    return (
      <Row>
        <Col md="6">
          <Card>
            <CardHeader>
              <h5>Border spinner</h5>
            </CardHeader>
            <CardBody>
              <Spinner />
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardHeader>
              <h5>Border spinner [ Colors ]</h5>
            </CardHeader>
            <CardBody>
              <Spinner color="primary" />
              <Spinner color="secondary" />
              <Spinner color="success" />
              <Spinner color="danger" />
              <Spinner color="warning" />
              <Spinner color="info" />
              <Spinner color="light" />
              <Spinner color="dark" />
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardHeader>
              <h5>Growing spinner</h5>
            </CardHeader>
            <CardBody>
              <Spinner type="grow" />
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardHeader>
              <h5>Growing spinner [ Colors ]</h5>
            </CardHeader>
            <CardBody>
              <Spinner type="grow" color="primary" />
              <Spinner type="grow" color="secondary" />
              <Spinner type="grow" color="success" />
              <Spinner type="grow" color="danger" />
              <Spinner type="grow" color="warning" />
              <Spinner type="grow" color="info" />
              <Spinner type="grow" color="light" />
              <Spinner type="grow" color="dark" />
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardHeader>
              <h5>Placement</h5>
            </CardHeader>
            <CardBody>
              <h6>Start</h6>
              <div className="d-flex justify-content-start">
                <Spinner />
              </div>
              <hr />
              <h6>Center</h6>
              <div className="d-flex justify-content-center">
                <Spinner />
              </div>
              <hr />
              <h6>End</h6>
              <div className="d-flex justify-content-end">
                <Spinner />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardHeader>
              <h5>Size</h5>
            </CardHeader>
            <CardBody>
              <h6>Small</h6>
              <Spinner size="sm" />
              <Spinner size="sm" type="grow" />
              <hr />
              <h6>Custom</h6>
              <Spinner style={{ width: "3rem", height: "3rem" }} />
              <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Buttons</h5>
            </CardHeader>
            <CardBody>
              <Button color="primary" disabled>
                <Spinner size="sm" />
              </Button>
              <Button color="primary" disabled>
                <Spinner size="sm" />
                Loading...
              </Button>
              <Button className="m-l-10" color="primary" disabled>
                <Spinner size="sm" type="grow" />
              </Button>
              <Button color="primary" disabled>
                <Spinner size="sm" type="grow" />
                Loading...
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Spinners;
