// import external modules
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Rating from "react-rating";
import { Card, Row, Col } from "reactstrap";

class RatingStaticCard extends PureComponent {
  render() {
    let initialRating;
    if (this.props.initialRating < 0) {
      initialRating = 0;
    } else if (this.props.initialRating < 3 && this.props.initialRating > 0) {
      initialRating = 1;
    } else {
      initialRating = this.props.initialRating / 4;
    }

    return (
      <Card className="rating-bar">
        <div className="card-body">
          <Row className="mb-4">
            <Col>
              <h6 className="m-0">{this.props.title}</h6>
              <span>{this.props.text}</span>
            </Col>
            <Col>
              <h2 className="text-right">{`${this.props.initialRating}%`}</h2>
            </Col>
          </Row>
          <div className="br-theme-bars">
            <div className="br-widget">
              <Rating
                emptySymbol={<span className="br-line br-none" />}
                fullSymbol={<span className="br-line  br-selecteds" />}
                stop={25}
                initialRating={initialRating}
              />
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

RatingStaticCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  initialRating: PropTypes.number
};

RatingStaticCard.defaultProps = {
  title: "Card title",
  text: "Successfull tested",
  initialRating: 0
};

export default RatingStaticCard;
