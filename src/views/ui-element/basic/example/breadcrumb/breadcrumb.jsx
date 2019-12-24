// import external modules
import React, { Component } from "react";
import {
  Card,
  Breadcrumb,
  BreadcrumbItem,
  CardHeader,
  CardBody
} from "reactstrap";
import { Link } from "react-router-dom";

class Breadcrumbs extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Breadcrumb</h5>
        </CardHeader>
        <CardBody>
          <Breadcrumb>
            <BreadcrumbItem active>Home</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="#">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Library</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="#">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="#">Library</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Data</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    );
  }
}

export default Breadcrumbs;
