import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import StaticLegendPieChart from "../../components/amChart/staticsPieChart/staticLegendPieChart";
import StaticStackedChart from "../../components/amChart/staticsXYChart/staticStackedChart";
import StaticHeatMap from "../../components/amChart/staticsMap/staticHeatMap";

class AmCharts extends Component {
  render() {
    return (
      <Row>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Amchart 4</h5>
            </CardHeader>
            <CardBody>
              <h3 className="mb-4">Pie Chart</h3>
              <Row>
                <Col md={12} className="mb-5">
                  <h5>Pie [ With Legend ] Chart</h5>
                  <hr />
                  <StaticLegendPieChart height="400px" />
                </Col>
              </Row>
              <h3 className="mb-4 mt-5">XY Chart</h3>
              <Row>
                <Col md={12} className="mb-5">
                  <h5>XY [ Stacked 1 ] Chart</h5>
                  <hr />
                  <StaticStackedChart height="400px" />
                </Col>
              </Row>
              <h3 className="mb-4 mt-5">Map Chart</h3>
              <Row>
                <Col md={12} className="mb-5">
                  <h5>Map [ Heat-Map ] Chart</h5>
                  <hr />
                  <StaticHeatMap height="400px" />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default AmCharts;
