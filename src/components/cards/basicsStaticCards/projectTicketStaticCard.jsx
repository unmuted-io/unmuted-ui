import React, { PureComponent } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProjectTicketStaticCard extends PureComponent {
  render() {
    const props = this.props;
    return (
      <Card className="proj-t-card">
        <CardBody>
          <Row className="align-items-center m-b-30">
            <Col xs="auto">
              <FontAwesomeIcon
                icon={props.icon}
                className={`text-c-${props.color} f-30`}
              />
            </Col>
            <Col className="p-l-0">
              <h6 className="m-b-5">{props.title}</h6>
              <h6 className={`m-b-0 text-c-${props.color}`}>Live Update</h6>
            </Col>
          </Row>
          <Row className="align-items-center text-center">
            <Col>
              <h6 className="m-b-0">{props.staticLeft}</h6>
            </Col>
            <Col>
              <FontAwesomeIcon
                icon="exchange-alt"
                className={`text-c-${props.color} f-18`}
              />
            </Col>
            <Col>
              <h6 className="m-b-0">{props.staticRight}</h6>
            </Col>
          </Row>
          <h6 className={`pt-badge bg-c-${props.color}`}>{props.change}%</h6>
        </CardBody>
      </Card>
    );
  }
}

export default ProjectTicketStaticCard;
