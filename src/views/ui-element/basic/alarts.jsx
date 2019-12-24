// import external modules
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// import internal(own) modules
import BasicAlert from "./example/alerts/basicAlerts";
import LinkAlert from "./example/alerts/linkAlerts";
import DismissingAlerts from "./example/alerts/dismissingAlerts";
import ContentAlert from "./example/alerts/contentAlerts";

class Alarts extends Component {
  render() {
    return (
      <Row>
        <Col md="12">
          <BasicAlert />
        </Col>
        <Col md="6">
          <LinkAlert />
        </Col>
        <Col md="6">
          <DismissingAlerts />
        </Col>
        <Col md="12">
          <ContentAlert />
        </Col>
      </Row>
    );
  }
}

export default Alarts;
