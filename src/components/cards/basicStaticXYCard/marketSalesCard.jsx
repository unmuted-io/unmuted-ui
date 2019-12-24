import React, { Component } from "react"
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap"
import MarketSalesStatics from "../../amChart/staticsXYChart/marketSalesStatics"

class MarketSales extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Market Sales</h5>
        </CardHeader>
        <CardBody>
          <h3>
            <i className="feather icon-trending-down text-c-red mr-3" />
            27,695.65
          </h3>
          <Row className="d-flex align-items-center text-center mt-4">
            <Col>
              <h6>Youtube</h6>
              <span className="text-c-red">- 16.85%</span>
            </Col>
            <Col>
              <h6>Facebook</h6>
              <span className="text-c-purple">+ 45.36%</span>
            </Col>
            <Col>
              <h6>Twitter</h6>
              <span className="text-c-blue">+ 50.69%</span>
            </Col>
          </Row>
          <MarketSalesStatics height="200px" />
        </CardBody>
      </Card>
    )
  }
}

export default MarketSales
