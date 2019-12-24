import React, { Component } from "react"
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MarketingCampaignStatic from "../../amChart/staticsPieChart/marketingCampaignStatics";

class MarketingCampaignCard extends Component {
  render() {
    const props = this.props
    return (
      <Card>
        <CardHeader>
          <h5>{props.title}</h5>
        </CardHeader>
        <CardBody>
          <MarketingCampaignStatic height="200px" />
          <Row>
            <Col xl={6} md={12}>
              <span className="d-block mb-2">
                <FontAwesomeIcon
                  icon="circle"
                  className="text-c-blue f-10 m-r-10"
                  style={{ color: "#67b7dc" }}
                />
                Facebook ads<span className="float-right f-w-400">85.7%</span>
              </span>
              <span className="d-block mb-2">
                <FontAwesomeIcon
                  icon="circle"
                  className="text-c-purple f-10 m-r-10"
                  style={{ color: "#8067dc" }}
                />
                Youtube videos<span className="float-right f-w-400">20.9%</span>
              </span>
              <span className="d-block mb-2">
                <FontAwesomeIcon
                  icon="circle"
                  className="text-c-red f-10 m-r-10"
                  style={{ color: "#dc67ce" }}
                />
                Twitter ads<span className="float-right f-w-400">15.8%</span>
              </span>
            </Col>
            <Col xl={6} md={12}>
              <span className="d-block mb-2">
                <FontAwesomeIcon
                  icon="circle"
                  className="text-c-blue f-10 m-r-10"
                  style={{ color: "#dc6967" }}
                />
                Amazon ads<span className="float-right f-w-400">77.56%</span>
              </span>
              <span className="d-block mb-2">
                <FontAwesomeIcon
                  icon="circle"
                  className="text-c-yellow f-10 m-r-10"
                  style={{ color: "#dc6967" }}
                />
                Google adsense<span className="float-right f-w-400">10.9%</span>
              </span>
              <span className="d-block mb-2">
                <FontAwesomeIcon
                  icon="circle"
                  className="text-c-green f-10 m-r-10"
                  style={{ color: "#7ddc67" }}
                />
                News ads<span className="float-right f-w-400">86.7%</span>
              </span>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}

export default MarketingCampaignCard
