import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import AreaChartBasic from "../../components/googlechart/areaChartBasic";
import AreaChartStacking from "../../components/googlechart/areaChartStacking";
import BarChartBasic from "../../components/googlechart/barChartBasic";
import BubbleChart from "../../components/googlechart/BubbleChart";
import CandlestickCharts from "../../components/googlechart/CandlestickChart";
import WaterfallChart from "../../components/googlechart/WaterfallChart";
import ComboChart from "../../components/googlechart/ComboChart";
import DonutChart from "../../components/googlechart/DonutChart";
import ExploadingChart from "../../components/googlechart/ExploadingChart";
import ThresholdChart from "../../components/googlechart/ThresholdChart";

class GoogleChart extends Component {
  render() {
    return (
      <Row>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Area Chart</h5>
            </CardHeader>
            <CardBody className="text-center">
              <AreaChartBasic />
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Stacking Area Chart</h5>
            </CardHeader>
            <CardBody className="text-center">
              <AreaChartStacking />
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Bar Chart</h5>
            </CardHeader>
            <CardBody className="text-center">
              <BarChartBasic />
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Bubble Chart</h5>
            </CardHeader>
            <CardBody className="text-center">
              <BubbleChart />
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Candlestick Chart</h5>
            </CardHeader>
            <CardBody className="text-center">
              <CandlestickCharts />
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Waterfall Chart</h5>
            </CardHeader>
            <CardBody className="text-center">
              <WaterfallChart />
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Combo Chart</h5>
            </CardHeader>
            <CardBody className="text-center">
              <ComboChart />
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Donut Chart</h5>
            </CardHeader>
            <CardBody className="text-center">
              <DonutChart />
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Exploading A Slice Chart</h5>
            </CardHeader>
            <CardBody className="text-center">
              <ExploadingChart />
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Slice Visibility Threshold Chart</h5>
            </CardHeader>
            <CardBody className="text-center">
              <ThresholdChart />
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default GoogleChart;
