import React, { PureComponent } from "react";
import { Row, Col, Card, CardBody, CardFooter } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class WeatherFullCard extends PureComponent {
  constructor(props) {
    super(props);
    const mlist = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let d = new Date();
    let month = mlist[d.getMonth()];
    let hour = d.getHours();
    let min = d.getMinutes();
    let ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12;

    this.today = month + " " + hour + ":" + min + " " + ampm;
  }
  render() {
    const props = this.props;
    return (
      <Card className="borderless-card">
        <div className="weather-bg-card">
          <img className="img-fluid" src={props.image} alt="waeather bg" />
          <div className="card-body-big">
            <h5>{props.place}</h5>
            <span className="d-block">{this.today}</span>
          </div>
          <CardBody>
            <h1 className="weather-temp">{props.temp}°</h1>
            <h5>{props.status}</h5>
          </CardBody>
        </div>
        <CardFooter>
          <Row className="text-center">
            <Col>
              <h5>SUN</h5>
              <FontAwesomeIcon icon="cloud" className="weather-icon" />
              <span>18° 12°</span>
            </Col>
            <Col>
              <h5>MON</h5>
              <FontAwesomeIcon
                icon={["fab", "mixcloud"]}
                className="weather-icon"
              />
              <span>16° 13°</span>
            </Col>
            <Col>
              <h5>TUE</h5>
              <FontAwesomeIcon
                icon={["fab", "soundcloud"]}
                className="weather-icon"
              />
              <span>11° 7°</span>
            </Col>
            <Col>
              <h5>WED</h5>
              <FontAwesomeIcon
                icon={["fab", "cloudversify"]}
                className="weather-icon"
              />
              <span>21° 24°</span>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    );
  }
}

export default WeatherFullCard;
