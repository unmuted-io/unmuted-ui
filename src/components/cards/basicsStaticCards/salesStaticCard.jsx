import React, { PureComponent } from "react";
import { Row, Col, Card, CardBody, Progress } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SalesStaticCard extends PureComponent {
  render() {
    const props = this.props;
    return (
      <Card>
        <CardBody>
          <Row>
            <Col xs="auto">
              <h6>{props.title}</h6>
            </Col>
            <Col className="text-right">
              <h2>{props.static}</h2>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <h3 className="m-0">
                <FontAwesomeIcon
                  icon="circle"
                  className="text-success f-10 m-r-5"
                />
                {props.desktop}%
              </h3>
              <span className="ml-3">Desktop</span>
            </Col>
            <Col>
              <h3 className="m-0">
                <FontAwesomeIcon
                  icon="circle"
                  className="text-primary f-10 m-r-5"
                />
                {props.tablet}%
              </h3>
              <span className="ml-3">Tablet</span>
            </Col>
            <Col>
              <h3 className="m-0">
                <FontAwesomeIcon
                  icon="circle"
                  className="text-danger f-10 m-r-5"
                />
                {props.mobile}%
              </h3>
              <span className="ml-3">Mobile</span>
            </Col>
          </Row>
          <Progress multi className="mt-4" style={{ height: "8px" }}>
            <Progress bar color="success" className="rounded mr-1" value="66" />
            <Progress bar color="primary" className="rounded mr-1" value="26" />
            <Progress bar color="danger" className="rounded mr-1" value="8" />
          </Progress>
        </CardBody>
      </Card>
    );
  }
}

export default SalesStaticCard;
