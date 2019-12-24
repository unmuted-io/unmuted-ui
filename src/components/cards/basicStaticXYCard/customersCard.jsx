import React, { Component } from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
import CustomersStatics from "../../amChart/staticsXYChart/customersStatics"

class CustomersCard extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <Row>
            <Col xs="auto">
              <span>Customers</span>
            </Col>
            <Col className="text-right">
              <h2 className="mb-0">826</h2>
              <span className="text-c-green">
                8.2%
                <i className="feather icon-trending-up ml-1" />
              </span>
            </Col>
          </Row>
          <CustomersStatics height="200px" />
          <Row className="mt-4">
            <Col>
              <h3 className="m-0">
                <i
                  className="fas fa-circle f-10 m-r-5"
                  style={{ color: "#67b7dc" }}
                />
                674
              </h3>
              <span className="ml-3">New</span>
            </Col>
            <Col>
              <h3 className="m-0">
                <i
                  className="fas fa-circle text-c-blue f-10 m-r-5"
                  style={{ color: "#dc6788" }}
                />
                182
              </h3>
              <span className="ml-3">Return</span>
            </Col>
            <Col>
              <h3 className="m-0">
                <i
                  className="fas fa-circle text-c-purple f-10 m-r-5"
                  style={{ color: "#a367dc" }}
                />
                768
              </h3>
              <span className="ml-3">Custom</span>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}

export default CustomersCard
