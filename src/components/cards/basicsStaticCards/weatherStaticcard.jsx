import React, { PureComponent } from "react";
import { Row, Col, Card, CardBody, FormGroup, Label } from "reactstrap";
import * as Icons from "react-feather";

class WeatherStaticCard extends PureComponent {
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
      <Card>
        <CardBody>
          <h6 className="mb-1">{props.place}</h6>
          <span className="d-block mb-2">{this.today}</span>
          <Row className="align-items-center justify-content-center">
            <Col xs="auto">
              <h2 className="text-c-purple m-0">
                <Icons.CloudSnow className="text-muted mr-2" size={36} />
                {props.weather}
                <sup className="f-20">°</sup>
              </h2>
            </Col>
            <Col className="text-right">
              <FormGroup className="mb-1">
                <Label className="m-r-5 f-20 mb-0">°C</Label>
                <div className="switch switch-primary d-inline ">
                  <input type="checkbox" id="switch-a-1" defaultChecked />
                  <Label for="switch-a-1" className="cr" />
                </div>
                <Label className="m-l-5 f-20 mb-0">°F</Label>
              </FormGroup>
              <span className="d-block mt-1">Partly Cloudy</span>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default WeatherStaticCard;
