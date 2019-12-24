import React, { Component } from "react";
import { Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import AreaChart from "../../components/echart/areaChart";
import AreaChart2 from "../../components/echart/areaChart2";
import BarBasicColumnChart from "../../components/echart/barBasicColumnChart";
import BarHorizontalChart from "../../components/echart/barHorizontalChart";
import PieTimelineChart from "../../components/echart/pieTimelineChart";
import PieBasicColumnChart from "../../components/echart/pieBasicColumnChart";
import PieDoughnutChart from "../../components/echart/pieDoughnutChart";
import GaugeChart from "../../components/echart/gaugeChart";
import DynamicLineBarChart from "../../components/echart/DynamicLineBarChart";

class EChart extends Component {
  render() {
    return (
      <Row>
        <Col xl={6} md={12}>
          <Card>
            <CardHeader>
              <h5>Area Chart</h5>
            </CardHeader>
            <CardBody className="text-center">
              <AreaChart />
            </CardBody>
          </Card>
        </Col>
        <Col xl={6} md={12}>
          <Card>
            <CardHeader>
              <h5>Area Chart</h5>
            </CardHeader>
            <CardBody className="text-center">
              <AreaChart2 />
            </CardBody>
          </Card>
        </Col>
        <Col xl={6} md={12}>
          <Card>
            <CardHeader>
              <h5>Bar [ Basic Column ] Chart</h5>
            </CardHeader>
            <CardBody className="text-center">
              <BarBasicColumnChart />
            </CardBody>
          </Card>
        </Col>
        <Col xl={6} md={12}>
          <Card>
            <CardHeader>
              <h5>Bar [ Basic Bar ] Chart</h5>
            </CardHeader>
            <CardBody className="text-center">
              <BarHorizontalChart />
            </CardBody>
          </Card>
        </Col>
        <Col xl={6} md={12}>
          <Card>
            <CardHeader>
              <h5>Pie [ Basic Column ] Chart</h5>
            </CardHeader>
            <CardBody className="text-center">
              <PieBasicColumnChart />
            </CardBody>
          </Card>
        </Col>
        <Col xl={6} md={12}>
          <Card>
            <CardHeader>
              <h5>Pie [ Doughnut ] Chart</h5>
            </CardHeader>
            <CardBody className="text-center">
              <PieDoughnutChart />
            </CardBody>
          </Card>
        </Col>
        <Col xl={12}>
          <Card>
            <CardHeader>
              <h5>Pie [ Timeline ] Chart</h5>
            </CardHeader>
            <CardBody className="text-center">
              <PieTimelineChart />
            </CardBody>
          </Card>
        </Col>
        <Col xl={12}>
          <Card>
            <CardHeader>
              <h5>Gauge Chart</h5>
            </CardHeader>
            <CardBody className="text-center">
              <GaugeChart />
            </CardBody>
          </Card>
        </Col>
        <Col xl={12}>
          <Card>
            <CardHeader>
              <h5>DynamicLineBar Chart</h5>
            </CardHeader>
            <CardBody className="text-center">
              <DynamicLineBarChart />
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default EChart;
