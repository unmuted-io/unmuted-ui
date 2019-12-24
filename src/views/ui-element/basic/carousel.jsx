// import external modules
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// import internal(own) modules
import {
  BasicCarousel,
  ControlsCarousel,
  IndicatorsCarousel,
  CrossfadeCarousel,
  CaptionCarousel
} from "./example/carousel/carousel";

class Carousel extends Component {
  render() {
    return (
      <Row>
        <Col sm="4">
          <BasicCarousel />
        </Col>
        <Col sm="4">
          <ControlsCarousel />
        </Col>
        <Col sm="4">
          <IndicatorsCarousel />
        </Col>
        <Col sm="6">
          <CrossfadeCarousel />
        </Col>
        <Col sm="6">
          <CaptionCarousel />
        </Col>
      </Row>
    );
  }
}

export default Carousel;
