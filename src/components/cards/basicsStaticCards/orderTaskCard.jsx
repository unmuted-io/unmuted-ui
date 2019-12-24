import React, { PureComponent } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { ArrowUp } from "react-feather";

class OrderTaskCard extends PureComponent {
  render() {
    const props = this.props;
    return (
      <Card>
        <CardHeader>
          <h5>Overdue tasks</h5>
        </CardHeader>
        <CardBody>
          <Row>
            <Col>
              <h2 className="m-0">
                <ArrowUp size={36} className="text-c-green" />
                {props.task}
              </h2>
            </Col>
            <Col className="text-right">
              <h5 className="text-c-green m-0">{props.complete}%</h5>
              <span className="d-block">Last Month:{props.lastMonth}</span>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default OrderTaskCard;
