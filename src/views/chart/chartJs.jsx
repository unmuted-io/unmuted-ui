import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import BarChartJs from "../../components/chartJs/barBasicChart";
import BarStackChart from "../../components/chartJs/barStackedChart";
import BarHorizontalChart from "../../components/chartJs/barHorizontalChart";
import LineInterpolationChart from "../../components/chartJs/lineInterpolationChart";
import LineOriginChart from "../../components/chartJs/lineOriginChart";
import LineFillEndChart from "../../components/chartJs/lineFillEndChart";
import LineBasicChart from "../../components/chartJs/lineBasicChart";
import RaderAreaChart from "../../components/chartJs/radarAreaChart";
import RaderAreaChart2 from "../../components/chartJs/radarAreaChart2";
import RaderAreaChart3 from "../../components/chartJs/radarAreaChart3";
import PieChart from "../../components/chartJs/pieChart";
import DoughnutChart from "../../components/chartJs/doughnutChart";

class ChartJs extends Component {
  render() {
    return (
      <Row>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Bar Chart</h5>
            </CardHeader>
            <CardBody>
              <BarChartJs height="340px" />
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Bar [ Stacked ] Chart</h5>
            </CardHeader>
            <CardBody>
              <BarStackChart />
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Bar [ Horizontal ] Chart</h5>
            </CardHeader>
            <CardBody>
              <BarHorizontalChart />
            </CardBody>
          </Card>
        </Col>
        <Col xl={12} md={6}>
          <Card>
            <CardHeader>
              <h5>Line [ Interpolation Mode ] Chart</h5>
            </CardHeader>
            <CardBody>
              <LineInterpolationChart />
            </CardBody>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <CardHeader>
              <h5>Area [ Fill: 'origin' ] Chart</h5>
            </CardHeader>
            <CardBody>
              <LineOriginChart />
            </CardBody>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <CardHeader>
              <h5>Area [ Fill: 'end' ] Chart</h5>
            </CardHeader>
            <CardBody>
              <LineFillEndChart />
            </CardBody>
          </Card>
        </Col>
        <Col xl={12}>
          <Card>
            <CardHeader>
              <h5>Area Chart</h5>
            </CardHeader>
            <CardBody>
              <LineBasicChart />
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Radar [ Area ] Chart</h5>
            </CardHeader>
            <CardBody>
              <RaderAreaChart />
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Radar [ Area ] Chart</h5>
            </CardHeader>
            <CardBody>
              <RaderAreaChart2 />
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Radar [ Area ] Chart</h5>
            </CardHeader>
            <CardBody>
              <RaderAreaChart3 />
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Pie Chart</h5>
            </CardHeader>
            <CardBody>
              <PieChart />
            </CardBody>
          </Card>
        </Col>

        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Donut Chart</h5>
            </CardHeader>
            <CardBody>
              <DoughnutChart />
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default ChartJs;
