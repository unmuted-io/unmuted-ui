import React, { PureComponent } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Sun } from "react-feather";

class WeatherPlaceCard extends PureComponent {
  render() {
    const props = this.props;
    return (
      <Card>
        <CardBody className="p-0">
          <Row className="d-flex align-items-center m-0">
            <Col className="text-center">
              <div style={{ padding: "20px 25px" }}>
                <h2 className="text-c-purple mb-0">
                  {props.weather}
                  <sup className="f-20">°</sup>
                </h2>
                <span>Sunny</span>
              </div>
            </Col>
            <Col className="text-center bg-primary p-0">
              <div style={{ padding: "20px 25px" }}>
                <Sun size={36} className="text-white" />
                <h6 className="mt-2 mb-0 text-white f-w-400">{props.place}</h6>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default WeatherPlaceCard;
