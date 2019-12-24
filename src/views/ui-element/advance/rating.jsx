// import external modules
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import Rating from "react-rating";

const RatingCard = ({ title, className, children }) => (
  <Col xl={4} lg={6} md={6}>
    <Card>
      <CardHeader>
        <h5> {title} </h5>
      </CardHeader>
      <CardBody>
        <div className="box-body">
          <div className={className}>
            <div className="br-widget">{children}</div>
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
);

class Ratings extends Component {
  state = {
    ratingCount: 7,
    movieRating: 2,
    reverseRating: 2,
    horizontalRating: 3,
    fractionalRating: 5.6
  };
  render() {
    const movieRate = ["Bad", "Mediocre", "Good", "Awesome"];
    const reverseRate = [
      "Strongly Agree",
      "Agree",
      "Neither Agree or Disagree",
      "Disagree",
      "Strongly Disagree"
    ];

    return (
      <Row>
        <RatingCard title="1/10 Rating" className="br-theme-bars-1to10">
          <Rating
            emptySymbol={<span className="br" />}
            fullSymbol={<span className="br-selected" />}
            stop={10}
            initialRating={this.state.ratingCount}
            onChange={rate => this.setState({ ratingCount: rate })}
            onHover={rate =>
              (document.getElementById("current-rating").innerHTML =
                rate || this.state.ratingCount)
            }
          />
          <span className="br-current-rating" id="current-rating" />
        </RatingCard>
        <RatingCard title="Movie Rating" className="br-theme-bars-movie">
          <Rating
            emptySymbol={<span className="br" />}
            fullSymbol={<span className="br-selected" />}
            stop={4}
            initialRating={this.state.movieRating}
            onChange={rate => this.setState({ movieRating: rate })}
            onHover={rate =>
              (document.getElementById("movie-rating").innerHTML =
                movieRate[rate - 1] || movieRate[this.state.movieRating - 1])
            }
          />
          <div id="movie-rating" className="current-rating-movie">
            {movieRate[this.state.movieRating - 1]}
          </div>
        </RatingCard>
        <RatingCard title="Square Rating" className="br-theme-bars-square">
          <Rating
            initialRating={3}
            emptySymbol={[1, 2, 3, 4, 5].map(n => (
              <span className="br">{n}</span>
            ))}
            fullSymbol={[1, 2, 3, 4, 5].map(n => (
              <span className="br-selected">{n}</span>
            ))}
          />
        </RatingCard>
        <RatingCard title="Pill Rating" className="br-theme-bars-pill">
          <Rating
            initialRating={3}
            emptySymbol={["A", "B", "C", "D", "E", "F"].map(n => (
              <span className="br">{n}</span>
            ))}
            fullSymbol={["A", "B", "C", "D", "E", "F"].map(n => (
              <span className="br-selected">{n}</span>
            ))}
          />
        </RatingCard>
        <RatingCard title="Reverse Rating" className="br-theme-bars-reversed">
          <Rating
            initialRating={this.state.reverseRating}
            emptySymbol={<span className="br" />}
            fullSymbol={<span className="br-selected" />}
            onChange={rate => this.setState({ reverseRating: rate })}
            onHover={rate =>
              (document.getElementById("reverse-rating").innerHTML =
                reverseRate[rate - 1] ||
                reverseRate[this.state.reverseRating - 1])
            }
          />
          <div id="reverse-rating" className="current-rating-reverse">
            {reverseRate[this.state.reverseRating - 1]}
          </div>
        </RatingCard>
        <RatingCard
          title="Horizontal Rating"
          className="br-theme-bars-horizontal"
        >
          <div id="horizontal-rating" className="current-rating-horizontal">
            {this.state.horizontalRating}
          </div>
          <Rating
            stop={10}
            initialRating={this.state.horizontalRating}
            emptySymbol={<span className="br" />}
            fullSymbol={<span className="br-selected" />}
            onChange={rate => this.setState({ horizontalRating: rate })}
            onHover={rate =>
              (document.getElementById("horizontal-rating").innerHTML =
                rate || this.state.horizontalRating)
            }
          />
        </RatingCard>
        <RatingCard
          title="Font Awesome Rating"
          className="stars-example-fontawesome"
        >
          <Rating
            stop={5}
            initialRating={0}
            emptySymbol={
              <span className="br">
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  style={{ color: "#d2d2d2" }}
                />
              </span>
            }
            fullSymbol={
              <span className="br">
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  style={{ color: "#EDB867" }}
                />
              </span>
            }
          />
        </RatingCard>
        <RatingCard
          title="Fractional Star Rating"
          className="stars-example-fontawesome"
        >
          <Rating
            stop={10}
            initialRating={this.state.fractionalRating}
            emptySymbol={
              <span className="br">
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  style={{ color: "#d2d2d2" }}
                />
              </span>
            }
            fullSymbol={
              <span className="br">
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  style={{ color: "#50E3C2" }}
                />
              </span>
            }
            onChange={rate => this.setState({ fractionalRating: rate })}
          />
          <p>Current rating: 5.6 Your rating: {this.state.fractionalRating}</p>
        </RatingCard>
      </Row>
    );
  }
}

export default Ratings;
