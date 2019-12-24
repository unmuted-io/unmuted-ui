// import external modules
import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import Slider from "rc-slider";
import Tooltip from "rc-tooltip";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const marks = {
  "-10": "-10°C",
  0: <strong>0°C</strong>,
  26: "26°C",
  37: "37°C",
  50: "50°C",
  100: {
    style: {
      color: "red"
    },
    label: <strong>100°C</strong>
  }
};

class Rangeslider extends Component {
  render() {
    return (
      <Row>
        <Col lg={4} md={6}>
          <Card>
            <CardBody>
              <h6>
                Basic example with custom formatter and colored selected region
                via CSS.
              </h6>
              <hr />
              <Slider
                className="pc-range-slider"
                defaultValue={20}
                handle={handle}
              />
            </CardBody>
          </Card>
        </Col>
        <Col lg={4} md={6}>
          <Card>
            <CardBody>
              <Range
                className="pc-range-slider"
                min={0}
                max={20}
                defaultValue={[3, 10]}
                tipFormatter={value => `${value}%`}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Rangeslider;
