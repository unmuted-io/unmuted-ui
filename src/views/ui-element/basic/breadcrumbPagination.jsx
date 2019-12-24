// import external modules
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// import internal(own) modules
import Breadcrumbs from "./example/breadcrumb/breadcrumb";
import BreadcrumbIcon from "./example/breadcrumb/breadcrumbIcon";
import Paginations from "./example/pagination/pagination";

class BreadcrumbPagination extends Component {
  render() {
    return (
      <Row>
        <Col md="6">
          <Breadcrumbs />
        </Col>
        <Col md="6">
          <BreadcrumbIcon />
        </Col>
        <Col md="12">
          <Paginations />
        </Col>
      </Row>
    );
  }
}

export default BreadcrumbPagination;
