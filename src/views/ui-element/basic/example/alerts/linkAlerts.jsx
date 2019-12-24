// import external modules
import React, { Component } from "react";
import { Alert, Card, CardBody, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";

class LinkAlert extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Link Alerts</h5>
        </CardHeader>
        <CardBody>
          <Alert color="primary" fade={false}>
            A simple primary alert with
            <Link to="#" className="alert-link">
              an example link
            </Link>
            . Give it a click if you like.
          </Alert>
          <Alert color="secondary" fade={false}>
            A simple secondary alert with
            <Link to="#" className="alert-link">
              an example link
            </Link>
            . Give it a click if you like.
          </Alert>
          <Alert color="success" fade={false}>
            A simple success alert with
            <Link to="#" className="alert-link">
              an example link
            </Link>
            . Give it a click if you like.
          </Alert>
          <Alert color="danger" fade={false}>
            A simple danger alert with
            <Link to="#" className="alert-link">
              an example link
            </Link>
            . Give it a click if you like.
          </Alert>
          <Alert color="warning" fade={false}>
            A simple warning alert with
            <Link to="#" className="alert-link">
              an example link
            </Link>
            . Give it a click if you like.
          </Alert>
          <Alert color="info" fade={false}>
            A simple info alert with
            <Link to="#" className="alert-link">
              an example link
            </Link>
            . Give it a click if you like.
          </Alert>
          <Alert color="light" fade={false}>
            A simple light alert with
            <Link to="#" className="alert-link">
              an example link
            </Link>
            . Give it a click if you like.
          </Alert>
          <Alert color="dark" fade={false}>
            A simple dark alert with
            <Link to="#" className="alert-link">
              an example link
            </Link>
            . Give it a click if you like.
          </Alert>
        </CardBody>
      </Card>
    );
  }
}

export default LinkAlert;
