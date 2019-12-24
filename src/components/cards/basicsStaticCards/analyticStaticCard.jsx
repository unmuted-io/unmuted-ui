import React, { PureComponent } from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AnalyticStaticCard extends PureComponent {
  render() {
    const props = this.props;
    let upDown;
    if (props.status === "up") {
      upDown = <FontAwesomeIcon icon="caret-up" className="m-r-10 f-18" />;
    }
    if (props.status === "down") {
      upDown = <FontAwesomeIcon icon="caret-down" className="m-r-10 f-18" />;
    }
    return (
      <Card className={`analytic-card bg-c-${props.color}`}>
        <CardBody>
          <Row className="align-items-center m-b-25">
            <Col xs="auto">
              <FontAwesomeIcon
                icon={props.icon}
                className={`text-c-${props.color} f-18 analytic-icon`}
              />
            </Col>
            <Col className="text-right">
              <h3 className="m-b-5 text-white">{props.static}</h3>
              <h6 className="m-b-0 text-white">{props.title}</h6>
            </Col>
          </Row>
          <p className="m-b-0  text-white d-inline-block">{props.text} : </p>
          <h5 className=" text-white d-inline-block m-b-0 m-l-10">
            ${props.price}
          </h5>
          <h6 className="m-b-0 d-inline-block  text-white float-right">
            {upDown} {props.change}%
          </h6>
        </CardBody>
      </Card>
    );
  }
}

export default AnalyticStaticCard;
