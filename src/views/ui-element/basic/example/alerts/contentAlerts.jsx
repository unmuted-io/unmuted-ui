// import external modules
import React, { Component } from "react";
import { Alert, Card, CardBody, CardHeader } from "reactstrap";

class ContentAlert extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Additional Content</h5>
        </CardHeader>
        <CardBody>
          <Alert color="success" fade={false}>
            <h4 className="alert-heading">Well done!</h4>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
            </p>
          </Alert>
        </CardBody>
      </Card>
    );
  }
}

export default ContentAlert;
