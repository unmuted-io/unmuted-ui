// import external modules
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Card, Row, Col, Progress, CardBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProductStaticsCard extends PureComponent {
  static SingleCard = props => {
    let status;
    if (props.status === "up") {
      status = <FontAwesomeIcon icon="long-arrow-alt-up" className="m-r-10" />;
    }
    if (props.status === "down") {
      status = (
        <FontAwesomeIcon icon="long-arrow-alt-down" className="m-r-10" />
      );
    }
    return (
      <Col xl="3" md="6">
        <div className="pp-cont">
          <Row className="align-items-center m-b-20">
            <Col xl="auto">
              <FontAwesomeIcon icon={props.icon} className="f-24 text-mute" />
            </Col>
            <Col className="text-right">
              <h2 className={`m-b-0 text-c-${props.color}`}>{props.static}</h2>
            </Col>
          </Row>
          <Row className="align-items-center m-b-15">
            <Col xl="auto">
              <p className="m-b-0">{props.title}</p>
            </Col>
            <Col className="text-right">
              <p className={`m-b-0 text-c-${props.color}`}>
                {status}
                {props.change}%
              </p>
            </Col>
          </Row>
          <Progress
            value={props.progressValue}
            color={`c-${props.color} progress-c-${props.color}`}
          />
        </div>
      </Col>
    );
  };
  render() {
    return (
      <Card className="product-progress-card">
        <CardBody>
          <Row className="pp-main">{this.props.children}</Row>
        </CardBody>
      </Card>
    );
  }
}

ProductStaticsCard.propTypes = {
  title: PropTypes.string,
  static: PropTypes.string,
  change: PropTypes.number,
  color: PropTypes.string,
  progressValue: PropTypes.number,
  status: PropTypes.string
};

ProductStaticsCard.defaultProps = {
  title: "Card Title",
  static: "0",
  change: 0,
  progressValue: 0
};

export default ProductStaticsCard;
