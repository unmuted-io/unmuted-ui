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
import { Home } from "react-feather";

class BreadcrumbIcon extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Breadcrumb Icon</h5>
        </CardHeader>
        <CardBody>
          <Breadcrumb>
            <BreadcrumbItem active>
              <Home size={14} />
            </BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="#">
                <Home size={14} />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Library</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="#">
                <Home size={14} />
              </Link>
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

export default BreadcrumbIcon;
