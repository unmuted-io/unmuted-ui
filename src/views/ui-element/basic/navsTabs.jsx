// import external modules
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// import internal(own) modules
import BasicTabs from "./example/tabs/basicTabs";
import PillTabs from "./example/tabs/pillTabs";
import VerticalTabs from "./example/tabs/verticalTabs";

class NavsTabs extends Component {
  render() {
    return (
      <Row>
        <Col sm="12">
          <h5>Basic Tabs</h5>
          <hr />
          <BasicTabs />
        </Col>
        <Col sm="12">
          <h5 className="mt-4">Basic Pills</h5>
          <hr />
          <PillTabs />
        </Col>
        <Col sm="12">
          <h5 className="mt-4">Vertical Pills</h5>
          <hr />
          <VerticalTabs />
        </Col>
      </Row>
    );
  }
}

export default NavsTabs;
