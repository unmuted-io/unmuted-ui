import React, { PureComponent } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ImprestionStaticCard extends PureComponent {
  render() {
    const props = this.props;
    return (
      <Card className="comp-card">
        <CardBody>
          <Row className="align-items-center">
            <Col>
              <h6 className="m-b-20">{props.title}</h6>
              <h3 className={`text-c-${props.color}`}>{props.static}</h3>
              <p className="m-b-0">{props.date}</p>
            </Col>
            <Col xs="auto">
              <i className={`bg-c-${props.color}`}>
                <FontAwesomeIcon icon={props.icon} />
              </i>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default ImprestionStaticCard;
