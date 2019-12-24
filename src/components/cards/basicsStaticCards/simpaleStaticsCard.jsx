// import external modules
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Card, Row, Col, Progress } from "reactstrap";

class SimpaleStaticsCard extends PureComponent {
  static SingleCard = props => (
    <Col xl="3" md="6">
      <h6>{props.title}</h6>
      <h5 className="m-b-25">
        {props.static}
        <span className={`text-c-${props.color} m-l-10 m-r-10`}>{`${
          props.change
        }%`}</span>
      </h5>
      <Progress
        value={props.progressValue}
        color={`c-${props.color} progress-c-${props.color}`}
      />
    </Col>
  );
  render() {
    return (
      <Card className="proj-progress-card">
        <div className="card-body">
          <Row>{this.props.children}</Row>
        </div>
      </Card>
    );
  }
}

SimpaleStaticsCard.propTypes = {
  title: PropTypes.string,
  static: PropTypes.string,
  change: PropTypes.string,
  color: PropTypes.string,
  progressValue: PropTypes.string
};

SimpaleStaticsCard.defaultProps = {
  title: "Card Title",
  static: "0",
  change: "0",
  progressValue: "0"
};

export default SimpaleStaticsCard;
