import React, { PureComponent } from "react";
import { Row, Col, Card, CardBody, Progress } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class OrderStaticCard extends PureComponent {
  render() {
    const props = this.props;
    return (
      <Card>
        <CardBody>
          <Row className="align-items-start">
            <Col>
              <h2>{props.static}</h2>
            </Col>
            <Col xs="auto" className="text-right">
              <h6 className="text-muted">New Order</h6>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={6}>
              <span className="d-block">
                <FontAwesomeIcon
                  icon="circle"
                  className="text-c-green f-10 m-r-10"
                />
                India
              </span>
              <span className="d-block">
                <FontAwesomeIcon
                  icon="circle"
                  className="text-c-red f-10 m-r-10"
                />
                France
              </span>
              <span className="d-block">
                <FontAwesomeIcon
                  icon="circle"
                  className="text-c-blue f-10 m-r-10"
                />
                Other
              </span>
            </Col>
            <Col sm={6}>
              <span className="d-block">
                <FontAwesomeIcon
                  icon="circle"
                  className="text-c-yellow f-10 m-r-10"
                />
                United states
              </span>
              <span className="d-block">
                <FontAwesomeIcon
                  icon="circle"
                  className="text-c-purple f-10 m-r-10"
                />
                United Kingdom
              </span>
            </Col>
          </Row>
          <Progress className="mt-3" style={{ height: "20px" }} multi>
            <Progress
              bar
              color="success"
              className="rounded"
              value={props.success}
            >
              {props.success}%
            </Progress>
            <Progress
              bar
              color="danger"
              className="rounded"
              value={props.danger}
            >
              {props.danger}%
            </Progress>
            <Progress
              bar
              color="primary"
              className="rounded"
              value={props.primary}
            >
              {props.primary}%
            </Progress>
            <Progress
              bar
              color="warning"
              className="rounded"
              value={props.warning}
            >
              {props.warning}%
            </Progress>
            <Progress bar color="info" className="rounded" value={props.info}>
              {props.info}%
            </Progress>
          </Progress>
        </CardBody>
      </Card>
    );
  }
}

export default OrderStaticCard;
