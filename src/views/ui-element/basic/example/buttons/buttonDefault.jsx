// import external modules
import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader } from "reactstrap";

class ButtonDefault extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Default</h5>
        </CardHeader>
        <CardBody>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="success">Success</Button>
          <Button color="danger">Danger</Button>
          <Button color="warning">Warning</Button>
          <Button color="info">Info</Button>
          <Button color="light">Light</Button>
          <Button color="dark">Dark</Button>
          <Button color="link">Link</Button>
        </CardBody>
      </Card>
    );
  }
}

export default ButtonDefault;
